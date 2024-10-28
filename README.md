# Build & Deploy a Crypto Portfolio DApp | NFT & ERC20 Exchange for Any Blockchain | MetaMask Portfolio Clone

Crypto Portfolio DApp | NFT & ERC20 Exchange for Any Blockchain | MetaMask Portfolio Clone

In this tutorial, we walk you through building and deploying a complete crypto portfolio DApp that supports NFTs, ERC20 tokens, and crypto exchanges on any blockchain network, just like a MetaMask portfolio clone! Using Next.js, Solidity, and Wagmi, you’ll learn how to track assets, manage tokens, and integrate with MetaMask. Perfect for developers looking to create a fully functional blockchain application. Subscribe for more blockchain development tutorials!

#CryptoPortfolio #NFTDApp #ERC20Exchange #MetaMaskClone #BlockchainDevelopment #Nextjs #Wagmi #Solidity #CryptoTrading

## Project Overview

![alt text](https://www.daulathussain.com/wp-content/uploads/2024/10/Build-Deploy-a-Crypto-Portfolio-DApp-NFT-ERC20-Exchange-for-Any-Blockchain-MetaMask-Portfolio-Clone.jpg)

Kindly follow the following Instructions to run the project in your system and install the necessary requirements

- [Final Source Code](https://www.theblockchaincoders.com/sourceCode/create-a-token-staking-dapp-and-earn-rewards-on-any-blockchain)

#### Setup Video

- [Final Code Setup video](https://youtu.be/VaIf4wkzl4c?si=xNvjLuauIxmq87IP)

```
  WATCH: Setup & Demo Of Project
```

#### Install Vs Code Editor

```
  URL: https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```
  URL: https://nodejs.org/en/download
  NodeJs: v18.17.1 || LATEST VERSION
  NPM: 8.19.2 || LATEST VERSION
```

#### ALL SOURCE CODE

```
PROJECT CODE: https://www.theblockchaincoders.com/sourceCode/create-a-token-staking-dapp-and-earn-rewards-on-any-blockchain
 URL: https://www.theblockchaincoders.com/SourceCode
  GET: Project Starter File Download
```

All you need to follow the complete project and follow the instructions which are explained in the tutorial by Daulat

## Final Code Instruction

If you download the final source code then you can follow the following instructions to run the Dapp successfully

#### What You Will Get

Once you download the final source code, you will get a ZIP file, then you will have 2 FOLDERS & README file which contain all the instructions to run the project and set video

#### Setup Video

```
  WATCH: Setup & Demo Of Project
```

#### ALL SOURCE CODE

```
  URL: https://www.theblockchaincoders.com/SourceCode
  GET: Project Starter File Download
```

#### Install Vs Code Editor

```
  URL: https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```
  URL: https://nodejs.org/en/download
  NodeJs: v18.17.1
  NPM: 8.19.2
```

#### RPU URL PROVIDER

```
  NAME: ANKR.COM
  URL: https://www.ankr.com/rpc/
```

#### OPEN AI

```
  NAME: OpenAI
  URL: https://platform.openai.com/docs/guides/production-best-practices/api-keys
```

#### COIN MARKET CAP

```
  NAME: Coinmarketcap.com
  URL: https://coinmarketcap.com/api/documentation/v1/#
```

#### Google Cloud Web3

Google Cloud Web3 will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```
  Get: Free Test Faucets
  URL : https://cloud.google.com/application/web3/faucet/ethereum
```

#### OTHER FAUCETS PROVIDER

```
  Get: Free Test Faucets
  URL 1 : https://docs.base.org/docs/tools/network-faucets/
  URL 2 : https://bwarelabs.com/faucets/base-sepolia
  URL 3 : https://cloud.google.com/application/web3/faucet
```

#### RemixID

We are using RemixID for deploying the contract and generation of the ABI in the project, but you can use any other tools like Hardhat, etc.

```
  OPEN: RemixID
  URL: https://remix-project.org
```

## Important Links

- [Get Pro Blockchain Developer Course](https://www.theblockchaincoders.com/pro-nft-marketplace)
- [Support Creator](https://bit.ly/Support-Creator)
- [All Projects Source Code](https://www.theblockchaincoders.com/SourceCode)

## Authors

- [@theblockchaincoders.com](https://www.theblockchaincoders.com/)
- [@consultancy](https://www.theblockchaincoders.com/consultancy)
- [@youtube](https://www.youtube.com/@daulathussain)

#### PACKAGES

```
{
  "name": "crypto-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "nodemon index.js",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@formspree/react": "^2.5.1",
    "@headlessui/react": "^2.1.8",
    "@heroicons/react": "^1.0.6",
    "@next/font": "13.4.13",
    "@nextui-org/react": "^1.0.0-beta.9",
    "@rainbow-me/rainbowkit": "^2.1.6",
    "@tanstack/react-query": "^5.56.2",
    "axios": "^1.6.8",
    "bcrypt": "^5.1.1",
    "compressorjs": "^1.2.1",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "ethers": "^5.7.2",
    "express": "^4.18.2",
    "file-saver": "^2.0.5",
    "js-cookie": "^3.0.5",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.3",
    "multer": "^1.4.5-lts.1",
    "next": "13.4.13",
    "nodemon": "^3.0.2",
    "openai": "^4.61.0",
    "path": "^0.12.7",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-dropzone": "^14.2.3",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.10.1",
    "sharp": "^0.33.4",
    "uuid": "^10.0.0",
    "viem": "^2.21.7",
    "wagmi": "^2.12.11",
    "web3modal": "^1.9.9"
  }
}
```

#### ENVIROMENT VARIABLES

```
# .env.local

# CONTRACT ADDRESS
NEXT_PUBLIC_HOLESKY_NFT_CREATOR =
NEXT_PUBLIC_HOLESKY_TOKEN_MARKETPLACE =

NEXT_PUBLIC_BASE_NFT_CREATOR =
NEXT_PUBLIC_BASE_TOKEN_MARKETPLACE =

# OPEN AI KEY
NEXT_PUBLIC_OPEN_AI_KEY =


# NETWORKS
NEXT_PUBLIC_HOLESKY_EXPLORER_URL = https://holesky.etherscan.io/tx/
NEXT_PUBLIC_HOLESKY_LOGO = holesky.png
NEXT_PUBLIC_BASE_EXPLORER_URL = https://sepolia.basescan.org/tx/
NEXT_PUBLIC_BASE_LOGO = base.png

# //WALLET CONNECT
NEXT_PUBLIC_WALLET_CONNECT =

# ADMIN
NEXT_PUBLIC_ADMIN_ADDRESS =

# PINATE KEYS
NEXT_PUBLIC_PINATA_AIP_KEY =
NEXT_PUBLIC_PINATA_SECRECT_KEY =

# COINMARKET CAP
NEXT_PUBLIC_API_KEY =

# DOMAIN URL & BRANDING
NEXT_PUBLIC_DOMAIN_URL = http://localhost:3000/uploads/
NEXT_PUBLIC_DOMAIN = @theblockchaincoders


# config.env

NODE_ENV=development
PORT=3000

# COINMARKET CAP
COINMARKET_CAP_API_KEY =

# PINATA
PINATA_AIP_KEY =
PINATA_SECRECT_KEY =

```
