const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/_BvnJciy80sTDllSLjy5CYtgcosiKFV9")
const contractAddress = "0x8764ab69d1bc3565652465ed75d8866a33cde620";
// const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/hgcLDoAF_C4XB81K5UamclnxPXz4pUty")
// const contractAddress = "0x95e0413cbc205ef16f18b2d07ef93bd0779ca4f6";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}