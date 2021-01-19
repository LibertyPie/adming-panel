import { SUBCATEGORY_LIST_ERROR, SUBCATEGORY_LIST_REQUEST, SUBCATEGORY_LIST_SUCCESS,
 SUBCATEGORY_SINGLE_REQUEST, SUBCATEGORY_SINGLE_SUCCESS, SUBCATEGORY_SINGLE_ERROR,
 SUBCATEGORY_CU_REQUEST, SUBCATEGORY_CU_SUCCESS, SUBCATEGORY_CU_ERROR,
 SUBCATEGORY_DELETE_REQUEST, SUBCATEGORY_DELETE_SUCCESS, SUBCATEGORY_DELETE_ERROR } from "../constants";

export const getSubcategoryList = (id, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_LIST_REQUEST});
    try{
        let subcategories = await contract.getPaymentTypesByCatId(id).call();

        dispatch({type: SUBCATEGORY_LIST_SUCCESS, list: subcategories});
    }catch(e){
        dispatch({type: SUBCATEGORY_LIST_ERROR});
    }
}


export const getSingleSubcategory = (id, contract) => async dispatch => {
     dispatch({type: SUBCATEGORY_SINGLE_REQUEST});
    try{
        let subcategory = await contract.getPaymentTypeById(id).call();

        dispatch({type: SUBCATEGORY_SINGLE_SUCCESS, id: id, name: subcategory[0], cat_id: subcategory[1]});
    }catch(e){
        dispatch({type: SUBCATEGORY_SINGLE_ERROR});
    }
}

export const createNewSubcategory = (name, cat_id, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_CU_REQUEST});
    try{
        let id = await contract.addPaymentType(name, cat_id).call();

        dispatch({type: SUBCATEGORY_CU_SUCCESS, id: id, subcategory: name, cat_id: cat_id});
    }catch(e){
        dispatch({type: SUBCATEGORY_CU_ERROR});
    }
}

export const updateSubcategory = (id, name, cat_id, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_CU_REQUEST});
    try{
        await contract.updatePaymentType(id, name, cat_id).call();

        dispatch({type: SUBCATEGORY_CU_SUCCESS, id: id, subcategory: name, cat_id: cat_id});
    }catch(e){
        dispatch({type: SUBCATEGORY_CU_ERROR});
    }
}

export const deleteSubcategory = (id, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_DELETE_REQUEST});
    try{
        await contract.removePaymentType(id).call();

        dispatch({type: SUBCATEGORY_DELETE_SUCCESS });
    }catch(e){
        dispatch({type: SUBCATEGORY_DELETE_ERROR});
    }
}