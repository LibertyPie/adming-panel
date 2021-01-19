import Web3 from "web3";
import { libertypie_core } from "../abi/libertypie_core";
import { CONTRACT_ADDRESS, PERMISSION_MANAGER_CONTRACT } from "../config";
import { WALLET_CONNECT_ERROR, WALLET_CONNECT_REQUEST, WALLET_CONNECT_SUCCESS } from "../constants";

export const connectWallet = () => async dispatch =>  {

    dispatch({type: WALLET_CONNECT_REQUEST});

    if (window.ethereum) {

        const web3 = new Web3(window.ethereum);


        try {
            var chainId = parseInt(window.ethereum.chainId, 16);
            if(chainId != 3){
                throw Error;
            }
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
          
            var accounts = await web3.eth.getAccounts();
            var firstAcc = accounts[0];

            let contract = new web3.eth.Contract(libertypie_core, CONTRACT_ADDRESS);

            let permissionManager = new web3.eth.Contract(libertypie_core, PERMISSION_MANAGER_CONTRACT);
          
            hookInWalletChange();
            dispatch({type: WALLET_CONNECT_SUCCESS, web3: web3, contract: contract, permissionManager: permissionManager, account: firstAcc});
        } catch (error) {
            dispatch({type: WALLET_CONNECT_ERROR});
            console.error(error);
        }
    }else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
  
        var accounts = await web3.eth.getAccounts();
        var firstAcc = accounts[0];

        let contract = new web3.eth.Contract(libertypie_core, CONTRACT_ADDRESS);

        let permissionManager = new web3.eth.Contract(libertypie_core, PERMISSION_MANAGER_CONTRACT);
        hookInWalletChange();
        dispatch({type: WALLET_CONNECT_SUCCESS, web3: web3, permissionManager: permissionManager, contract: contract, account: firstAcc});
    }else {
        dispatch({type: WALLET_CONNECT_ERROR});
        console.log("Not connected!");
    }
}

export const connectIfAuthorized = () => async dispatch =>  {
    
    if (window.ethereum) {
        try{
            const web3 = new Web3(window.ethereum);

            var accounts = await web3.eth.getAccounts();

            if(accounts.length > 0){
                var firstAcc = accounts[0];

                let contract = new web3.eth.Contract(libertypie_core, CONTRACT_ADDRESS);
                hookInWalletChange();
                dispatch({type: WALLET_CONNECT_SUCCESS, web3: web3, contract: contract, account: firstAcc});
            }
        }catch (error) {
        }
    }
}

function hookInWalletChange(){
    window.ethereum.on('accountsChanged', function (accounts) {
        window.location.href = window.location.href;
    })
    
    window.ethereum.on('networkChanged', function (networkId) {
        window.location.href = window.location.href;
    })
}