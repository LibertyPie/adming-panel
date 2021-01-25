/**
 * LibertyPie (https://libertypie.com)
 * @author LibertyPie <hello@libertypie.com>
 * @license MIT
 */


import { 
    SUBCATEGORY_LIST_ERROR, SUBCATEGORY_LIST_REQUEST, SUBCATEGORY_LIST_SUCCESS,
    SUBCATEGORY_SINGLE_REQUEST, SUBCATEGORY_SINGLE_SUCCESS, SUBCATEGORY_SINGLE_ERROR,
    SUBCATEGORY_CU_REQUEST, SUBCATEGORY_CU_SUCCESS, SUBCATEGORY_CU_ERROR,
    SUBCATEGORY_DELETE_REQUEST, SUBCATEGORY_DELETE_SUCCESS, SUBCATEGORY_DELETE_ERROR } from "../constants";




/**
 * Get subcategory list
 * @param {integer} id
 * @param {contract object} contract
 */
export const getSubcategoryList = (id, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_LIST_REQUEST});
    try{
        let subcategories = await contract.methods.getPaymentTypesByCatId(id).call();

        dispatch({type: SUBCATEGORY_LIST_SUCCESS, list: subcategories});
    }catch(e){
        console.log(e);
        dispatch({type: SUBCATEGORY_LIST_ERROR});
    }
}




/**
 * Get single subcategory
 * @param {integer} id
 * @param {contract object} contract
 */
export const getSingleSubcategory = (id, contract) => async dispatch => {
     dispatch({type: SUBCATEGORY_SINGLE_REQUEST});
    try{
        let subcategory = await contract.methods.getPaymentTypeById(id).call();

        dispatch({type: SUBCATEGORY_SINGLE_SUCCESS, id: id, name: subcategory[0], cat_id: subcategory[1]});
        return subcategory;
    }catch(e){
        dispatch({type: SUBCATEGORY_SINGLE_ERROR});
    }
}




/**
 * create new subcategory
 * @param {string} name
 * @param {integer} cat_id
 * @param {contract object} contract
 */
export const createNewSubcategory = (name, cat_id, addr, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_CU_REQUEST});
    try{
        let id = await contract.methods.addPaymentType(name, cat_id).send({from: addr});

        dispatch({type: SUBCATEGORY_CU_SUCCESS, id: id, subcategory: name, cat_id: cat_id});
    }catch(e){
        console.log(e);
        dispatch({type: SUBCATEGORY_CU_ERROR});
    }
}




/**
 * update an existing subcategory
 * @param {integer} id
 * @param {string} name
 * @param {integer} cat_id
 * @param {contract object} contract
 */
export const updateSubcategory = (id, name, cat_id, addr, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_CU_REQUEST});
    try{
        await contract.methods.updatePaymentType(id, name, cat_id).send({from: addr});

        dispatch({type: SUBCATEGORY_CU_SUCCESS, id: id, subcategory: name, cat_id: cat_id});
    }catch(e){
        console.log(e);
        dispatch({type: SUBCATEGORY_CU_ERROR});
    }
}




/**
 * delete an existing subcategory
 * @param {integer} id
 * @param {contract object} contract
 */
export const deleteSubcategory = (id, addr, contract) => async dispatch => {
    dispatch({type: SUBCATEGORY_DELETE_REQUEST});
    try{
        await contract.methods.removePaymentType(id).send({from: addr});

        dispatch({type: SUBCATEGORY_DELETE_SUCCESS });
    }catch(e){
        console.log(e);
        dispatch({type: SUBCATEGORY_DELETE_ERROR});
    }
}