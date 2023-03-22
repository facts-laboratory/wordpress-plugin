import { useEffect, useState } from "react";

export function useArConnect() {
  const [address, setAddress] = useState();

  useEffect(() => {
    if (!window) return;

    const onWalletSwitch = (e) => setAddress(e.detail.address);

    window.addEventListener("arweaveWalletLoaded", getAddressIfConnected);
    window.addEventListener("walletSwitch", onWalletSwitch);

    return () => {
      window.removeEventListener(
        "arweaveWalletLoaded",
        getAddressIfConnected
      );
      window.removeEventListener("walletSwitch", onWalletSwitch);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window?.arweaveWallet === "undefined") {
        console.log("arweaveWallet not loaded yet, trying again...");
        return;
      }

      clearInterval(interval);
      console.log("arweaveWallet loaded, getting address...");
      getAddressIfConnected();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  async function getAddressIfConnected() {
    try {
      console.log("Getting address in getAddressIfConnected");
      const addr = await window?.arweaveWallet.getActiveAddress();
      setAddress(addr);
      console.log("Address in getAddressIfConnected", addr);
    } catch {
      setAddress(undefined);
    }
  }

  async function connect() {
    try {
      console.log("Connecting to ArConnect");

      const permissions = [
        "ACCESS_ADDRESS",
        "ACCESS_ARWEAVE_CONFIG",
        "DISPATCH",
      ];

      console.log("Requesting permissions");

      try {

        console.log('window.arweaveWallet', window.arweaveWallet);

        await window.arweaveWallet.connect(permissions, {
          name: "permafacts",
        });
      } catch (e) {
        console.log(e);
      }

      try {
        console.log("Getting address");
        await getAddressIfConnected();
      } catch (e) {
        console.log(e);
      }
    } catch {}
  }

  async function disconnect() {
    try {
      await window.arweaveWallet.disconnect();
      setAddress(undefined);
    } catch {}
  }

  return [address, connect, disconnect];
}
