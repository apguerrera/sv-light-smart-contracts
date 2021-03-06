var BPackedUtils = artifacts.require("./BPackedUtils.sol");
var SVIndex = artifacts.require("./SVIndex.sol");

var BBLib = artifacts.require("BBLib")
var BBLibV7 = artifacts.require("BBLibV7")
var BBFarm = artifacts.require("BBFarm")
var RemoteBBFarm = artifacts.require("RemoteBBFarm")
var RemoteBBFarmProxy = artifacts.require("RemoteBBFarmProxy")

module.exports = function(deployer) {
    deployer.deploy(BBLib)
    deployer.deploy(BBLibV7)
    // deployer.deploy(BPackedUtils);

    // deployer.link(BPackedUtils, SVIndex);
    deployer.link(BBLibV7, SVIndex)

    deployer.link(BBLibV7, BBFarm)

    deployer.link(BBLibV7, RemoteBBFarm)
    deployer.link(BBLibV7, RemoteBBFarmProxy)
};
