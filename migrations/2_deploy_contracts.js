let ExchangerToken = artifacts.require("./ExchangerToken.sol");
let Exchange = artifacts.require("./Exchange.sol");

module.exports = function (deployer) {
    deployer.deploy(ExchangerToken);
    deployer.deploy(Exchange);
};