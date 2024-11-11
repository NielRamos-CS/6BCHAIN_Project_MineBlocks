/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: {
      version: "0.8.20",  // Update to 0.8.20 to match OpenZeppelin imports
      settings: {
         optimizer: {
            enabled: true,
            runs: 200,  // Optional: Improves gas efficiency
         },
      },
   },
   defaultNetwork: "volta",
   networks: {
      hardhat: {},
      volta: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 2100000, 
         gasPrice: 800000000000,  
      }
   },
};
