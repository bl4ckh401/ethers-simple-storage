const ethers = require("ethers")
const fs = require("fs")
require('dotenv').config();
async function main(){
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    console.log("Provider set")
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    // const encryptedKeyJson = fs.readFileSync(".encryptedPrivateKey.json")
    // let wallet = new ethers.Wallet.fromEncryptedJsonSync(encryptedKeyJson, process.env.PRIVATE_KEY_PASSWORD)
    // wallet=await wallet.connect(provider)
    // console.log(wallet);
    console.log("Wallet set")

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    const contract = await contractFactory.deploy();
    await contract.deployTransaction.wait(1);
    console.log(`Contract Address: ${contract.address}`)
    // const nonce = await wallet.getTransactionCount();
    // const tx = {
    //     nonce:nonce,
    //     gasPrice: 20000000000,
    //     gasLimit:1000000,
    //     to:null,
    //     value:0,
    //     data:"0x608060405260016000806101000a81548160ff0219169083151502179055507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe7760035573de30b9718a19fa40cc6ed9cd9e96237a68c1bf94600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f446f6700000000000000000000000000000000000000000000000000000000006005556040518060400160405280601e81526020017f54687265652068756e6472656420616e64206e696e65747920746872656500008152506006908162000101919062000390565b503480156200010f57600080fd5b5062000477565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200019857607f821691505b602082108103620001ae57620001ad62000150565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002187fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620001d9565b620002248683620001d9565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002716200026b62000265846200023c565b62000246565b6200023c565b9050919050565b6000819050919050565b6200028d8362000250565b620002a56200029c8262000278565b848454620001e6565b825550505050565b600090565b620002bc620002ad565b620002c981848462000282565b505050565b5b81811015620002f157620002e5600082620002b2565b600181019050620002cf565b5050565b601f82111562000340576200030a81620001b4565b6200031584620001c9565b8101602085101562000325578190505b6200033d6200033485620001c9565b830182620002ce565b50505b505050565b600082821c905092915050565b6000620003656000198460080262000345565b1980831691505092915050565b600062000380838362000352565b9150826002028217905092915050565b6200039b8262000116565b67ffffffffffffffff811115620003b757620003b662000121565b5b620003c382546200017f565b620003d0828285620002f5565b600060209050601f831160018114620004085760008415620003f3578287015190505b620003ff858262000372565b8655506200046f565b601f1984166200041886620001b4565b60005b8281101562000442578489015182556001820191506020850194506020810190506200041b565b868310156200046257848901516200045e601f89168262000352565b8355505b6001600288020188555050505b505050505050565b6109c980620004876000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e64cec11461005c5780636057361d1461007a5780636f760f41146100965780639e7a13ad146100b2578063b2ac62ef146100e3575b600080fd5b610064610113565b60405161007191906102dd565b60405180910390f35b610094600480360381019061008f9190610338565b61011d565b005b6100b060048036038101906100ab91906104ab565b610149565b005b6100cc60048036038101906100c79190610338565b6101da565b6040516100da929190610586565b60405180910390f35b6100fd60048036038101906100f891906105b6565b610296565b60405161010a91906102dd565b60405180910390f35b6000600154905090565b806001819055506001806000828254610136919061062e565b92505081905550610145610113565b5050565b6000604051806040016040528083815260200184815250905060078190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010190816101ad919061086e565b5050506001546002846040516101c3919061097c565b908152602001604051809103902081905550505050565b600781815481106101ea57600080fd5b906000526020600020906002020160009150905080600001549080600101805461021390610691565b80601f016020809104026020016040519081016040528092919081815260200182805461023f90610691565b801561028c5780601f106102615761010080835404028352916020019161028c565b820191906000526020600020905b81548152906001019060200180831161026f57829003601f168201915b5050505050905082565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6000819050919050565b6102d7816102c4565b82525050565b60006020820190506102f260008301846102ce565b92915050565b6000604051905090565b600080fd5b600080fd5b610315816102c4565b811461032057600080fd5b50565b6000813590506103328161030c565b92915050565b60006020828403121561034e5761034d610302565b5b600061035c84828501610323565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103b88261036f565b810181811067ffffffffffffffff821117156103d7576103d6610380565b5b80604052505050565b60006103ea6102f8565b90506103f682826103af565b919050565b600067ffffffffffffffff82111561041657610415610380565b5b61041f8261036f565b9050602081019050919050565b82818337600083830152505050565b600061044e610449846103fb565b6103e0565b90508281526020810184848401111561046a5761046961036a565b5b61047584828561042c565b509392505050565b600082601f83011261049257610491610365565b5b81356104a284826020860161043b565b91505092915050565b600080604083850312156104c2576104c1610302565b5b600083013567ffffffffffffffff8111156104e0576104df610307565b5b6104ec8582860161047d565b92505060206104fd85828601610323565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610541578082015181840152602081019050610526565b60008484015250505050565b600061055882610507565b6105628185610512565b9350610572818560208601610523565b61057b8161036f565b840191505092915050565b600060408201905061059b60008301856102ce565b81810360208301526105ad818461054d565b90509392505050565b6000602082840312156105cc576105cb610302565b5b600082013567ffffffffffffffff8111156105ea576105e9610307565b5b6105f68482850161047d565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610639826102c4565b9150610644836102c4565b925082820190508082111561065c5761065b6105ff565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806106a957607f821691505b6020821081036106bc576106bb610662565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026107247fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826106e7565b61072e86836106e7565b95508019841693508086168417925050509392505050565b6000819050919050565b600061076b610766610761846102c4565b610746565b6102c4565b9050919050565b6000819050919050565b61078583610750565b61079961079182610772565b8484546106f4565b825550505050565b600090565b6107ae6107a1565b6107b981848461077c565b505050565b5b818110156107dd576107d26000826107a6565b6001810190506107bf565b5050565b601f821115610822576107f3816106c2565b6107fc846106d7565b8101602085101561080b578190505b61081f610817856106d7565b8301826107be565b50505b505050565b600082821c905092915050565b600061084560001984600802610827565b1980831691505092915050565b600061085e8383610834565b9150826002028217905092915050565b61087782610507565b67ffffffffffffffff8111156108905761088f610380565b5b61089a8254610691565b6108a58282856107e1565b600060209050601f8311600181146108d857600084156108c6578287015190505b6108d08582610852565b865550610938565b601f1984166108e6866106c2565b60005b8281101561090e578489015182556001820191506020850194506020810190506108e9565b8683101561092b5784890151610927601f891682610834565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b600061095682610507565b6109608185610940565b9350610970818560208601610523565b80840191505092915050565b6000610988828461094b565b91508190509291505056fea2646970667358221220195ba554927ad7ef1b93af81701e4ae5201c37b8e07a17cab1f466268c678e3f64736f6c63430008110033",
    //     chainId: 1337,
    // }
    // const sentTxResponse = await wallet.sendTransaction(tx)
    // await sentTxResponse.wait(1)
    // console.log(sentTxResponse);
    const currentFavouriteNumber = await contract.retrieve();
    console.log(`Current Favourite number is: ${currentFavouriteNumber.toString()}`)
    const transactionResponse = await contract.store("7")
    const transactionReceipt = await transactionResponse.wait(1)
    const newFavouriteNumber = await contract.retrieve();
    console.log(`New Favourite number is: ${newFavouriteNumber.toString()}`)


}
main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})