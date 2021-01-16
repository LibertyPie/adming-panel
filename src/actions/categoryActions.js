import { CATEGORY_LIST_REQUEST, CATEGORY_LIST_ERROR, CATEGORY_LIST_SUCCESS } from "../constants";


export const getCategories = (contract) => async dispatch => {
    dispatch({type: CATEGORY_LIST_REQUEST});
    try{
        let categories = await contract.getPaymentTypesCategories().call();

        dispatch({type: CATEGORY_LIST_SUCCESS, list: categories});
    }catch(e){
        dispatch({type: CATEGORY_LIST_ERROR});
    }
}