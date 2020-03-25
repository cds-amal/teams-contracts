// goerli
import goerli_SimpleStorage from "./deployed-contracts/goerli/SimpleStorage.json";

// ropsten
import ropsten_SimpleStorage from "./deployed-contracts/ropsten/SimpleStorage.json";

const { chainId } = window.ethereum
let SimpleStorage;

switch(chainId) {
  case '0x3':
    SimpleStorage = ropsten_SimpleStorage
    break;

  /* case '0x4':
   *   SimpleStorage = rinkeby_SimpleStorage
   *   break; */

  case '0x5':
  default:
    SimpleStorage = goerli_SimpleStorage

    SimpleStorage = goerli_SimpleStorage
}

const options = {
  contracts: [SimpleStorage],
  polls: {
    accounts: 10 * 1000
  }
  // events: {
    // SimpleStorage: [ "CookieJarRaided", "DonationReceived", "UniqueVisitor", "StorageSet" ],
  // },
};

export default options;
