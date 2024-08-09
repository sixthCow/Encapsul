import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: __dirname + "/.env" });

import "./tasks";

import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const accounts =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 31337,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },


    //  https://faucet.polygon.technology/
    fraxtestnet: {
      url: "https://rpc.testnet.frax.com" || "",
      accounts: accounts,
      chainId: 2522,
    },

    
    frax: {
      url: "https://rpc.frax.com" || "",
      accounts: accounts,
      chainId: 252,
    },

    base: {
      url: "https://sepolia.base.org" || "",
      accounts: accounts,
      chainId: 84532,
    },

    sepolia: {
      url: "https://sepolia.optimism.io" || "",
      accounts: accounts,
      chainId: 11155420,
    },
  },
  etherscan: {
    apiKey: {
     
      frax: process.env.ETHERSCAN_FRAX,
      base: process.env.ETHERSCAN_BASE,
      fraxtestnet: process.env.FRAX,
      sepolia: process.env.SEPOLIA",
    },
    customChains: [
     

      {
        network: "base",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org/",
        },
      },
      {
        network: "frax",
        chainId: 252,
        urls: {
          apiURL: "https://api.fraxscan.com/api",
          browserURL: "https://fraxscan.com/z",
        },
      },
      {
        network: "fraxtestnet",
        chainId: 2522,
        urls: {
          apiURL: "https://api-holesky.fraxscan.com/api",
          browserURL: "https://holesky.fraxscan.com/",
        },
      },
      {
        network: "sepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
          browserURL: "https://sepolia-optimism.etherscan.io/",
        },
      },
    ],
  },
};

export default config;
