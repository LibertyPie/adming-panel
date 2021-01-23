/**
 * LibertyPie (https://libertypie.com)
 * @author LibertyPie <hello@libertypie.com>
 * @license MIT
 */

import { 
    CATEGORY_LIST_REQUEST, CATEGORY_LIST_ERROR, CATEGORY_LIST_SUCCESS,
    CATEGORY_CU_REQUEST, CATEGORY_CU_ERROR, CATEGORY_CU_SUCCESS,
    CATEGORY_SINGLE_REQUEST, CATEGORY_SINGLE_SUCCESS, CATEGORY_SINGLE_ERROR,
    CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_DELETE_ERROR} from "../constants";


/**
 * get list of categories
 * @param {contract object} contract
 */
export const getCategories = (contract) => async dispatch => {
    dispatch({type: CATEGORY_LIST_REQUEST});
    try{
        let categories = await contract.getPaymentTypesCategories().call();

        dispatch({type: CATEGORY_LIST_SUCCESS, list: categories});
    }catch(e){
        dispatch({type: CATEGORY_LIST_ERROR});
    }
}



/**
 * get single category
 * @param {integer} id
 * @param {contract object} contract
 */
export const getSingleCategory = (id, contract) => async dispatch => {
     dispatch({type: CATEGORY_SINGLE_REQUEST});
    try{
        let category = await contract.addPaymentTypeCategory(id).call();

        dispatch({type: CATEGORY_SINGLE_SUCCESS, id: id, category: category});
    }catch(e){
        dispatch({type: CATEGORY_SINGLE_ERROR});
    }
}



/**
 * create new category
 * @param {string} name
 * @param {contract object} contract
 */
export const createNewCategory = (name, contract) => async dispatch => {
    dispatch({type: CATEGORY_CU_REQUEST});
    try{
        let id = await contract.addPaymentTypeCategory(name).call();

        dispatch({type: CATEGORY_CU_SUCCESS, id: id, category: name});
    }catch(e){
        dispatch({type: CATEGORY_CU_ERROR});
    }
}



/**
 * update an existing category
 * @param {integer} id
 * @param {string} name
 * @param {contract object} contract
 */
export const updateCategory = (id, name, contract) => async dispatch => {
    dispatch({type: CATEGORY_CU_REQUEST});
    try{
        await contract.updatePaymentTypeCategory(id, name).call();

        dispatch({type: CATEGORY_CU_SUCCESS, id: id, category: name});
    }catch(e){
        dispatch({type: CATEGORY_CU_ERROR});
    }
}




/**
 * delete an existing category
 * @param {integer} id
 * @param {contract object} contract
 */
export const deleteCategory = (id, contract) => async dispatch => {
    dispatch({type: CATEGORY_DELETE_REQUEST});
    try{
        await contract.deletePaymentTypeCategory(id).call();

        dispatch({type: CATEGORY_DELETE_SUCCESS });
    }catch(e){
        dispatch({type: CATEGORY_DELETE_ERROR});
    }
}