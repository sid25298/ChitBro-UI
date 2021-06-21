## ChitBro

A decentralised Chit-Fund app that cannot involve in fraud even if it wants to.

### Tech Stack:

* Frontend - React, Redux, SCSS
* Blockchain - Polygon(previously Matic)
* Smart Contracts - Solidity

### Deployment

* Smart Contract code deployed on Matic Mumbai
  Testnet [0x9a9f80E47e8D67D526e21A09aF1e385b0f7F88be](https://explorer-mumbai.maticvigil.com/address/0x9a9f80E47e8D67D526e21A09aF1e385b0f7F88be)
* Frontend written in React deployed on Firebase - [chitbro.web.app](https://chitbro.web.app)

### Local

* To start frontend connected to Matic test net, run `npm start`
* Smart Contract available on `contracts/ChitManager.sol` folder of this project
* ABI for the contract is at `src/TextNetwork.js`

### Uniqueness from other similar projects

* There are similar solutions that implement ChitFund on a blockchain, but they use blockchain only for securing and not
  crypto assets. For example: [chitmonks](chitmonks.com)
* DeFi platforms like [pooltogether](pooltogether.com),[aave](aave.com) are DeFi borrowing, lending, pooling protocols
  whereas Chit Funds are an Indian concept which is being democratized for the entire world through ChitBro.

Read more about the project and more context about Chit
Funds [here](https://www.notion.so/DeFi-Chit-e364c2cd701745afa924e117d4e3bdcd). The Presentation used during the
hackathon [here](https://cdn.discordapp.com/attachments/855532921867468851/856614941720838184/ChitBro_Presentation.pdf).
> Note: Web UI Design inspired from [pooltogether](app.pooltogether.com)