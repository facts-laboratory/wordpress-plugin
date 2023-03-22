/* eslint-disable no-useless-escape */
import "./styles.css";

import Account from "arweave-account";
import { useEffect, useState } from "react";

export function FactCard(props) {
  const [factCardState, setFactCardState] = useState();
  useEffect(() => {
    fetchWidgetState(props).then(setFactCardState).catch(console.log);
  }, [props]);

  return (

<div style={{width: "100%", display: "grid", justifyItems: "center"}}>
      <div style={{minWidth: "300px", width: "400px", border: "2px solid #ccc", borderRadius: "0.5rem", overflow: "hidden", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"}}>
        <div style={{width: "100%", minHeight: "150px"}}>
          <img
            src={
              "https://f7jnrvm6pd6i2vj2qbdk5wceumqg5kvb5e2tgowfs53cyk574pka.arweave.net/L9LY1Z54_I1VOoBGrthEoyBuqqHpNTM6xZd2LCu_49Q"
            }
            alt="thumbnailimg"
            style={{width: "100%", height: "100%"}}
          />
        </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "1rem",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "1rem",
            padding: "0.25rem 0.5rem",
            color: "#666666",
          }}
        >
          {getFormattedDate(factCardState?.transaction?.block?.timestamp)}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {factCardState?.transaction?.tags
            ?.filter((t) => t.name?.includes("Topic"))
            .map((t) => {
              console.log("TEEE", t);
              return (
                <div
                  key={t.name}
                  style={{
                    border: "1px solid orange",
                    borderRadius: "1rem",
                    padding: "0.25rem 0.5rem",
                    color: "#666666",
                  }}
                >
                  {t.value}
                </div>
              );
            })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem 1rem 1rem 1rem",
        }}
      >
        <div
          style={{
            border: "2px solid navy",
            borderRadius: "50%",
            overflow: "hidden",
            width: "4rem",
            height: "4rem",
          }}
        >
              <img
                src={
                  factCardState?.player?.profile?.avatarURL ||
                  "https://lhgj77ha7gae5trx7dsfayn6nkamlqjqbaqz76sc55jwn7r2vila.arweave.net/Wcyf_OD5gE7ON_jkUGG-aoDFwTAIIZ_6Qu9TZv46qhY"
                }
                alt="authorImg"
                style={{ width: "100%", height: "100%" , paddingBottom: '2px'}}
              />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <h4
                style={{
                  color: "#808080",
                  fontSize: "0.875rem",
                  marginBottom: "0.5rem",
                }}
              >
              </h4>
              <h3 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                {factCardState?.player?.handle}
              </h3>
            </div>

          <div style={{ padding: "1rem" }}>
            <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
              {
                factCardState?.transaction?.tags?.filter(
                  (t) => t?.name === "Title"
                )[0]?.value
              }
            </h2>
            <p style={{ color: "#808080", marginTop: "0.5rem" }}>
              {
                factCardState?.transaction?.tags?.filter(
                  (t) => t?.name === "Description"
                )[0]?.value
              }
            </p>
          </div>
        </div>
      </div>

      <div
        className="progress-container"
        style={{
          width: "93%",
          margin: "0 auto",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          padding: "1rem",
          borderBottom: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <div 

          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <h4>Support</h4>
          <span style={{ fontWeight: "bold" }}>
            {getPercentage(
              getTotalBalances(factCardState?.contractState?.balances || {}),
              getTotalBalances(factCardState?.contractState?.balances || {}) +
                getTotalBalances(
                  factCardState?.contractState?.oppositionBalances || {}
                )
            ) || 0}
            %
          </span>
        </div>

        <div className="progress">
          <div
            className="progress-bar-container"
            style={{
              width: "100%",
              height: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#ccc",
            }}
          >
            <div
              className="progress-bar-filler"
              style={{
                height: "100%",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                width: `${
                  getPercentage(
                    getTotalBalances(
                      factCardState?.contractState?.balances || {}
                    ),
                    getTotalBalances(
                      factCardState?.contractState?.balances || {}
                    ) +
                      getTotalBalances(
                        factCardState?.contractState?.oppositionBalances || {}
                      )
                  ) || 0
                }%`,
              }}
            />
          </div>

          <div
            className="support-bar"
            style={{
              width: "35%",
              height: "100%",
              borderRadius: "0.5rem",
              backgroundColor: "gray",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >

          <h4>Oppose</h4>
          <span style={{ fontWeight: "bold" }}>
            {getPercentage(
              getTotalBalances(
                factCardState?.contractState?.oppositionBalances || {}
              ),
              getTotalBalances(factCardState?.contractState?.balances || {}) +
                getTotalBalances(
                  factCardState?.contractState?.oppositionBalances || {}
                )
            ) || 0}
            %
          </span>
        </div>

        <div className="progress">
          <div
            className="progress-bar-container"
            style={{
              width: "100%",
              height: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#ccc",
            }}
          >
            <div
              className="progress-bar-filler"
              style={{
                height: "100%",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                width: `${getPercentage(
                  getTotalBalances(
                    factCardState?.contractState?.balances || {}
                  ),
                  getTotalBalances(
                    factCardState?.contractState?.balances || {}
                  ) +
                    getTotalBalances(
                      factCardState?.contractState?.oppositionBalances || {}
                    )
                )}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ backgroundColor: "#22A2BD" }}>
            <div
              className="progress-bar-filler support-bar"
              style={{
                height: "100%",
                backgroundColor: "#22A2BD",
                borderRadius: "0.5rem",
                width: `${getPercentage(
                  getTotalBalances(
                    factCardState?.contractState?.balances || {}
                  ),
                  getTotalBalances(factCardState?.contractState?.balances || {})
                )}%`,
              }}
            ></div>
            <div
              className="progress-bar-filler oppose-bar"
              style={{
                height: "100%",
                backgroundColor: "#F04947",
                borderRadius: "0.5rem",
                width: `${getPercentage(
                  getTotalBalances(
                    factCardState?.contractState?.oppositionBalances || {}
                  ),
                  getTotalBalances(
                    factCardState?.contractState?.balances || {}
                  ) +
                    getTotalBalances(
                      factCardState?.contractState?.oppositionBalances || {}
                    )
                )}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default FactCard;

async function fetchWidgetState(input) {
  const { tx } = input;
  const transaction = input.transaction || (await fetchTx(tx));
  console.log("TRANSACTION", transaction);
  const contractState = await readState(tx);
  const account = new Account({
    cacheIsActivated: true,
    cacheSize: 100,
    cacheTime: 3600000, // 3600000ms => 1 hour cache duration
  });

  const player = await account.get((transaction?.owner).address);
  return {
    ...input,
    player,
    contractState: contractState.balances ? contractState : undefined,
    transaction,
    // contractState: ''
  };
}

export const readState = (tx) => {
  const CACHE = "https://cache.permapages.app";
  return fetch(`${CACHE}/${tx}`)
    .then((res) => res.json())
    .catch((e) => {
      console.log(e);
      return {
        error: e,
      };
    });
};

export const getContent = (contract) => {
  return fetch(`https://arweave.net/${contract}`).catch((e) => {
    console.log(e);
    return {
      error: e,
    };
  });
};

async function fetchTx(tx) {
  console.log("FETCHING TX", tx);
  const response = await fetch(getUrl(), {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.8",
      "content-type": "application/json",
    },
    body: `{\"operationName\":null,\"variables\":{},\"query\":\"{\\n  transactions(first: 1, ids: [\\\"${tx}\\\"]) {\\n    edges {\\n      node {\\n        id\\n        owner {\\n          address\\n        }\\n        block {\\n          timestamp\\n          height\\n        }\\n        tags {\\n          name\\n          value\\n        }\\n      }\\n    }\\n  }\\n}\\n\"}`,
    method: "POST",
    mode: "cors",
    credentials: "omit",
  });

  return getEdges(await response.json())[0].node;
}

export function getEdges(res) {
  if (!res?.data?.transactions?.edges) throw new Error("no edges");
  return res.data.transactions.edges;
}

/**
 * Creates the correct fetch url for gql using arweave config.
 *
 * @author mogulx_operates
 * @param {Config} config
 * @return {*}  {string}
 */
function getUrl() {
  return `https://arweave.net/graphql`;
}

export function getPercentage(position, total) {
  return Math.floor((100 * position) / total || 0);
}
export function getTotalBalances(balances) {
  if (Object.values(balances).length === 0) return 0;
  return Object.values(balances).reduce((a, b) => a + b);
}
export function getFormattedDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
