"use client";

import { ReactNode } from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// tesnets
import { hardhat } from "wagmi/chains";


import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const base = {
  id: 84532 , // Replace with your chain ID
  name: "base Sepolia",
  network: "BaseSepolia",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"], // Replace with your RPC URL
    },
    public: {
      http: ["https://sepolia.base.org"], // Replace with your public RPC URL
    },
  },
  blockExplorers: {
    default: {
      name: "base blockscout",
      url: "https://base-sepolia.blockscout.com/", // Replace with your block explorer URL
    },
  },
  testnet: true, // Set to false if this is a mainnet chain
};

const fraxtal = {
  id: 252, // Replace with your chain ID
  name: "Fraxtal",
  network: "Fraxtal",
  nativeCurrency: {
    name: "frxETH",
    symbol: "frxETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.frax.com"], // Replace with your RPC URL
    },
    public: {
      http: ["https://rpc.frax.com"], // Replace with your public RPC URL
    },
  },
  blockExplorers: {
    default: {
      name: "Fraxtal Explorer",
      url: "https://fraxscan.com/", // Replace with your block explorer URL
    },
  },
  testnet: true, // Set to false if this is a mainnet chain
};

const testnets = [ fraxtal , base]


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    ...(process.env.NEXT_PUBLIC_ENVIRONMENT == 'development' || process.env.NEXT_PUBLIC_ENVIRONMENT == 'testnet' ? (testnets) : []),

  ],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "",
    }),
    publicProvider(),
  ],
);
const { connectors } = getDefaultWallets({
  appName: "Encapsule",
  projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID ?? "",
  chains,
});
const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const Providers = ({ children }: { children: ReactNode }) => (
  <WagmiConfig config={config}>
    <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
  </WagmiConfig>
);

export { Providers };
