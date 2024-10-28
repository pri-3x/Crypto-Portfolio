import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import toast, { Toaster } from "react-hot-toast";

import { StateContextProvider } from "../Context/index";
import { config } from "../Context/wagmiConfigs";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const WALLET_CONNECT = process.env.NEXT_PUBLIC_WALLET_CONNECT;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <StateContextProvider>
              <Component {...pageProps} />
              <Toaster />
            </StateContextProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
