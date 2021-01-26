/**
 * LibertyPie (https://libertypie.com)
 * @author LibertyPie <hello@libertypie.com>
 * @license MIT
 */


import { 
    PERMISSION_MANAGER_ERROR,
    PERMISSION_MANAGER_REQUEST, 
    PERMISSION_MANAGER_SUCCESS,
    PERMISSION_MANAGER_UPDATE_ERROR, 
    PERMISSION_MANAGER_UPDATE_REQUEST, 
    PERMISSION_MANAGER_UPDATE_SUCCESS } from "../constants";



/**
 * Get role of an address
 * @param {address} addr
 * @param {contract object} contract
 */
export const getRole = (addr, contract) => async dispatch => {
    dispatch({type: PERMISSION_MANAGER_REQUEST});
    try{
        let role = "USER";

        let is_super_admin = await contract.methods.isSuperAdmin(addr).call();

        if(is_super_admin){
            role = "SUPER ADMIN";
        }

        let is_admin = await contract.methods.isAdmin(addr).call();

        if(is_admin){
            role = "ADMIN";
        }

        let is_moderator = await contract.methods.isModerator(addr).call();

        if(is_moderator){
            role = "MODERATOR";
        }

        dispatch({type: PERMISSION_MANAGER_SUCCESS, role: role});
    }catch(e){
        console.log(e);
        dispatch({type: PERMISSION_MANAGER_ERROR});
    }
}




/**
 * update role of an address
 * @param {string} role
 * @param {web3} web3
 * @param {address} addr
 * @param {contract object} contract
 */
export const updateRole = (addr, web3, _role, contract) => async dispatch => {
    dispatch({type: PERMISSION_MANAGER_UPDATE_REQUEST});
    
    try{
        let role = web3.utils.fromAscii(_role);
        await contract.methods.addRole(role, addr).call();

        dispatch({type: PERMISSION_MANAGER_UPDATE_SUCCESS});
    }catch(error){
        dispatch({type: PERMISSION_MANAGER_UPDATE_ERROR});
    }

}