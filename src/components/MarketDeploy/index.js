import React, { useState, useEffect } from "react";
import { useSelect } from "@wordpress/data";
import { useEntityProp } from "@wordpress/core-data";
import $ from "jquery";
import { assert } from "@facts-kit/facts-sdk";
import { useArConnect } from "./useArConnect";
import { FactCard } from "./MarketWidget";

const DeployMarket = ({
  articleId,
  articleContent,
  attributes,
  setAttributes,
}) => {
  const [deploying, setDeploying] = useState(false);
  const [error, setError] = useState(null);
  const [txId, setTxId] = useState(null);
  const [address, connect, disconnect] = useArConnect();

  const postId = wp.data.select("core/editor").getCurrentPostId();
  const [meta, setMeta] = useEntityProp("postType", "post", "meta");

  useEffect(() => {
    console.log("meta", meta);
    let txId = null;
    meta.arweaveTxId.forEach((item) => {
      if (item && item.length >= 40 && item.length <= 50) {
        txId = item;
        return;
      }
    });

    if (txId) {
      setTxId(txId);
    }
  }, []);

  const handleDeploy = async () => {
    try {
      setDeploying(true);
      setError(null);

      console.log("Wallet not connected");
      await connect(); // Connect the wallet
      console.log("Wallet connected");

      const title = wp.data
        .select("core/editor")
        .getEditedPostAttribute("title");
      const content = wp.data
        .select("core/editor")
        .getEditedPostAttribute("content");

      console.log("title", title);
      console.log("content", content);

      // Deploy
      const result = await assert({
        use: "arweaveWallet",
        data: { title, content },
        tags: {
          type: "fact-post",
          title: "Test title",
          description: "test description",
          topics: ["topic-1", "topic-2"],
        },
        position: "support",
      });

      console.log("Assertion deployed successfully! TX ID:", result.tx);

      const postId = wp.data.select("core/editor").getCurrentPostId();

      // Call the PHP script to update the post meta with the txId
      $.ajax({
        url: "admin-ajax.php",
        type: "POST",
        data: {
          action: "arweave_tx",
          arweave_tx_id: result.tx,
          post_id: postId,
        },
        success: function (data) {
          console.log("Post meta updated successfully!");
          setTxId(result.tx); // Update the state with the txId
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Failed to update post meta:", errorThrown);
          setError("Failed to update post meta: " + errorThrown);
        },
      });

      setDeploying(false);
    } catch (err) {
      setDeploying(false);
      setError(err.message);
      console.error(err);
    }
  };

  // Change the component that's shown, based on whether we have a txId or not
  const MarketComponent = txId ? (
    <FactCard tx={txId} />
  ) : (
    <>
      <h1>Deploy</h1>
      <button disabled={deploying} onClick={handleDeploy}>
        {deploying ? "Deploying..." : "Deploy Market"}
      </button>
    </>
  );

  return (
    <div>
      {MarketComponent}
      {error && <div>{error}</div>}
    </div>
  );
};

export default DeployMarket;
