import { SUBCATEGORY_LIST_ERROR, SUBCATEGORY_LIST_REQUEST, SUBCATEGORY_LIST_SUCCESS } from "../constants";

export const getSubcategoryList = (id, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_LIST_REQUEST});
    try{
        let subcategories = await contract.getPaymentTypesByCatId(id).call();

        dispatch({type: SUBCATEGORY_LIST_SUCCESS, list: subcategories});
    }catch(e){
        dispatch({type: SUBCATEGORY_LIST_ERROR});
    }
}