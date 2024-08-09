"use client";

import { ReactNode } from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// tesnets
import { hardhat } from "wagmi/chains";


import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const base = {
  id: 84532 , 
  name: "base Sepolia",
  network: "BaseSepolia",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"], 
    },
    public: {
      http: ["https://sepolia.base.org"], 
    },
  },
  blockExplorers: {
    default: {
      name: "base blockscout",
      url: "https://base-sepolia.blockscout.com/", 
    },
  },
  testnet: true, 
};

const fraxtal = {
  id: 252, 
  name: "Fraxtal",
  network: "Fraxtal",
  nativeCurrency: {
    name: "frxETH",
    symbol: "frxETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.frax.com"], 
    },
    public: {
      http: ["https://rpc.frax.com"], 
    },
  },
  blockExplorers: {
    default: {
      name: "Fraxtal Explorer",
      url: "https://fraxscan.com/", 
    },
  },
  testnet: true, 
};

const vnet = {
  id: 84533, 
  name: "virtual_base",
  network: "virtual_base",
  nativeCurrency: {
    name: "VETH",
    symbol: "VETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://virtual.base.rpc.tenderly.co/1e50f9a0-82d7-4088-8039-0ed3192bd956"], 
    },
    public: {
      http: ["https://virtual.base.rpc.tenderly.co/1e50f9a0-82d7-4088-8039-0ed3192bd956"], 
    },
  },
  blockExplorers: {
    default: {
      name: "virtual_base Explorer",
      url: "https://virtual.base.rpc.tenderly.co/c22260f7-ff02-4fd0-8f26-10ef07ca4e23", 
    },
  },
  testnet: true, 
};

const testnets = [ fraxtal , vnet, base]


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
