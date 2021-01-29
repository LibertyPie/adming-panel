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


        let is_moderator = await contract.methods.isModerator(addr).call();
        console.log("mod", is_moderator);
        if(is_moderator){
            role = "MODERATOR";
        }


        let is_admin = await contract.methods.isAdmin(addr).call();
        console.log("adm", is_admin);
        if(is_admin){
            role = "ADMIN";
        }

        let is_super_admin = await contract.methods.isSuperAdmin(addr).call();
        console.log("sup-adm", is_super_admin);
        if(is_super_admin){
            role = "SUPER ADMIN";
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
export const updateRole = (addr, web3, _role, account, contract) => async dispatch => {
    dispatch({type: PERMISSION_MANAGER_UPDATE_REQUEST});
    
    try{
        // 0xf6f574224d28f52FeDE69a68E3Cb63411640E011
        let role = web3.utils.fromAscii(_role);
        console.log(role);
        await contract.methods.addRole(role, addr).send({from: account});

        dispatch({type: PERMISSION_MANAGER_UPDATE_SUCCESS});
    }catch(error){
        console.log(error);
        dispatch({type: PERMISSION_MANAGER_UPDATE_ERROR});
    }

}



/**
 * update role of an address
 * @param {string} role
 * @param {web3} web3
 * @param {address} addr
 * @param {contract object} contract
 */
export const revokeRole = (addr, web3, _role, account, contract) => async dispatch => {
    dispatch({type: PERMISSION_MANAGER_UPDATE_REQUEST});
    
    try{
        // 0xf6f574224d28f52FeDE69a68E3Cb63411640E011
        console.log(_role);
        let role = web3.utils.fromAscii(_role);
        console.log(role);
        await contract.methods.revokeRole(role, addr).send({from: account});

        dispatch({type: PERMISSION_MANAGER_UPDATE_SUCCESS});
    }catch(error){
        console.log(error);
        dispatch({type: PERMISSION_MANAGER_UPDATE_ERROR});
    }

}