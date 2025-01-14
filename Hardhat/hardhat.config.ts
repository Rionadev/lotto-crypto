import * as dotenv from 'dotenv'
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

const MNEMONIC = process.env.MNEMONIC;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const MATIC_RPC_URL = process.env.MATIC_RPC_URL;
const POLYGONSCANAPIKEY = process.env.POLYGONSCANAPIKEY;

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    hardhat: {
      chainId: 31337
    },
    polygonMumbai: {
      url: MUMBAI_RPC_URL !== undefined ? MUMBAI_RPC_URL : '',
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 80001
    },
    polygon: {
      url: MATIC_RPC_URL !== undefined ? MATIC_RPC_URL : '',
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 137
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCANAPIKEY !== undefined ? POLYGONSCANAPIKEY : '',
      polygon: POLYGONSCANAPIKEY !== undefined ? POLYGONSCANAPIKEY : '',
    }
  },
  sourcify: {
    enabled: true
  }
};

export default config;