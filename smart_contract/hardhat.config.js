//https://eth-goerli.g.alchemy.com/v2/E_T1U7BqPU00VPCtiETgc0FWgfdSU6lz

require("@nomicfoundation/hardhat-toolbox");
//require("@nomicfoundation/hardhat-chai-matchers");
//require("@nomiclabs/hardhat-ethers");

const ALCHEMY_API_KEY = "E_T1U7BqPU00VPCtiETgc0FWgfdSU6lz";
const GOERLI_PRIVATE_KEY = "176b1b2d81e0be458e5b757a8119a0c7cb7254af984cb43ab842159e99c76ab5";

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/E_T1U7BqPU00VPCtiETgc0FWgfdSU6lz",
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
