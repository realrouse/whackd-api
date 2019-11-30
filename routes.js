
const express = require('express');
const router = express.Router();
const path = require('path')

const Web3 = require("web3")
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/1209a87da88d49e4b201ed55bc6761f6"))
const abi = [{ "constant": true, "inputs": [], "name": "burnPercent", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "lastRewardEthBlockNumber", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getMiningDifficulty", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "nonce", "type": "uint256" }, { "name": "challenge_digest", "type": "bytes32" }], "name": "mint", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardEra", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getMiningTarget", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getMiningReward", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getChallengeNumber", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maxSupplyForEra", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "tokensMinted", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lastRewardTo", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenOwner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "nonce", "type": "uint256" }, { "name": "challenge_digest", "type": "bytes32" }, { "name": "challenge_number", "type": "bytes32" }, { "name": "testTarget", "type": "uint256" }], "name": "checkMintSolution", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "epochCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_MAXIMUM_TARGET", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "miningTarget", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "challengeNumber", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "nonce", "type": "uint256" }, { "name": "challenge_digest", "type": "bytes32" }, { "name": "challenge_number", "type": "bytes32" }], "name": "getMintDigest", "outputs": [{ "name": "digesttest", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "_BLOCKS_PER_READJUSTMENT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lastRewardAmount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }, { "name": "data", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "latestDifficultyPeriodStarted", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "newOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "tokenAddress", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transferAnyERC20Token", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "_MINIMUM_TARGET", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "reward_amount", "type": "uint256" }, { "indexed": false, "name": "epochCount", "type": "uint256" }, { "indexed": false, "name": "newChallengeNumber", "type": "bytes32" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }]
const address = "0x26946adA5eCb57f3A1F91605050Ce45c482C9Eb1" //BitcoinSoV
const contract = new web3.eth.Contract(abi, address)
const decimalPlaces = 100000000

module.exports = router;

router.get('/api', (__, res) => {
    contract.methods.name().call((err, name) => { 
        contract.methods.totalSupply().call((err, totalSupply) => { 
            contract.methods.symbol().call((err, symbol) => { 
                contract.methods.decimals().call((err, decimals) => { 
                    contract.methods._MINIMUM_TARGET().call((err, minimumTarget) => { 
                        contract.methods._MAXIMUM_TARGET().call((err, maximumTarget) => { 
                            contract.methods.getMiningDifficulty().call((err, difficulty) => { 
                                contract.methods.getMiningTarget().call((err, miningTarget) => { 
                                    contract.methods.getChallengeNumber().call((err, challengeNumber) => { 
                                        contract.methods.epochCount().call((err, epochCount) => { 
                                            contract.methods.rewardEra().call((err, rewardEra) => { 
                                                contract.methods.maxSupplyForEra().call((err, maxSupplyForEra) => { 
                                                    contract.methods._BLOCKS_PER_READJUSTMENT().call((err, blocksPerReadjustment) => { 
                                                        contract.methods.latestDifficultyPeriodStarted().call((err, latestDifficultyPeriodStarted) => { 
                                                            contract.methods.tokensMinted().call((err, tokensMinted) => { 
                                                                contract.methods.lastRewardTo().call((err, lastRewardTo) => { 
                                                                    contract.methods.lastRewardAmount().call((err, lastRewardAmount) => { 
                                                                        contract.methods.lastRewardEthBlockNumber().call((err, lastRewardEthBlockNumber) => { 
                                                                            contract.methods.getMiningReward().call((err, currentMiningReward) => { 
                                                                                res.send({
                                                                                    name,
                                                                                    symbol,
                                                                                    totalSupply: JSON.parse(totalSupply),
                                                                                    totalSupplyFormatted: JSON.parse(totalSupply / decimalPlaces),
                                                                                    tokensMinted: JSON.parse(tokensMinted),
                                                                                    tokensMintedFormatted: JSON.parse(tokensMinted / decimalPlaces),
                                                                                    tokensBurned: 2100000000000000 - JSON.parse(totalSupply),
                                                                                    tokensBurnedFormatted: 21000000 - JSON.parse(totalSupply / decimalPlaces),
                                                                                    tokensBurnedPercent: ((21000000 - JSON.parse(totalSupply / decimalPlaces))/21000000),
                                                                                    contractURL: 'https://etherscan.io/address/0x26946ada5ecb57f3a1f91605050ce45c482c9eb1',
                                                                                    decimals: JSON.parse(decimals),
                                                                                    minimumTarget,
                                                                                    maximumTarget,
                                                                                    miningTarget,
                                                                                    difficulty: JSON.parse(difficulty),
                                                                                    challengeNumber,
                                                                                    epochCount: JSON.parse(epochCount),
                                                                                    rewardEra,
                                                                                    maxSupplyForEra: JSON.parse(maxSupplyForEra),
                                                                                    maxSupplyForEraFormatted: JSON.parse(maxSupplyForEra / decimalPlaces),
                                                                                    blocksPerReadjustment: JSON.parse(blocksPerReadjustment),
                                                                                    latestDifficultyPeriodStarted: JSON.parse(latestDifficultyPeriodStarted),
                                                                                    lastRewardTo,
                                                                                    lastRewardAmount: JSON.parse(lastRewardAmount),
                                                                                    lastRewardAmountFormatted: JSON.parse(lastRewardAmount / decimalPlaces),
                                                                                    lastRewardEthBlockNumber: JSON.parse(lastRewardEthBlockNumber),
                                                                                    currentMiningReward: JSON.parse(currentMiningReward),
                                                                                    currentMiningRewardFormatted: JSON.parse(currentMiningReward / decimalPlaces)
                                                                                }) 
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});

router.get('/', (__, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});