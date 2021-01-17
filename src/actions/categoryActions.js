import { CATEGORY_LIST_REQUEST, CATEGORY_LIST_ERROR, CATEGORY_LIST_SUCCESS,
CATEGORY_CU_REQUEST, CATEGORY_CU_ERROR, CATEGORY_CU_SUCCESS,
CATEGORY_SINGLE_REQUEST,   
CATEGORY_SINGLE_SUCCESS,
CATEGORY_SINGLE_ERROR,
CATEGORY_DELETE_REQUEST,
CATEGORY_DELETE_SUCCESS,
CATEGORY_DELETE_ERROR} from "../constants";


export const getCategories = (contract) => async dispatch => {
    dispatch({type: CATEGORY_LIST_REQUEST});
    try{
        let categories = await contract.getPaymentTypesCategories().call();

        dispatch({type: CATEGORY_LIST_SUCCESS, list: categories});
    }catch(e){
        dispatch({type: CATEGORY_LIST_ERROR});
    }
}


export const getSingleCategory = (id, contract) => async dispatch => {
     dispatch({type: CATEGORY_SINGLE_REQUEST});
    try{
        let category = await contract.addPaymentTypeCategory(id).call();

        dispatch({type: CATEGORY_SINGLE_SUCCESS, id: id, category: category});
    }catch(e){
        dispatch({type: CATEGORY_SINGLE_ERROR});
    }
}

export const createNewCategory = (name, contract) => async dispatch => {
    dispatch({type: CATEGORY_CU_REQUEST});
    try{
        let id = await contract.addPaymentTypeCategory(name).call();

        dispatch({type: CATEGORY_CU_SUCCESS, id: id, category: name});
    }catch(e){
        dispatch({type: CATEGORY_CU_ERROR});
    }
}

export const updateCategory = (id, name, contract) => async dispatch => {
    dispatch({type: CATEGORY_CU_REQUEST});
    try{
        await contract.updatePaymentTypeCategory(id, name).call();

        dispatch({type: CATEGORY_CU_SUCCESS, id: id, category: name});
    }catch(e){
        dispatch({type: CATEGORY_CU_ERROR});
    }
}

export const deleteCategory = (id, contract) => async dispatch => {
    dispatch({type: CATEGORY_DELETE_REQUEST});
    try{
        await contract.deletePaymentTypeCategory(id).call();

        dispatch({type: CATEGORY_DELETE_SUCCESS });
    }catch(e){
        dispatch({type: CATEGORY_DELETE_ERROR});
    }
}