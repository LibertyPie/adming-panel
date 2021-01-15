import { CONTRACT_ADDRESS } from "../config";
import { CATEGORY_CONTRACT_INIT } from "../constants";
import {libertypie_core } from '../abi/libertypie_core'

export const initContract = () =>  async dispatch =>  {
    let contract = new web3.eth.Contract(libertypie_core, CONTRACT_ADDRESS);

    dispatch({type: CATEGORY_CONTRACT_INIT, contract: contract});
}

export const getCategories = (contract) => async dispatch => {
    let categories = await contract.getPaymentTypesCategories().call();
}