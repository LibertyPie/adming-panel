import { PERMISSION_MANAGER_ERROR, PERMISSION_MANAGER_REQUEST, PERMISSION_MANAGER_SUCCESS, PERMISSION_MANAGER_UPDATE_ERROR,
 PERMISSION_MANAGER_UPDATE_REQUEST, PERMISSION_MANAGER_UPDATE_SUCCESS } from "../constants";

export const getRole = (addr, contract) => async dispatch => {
    dispatch({type: PERMISSION_MANAGER_REQUEST});
    try{
        let role = "USER";

        let is_super_admin = await contract.isSuperAdmin(addr).call();

        if(is_super_admin){
            role = "SUPER ADMIN";
        }

        let is_admin = await contract.isAdmin(addr).call();

        if(is_admin){
            role = "ADMIN";
        }

        let is_moderator = await contract.isModerator(addr).call();

        if(is_moderator){
            role = "MODERATOR";
        }

        dispatch({type: PERMISSION_MANAGER_SUCCESS, role: role});
    }catch(e){
        dispatch({type: PERMISSION_MANAGER_ERROR});
    }
}

export const updateRole = (addr, role, contract) => async dispatch => {
    dispatch({type: PERMISSION_MANAGER_UPDATE_REQUEST});
    
    try{

        await contract.addRole(role, addr).call();

        dispatch({type: PERMISSION_MANAGER_UPDATE_SUCCESS});
    }catch(error){
        dispatch({type: PERMISSION_MANAGER_UPDATE_ERROR});
    }

}