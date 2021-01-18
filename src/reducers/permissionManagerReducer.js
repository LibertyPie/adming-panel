import { PERMISSION_MANAGER_ERROR, PERMISSION_MANAGER_REQUEST, PERMISSION_MANAGER_SUCCESS, PERMISSION_MANAGER_UPDATE_ERROR,
 PERMISSION_MANAGER_UPDATE_REQUEST, PERMISSION_MANAGER_UPDATE_SUCCESS } from "../constants";

const initialState = {
  role: null,
  updateLoading: false,
  updateError: false,
  loading: false,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PERMISSION_MANAGER_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      }
      break;

    case PERMISSION_MANAGER_SUCCESS:
      return {
        ...state,
        role: action.role,
        error: false,
        loading: false
      }
      break;


    case PERMISSION_MANAGER_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
      break;

    case PERMISSION_MANAGER_UPDATE_REQUEST:
      return {
        ...state,
        updateError: false,
        updateLoading: true
      }
      break;


       case PERMISSION_MANAGER_UPDATE_SUCCESS:
      return {
        ...state,
        updateError: false,
        updateLoading: false
      }
      break;

    case PERMISSION_MANAGER_UPDATE_ERROR:
      return {
        ...state,
        updateError: true,
        updateLoading: false
      }
      break;

    default:
      return state;
  }
}