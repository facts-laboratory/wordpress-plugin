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
    <>
      <style>{`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
          border: 0 solid #e5e7eb;
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-scroll-snap-strictness: proximity;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
        }
        ::after,
        ::before {
          --tw-content: "";
        }
        html {
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;
          font-family: ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
            "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol", "Noto Color Emoji";
          font-feature-settings: normal;
        }
        body {
          margin: 0;
          line-height: inherit;
        }
        hr {
          height: 0;
          color: inherit;
          border-top-width: 1px;
        }
        abbr:where([title]) {
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }
        a {
          color: inherit;
          text-decoration: inherit;
        }
        b,
        strong {
          font-weight: bolder;
        }
        code,
        kbd,
        pre,
        samp {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          font-size: 1em;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        table {
          text-indent: 0;
          border-color: inherit;
          border-collapse: collapse;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          font-weight: inherit;
          line-height: inherit;
          color: inherit;
          margin: 0;
          padding: 0;
        }
        button,
        select {
          text-transform: none;
        }
        [type="button"],
        [type="reset"],
        [type="submit"],
        button {
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
        }
        :-moz-focusring {
          outline: auto;
        }
        :-moz-ui-invalid {
          box-shadow: none;
        }
        progress {
          vertical-align: baseline;
        }
        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        summary {
          display: list-item;
        }
        blockquote,
        dd,
        dl,
        figure,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p,
        pre {
          margin: 0;
        }
        fieldset {
          margin: 0;
          padding: 0;
        }
        legend {
          padding: 0;
        }
        menu,
        ol,
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        textarea {
          resize: vertical;
        }
        input::-moz-placeholder,
        textarea::-moz-placeholder {
          opacity: 1;
          color: #9ca3af;
        }
        input::placeholder,
        textarea::placeholder {
          opacity: 1;
          color: #9ca3af;
        }
        [role="button"],
        button {
          cursor: pointer;
        }
        :disabled {
          cursor: default;
        }
        audio,
        canvas,
        embed,
        iframe,
        img,
        object,
        svg,
        video {
          display: block;
          vertical-align: middle;
        }
        img,
        video {
          max-width: 100%;
          height: auto;
        }
        [hidden] {
          display: none;
        }
        ::backdrop {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-scroll-snap-strictness: proximity;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .mt-2 {
          margin-top: 0.5rem;
        }
        .mt-4 {
          margin-top: 1rem;
        }
        .flex {
          display: flex;
        }
        .h-10 {
          height: 2.5rem;
        }
        .h-11 {
          height: 2.75rem;
        }
        .h-16 {
          height: 4rem;
        }
        .h-\[35px\] {
          height: 35px;
        }
        .h-\[75px\] {
          height: 75px;
        }
        .h-full {
          height: 100%;
        }
        .min-h-\[150px\] {
          min-height: 150px;
        }
        .w-12 {
          width: 3rem;
        }
        .w-16 {
          width: 4rem;
        }
        .w-\[400px\] {
          width: 400px;
        }
        .w-\[93\%\] {
          width: 93%;
        }
        .w-full {
          width: 100%;
        }
        .min-w-\[300px\] {
          min-width: 300px;
        }
        .flex-row {
          flex-direction: row;
        }
        .flex-col {
          flex-direction: column;
        }
        .items-start {
          align-items: flex-start;
        }
        .items-center {
          align-items: center;
        }
        .justify-start {
          justify-content: flex-start;
        }
        .justify-center {
          justify-content: center;
        }
        .justify-between {
          justify-content: space-between;
        }
        .gap-2 {
          gap: 0.5rem;
        }
        .gap-4 {
          gap: 1rem;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .overflow-ellipsis {
          text-overflow: ellipsis;
        }
        .rounded-full {
          border-radius: 9999px;
        }
        .rounded-md {
          border-radius: 0.375rem;
        }
        .rounded-xl {
          border-radius: 0.75rem;
        }
        .rounded-bl-none {
          border-bottom-left-radius: 0;
        }
        .rounded-br-none {
          border-bottom-right-radius: 0;
        }
        .border {
          border-width: 1px;
        }
        .border-2 {
          border-width: 2px;
        }
        .border-b-0 {
          border-bottom-width: 0;
        }
        .border-gray {
          --tw-border-opacity: 1;
          border-color: rgb(225 225 225 / var(--tw-border-opacity));
        }
        .border-secondary {
          --tw-border-opacity: 1;
          border-color: rgb(255 133 0 / var(--tw-border-opacity));
        }
        .bg-gray {
          --tw-bg-opacity: 1;
          background-color: rgb(225 225 225 / var(--tw-bg-opacity));
        }
        .bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        }
        .p-1 {
          padding: 0.25rem;
        }
        .p-4 {
          padding: 1rem;
        }
        .px-3 {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }
        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .py-1 {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }
        .py-2 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .text-sm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        .font-medium {
          font-weight: 500;
        }
        .font-semibold {
          font-weight: 600;
        }
        .text-\[\#4D4D4D\] {
          --tw-text-opacity: 1;
          color: rgb(77 77 77 / var(--tw-text-opacity));
        }
        .text-\[\#666666\] {
          --tw-text-opacity: 1;
          color: rgb(102 102 102 / var(--tw-text-opacity));
        }
        .text-\[\#808080\] {
          --tw-text-opacity: 1;
          color: rgb(128 128 128 / var(--tw-text-opacity));
        }
        .shadow-md {
          --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
            0 2px 4px -2px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
      <div className="min-w-[300px] w-[400px] rounded-xl overflow-hidden shadow-md border border-gray-200">
        <div className="w-full min-h-[150px]">
          <img
            src={
              "https://f7jnrvm6pd6i2vj2qbdk5wceumqg5kvb5e2tgowfs53cyk574pka.arweave.net/L9LY1Z54_I1VOoBGrthEoyBuqqHpNTM6xZd2LCu_49Q"
            }
            alt="thumbnailimg"
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-row items-center justify-between p-4">
          <div className="border border-gray-300 rounded-full px-3 py-1 text-[#666666]">
            {getFormattedDate(factCardState?.transaction?.block?.timestamp)}
          </div>

          <div className="flex flex-row items-center gap-2">
            {factCardState?.transaction?.tags
              ?.filter((t) => t.name?.includes("Topic"))
              .map((t) => {
                console.log("TEEE", t);
                return (
                  <div
                    key={t.name}
                    className="rounded-full border-secondary border px-3 py-1 text-[#666666]"
                  >
                    {t.value}
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 px-4 py-2">
          <div className="border-2 border-navy rounded-full overflow-hidden w-16 h-16">
            <img
              src={
                factCardState?.player?.profile?.avatarURL ||
                "https://lhgj77ha7gae5trx7dsfayn6nkamlqjqbaqz76sc55jwn7r2vila.arweave.net/Wcyf_OD5gE7ON_jkUGG-aoDFwTAIIZ_6Qu9TZv46qhY"
              }
              alt="authorImg"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start">
            {/* beta-todo: move text color to theme */}
            <h4 className="text-[#808080] text-sm">Player</h4>
            <h3 className="font-semibold text-lg">
              {factCardState?.player?.handle}
            </h3>
          </div>
        </div>

        <div className="px-4 py-2">
          <h2 className="font-semibold text-2xl h-[35px] line-clamp-1 overflow-ellipsis">
            {
              factCardState?.transaction?.tags?.filter(
                (t) => t?.name === "Title"
              )[0]?.value
            }
          </h2>
          <p className="text-[#808080] mt-2 h-[75px] line-clamp-3 overflow-ellipsis">
            {
              factCardState?.transaction?.tags?.filter(
                (t) => t?.name === "Description"
              )[0]?.value
            }
          </p>
        </div>

        <div className="w-[93%] mx-auto rounded-md p-4 border border-b-0 rounded-bl-none rounded-br-none">
          <div className="">
            <h4 className="font-medium">Support</h4>
            <div className="w-full flex flex-row items-center gap-4 justify-between">
              <div className="w-12 h-11 rounded-full text-[#4D4D4D] border border-gray flex justify-center items-center">
                <span className="font-medium p-1">
                  {getPercentage(
                    getTotalBalances(
                      factCardState?.contractState?.balances || {}
                    ),
                    getTotalBalances(
                      factCardState?.contractState?.balances || {}
                    ) +
                      getTotalBalances(
                        factCardState?.contractState?.oppositionBalances || {}
                      )
                  ) || 0}
                  %
                </span>
              </div>

              <div className="w-full h-10 rounded-full bg-gray flex justify-start items-center p-1">
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    width: `${
                      getPercentage(
                        getTotalBalances(
                          factCardState?.contractState?.balances || {}
                        ),
                        getTotalBalances(
                          factCardState?.contractState?.balances || {}
                        ) +
                          getTotalBalances(
                            factCardState?.contractState?.oppositionBalances ||
                              {}
                          )
                      ) || 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-medium">Oppose</h4>
            <div className="w-full flex flex-row items-center gap-4 justify-between">
              <div className="w-12 h-11 rounded-full text-[#4D4D4D] border border-gray flex justify-center items-center">
                <span className="font-medium p-1">
                  {getPercentage(
                    getTotalBalances(
                      factCardState?.contractState?.oppositionBalances || {}
                    ),
                    getTotalBalances(
                      factCardState?.contractState?.balances || {}
                    ) +
                      getTotalBalances(
                        factCardState?.contractState?.oppositionBalances || {}
                      )
                  ) || 0}
                  %
                </span>
              </div>

              <div className="w-full h-10 rounded-full bg-gray flex justify-start items-center p-1">
                <div
                  className={`h-full bg-white rounded-full`}
                  style={{
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
          </div>
        </div>
      </div>
    </>
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
