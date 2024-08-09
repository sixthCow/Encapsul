import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

import "./tasks";
tenderly.setup({ automaticVerifications: true });

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    virtual_base: {
      url: "https://virtual.base.rpc.tenderly.co/1e50f9a0-82d7-4088-8039-0ed3192bd956",
      accounts: [PRIVATEKEY],
      chainId: 84533,

    },
  },
  tenderly: {
    // https://docs.tenderly.co/account/projects/account-project-slug
    project: PROJECTNAME,
    username: PROJECTUSERNAME,
  },
};

export default config;