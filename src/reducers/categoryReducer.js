import { CATEGORY_CU_REQUEST, CATEGORY_CU_SUCCESS, CATEGORY_CU_ERROR,
 CATEGORY_SINGLE_REQUEST, CATEGORY_SINGLE_SUCCESS, CATEGORY_SINGLE_ERROR, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_DELETE_ERROR } from "../constants";

const initialState = {
  id: null,
  category_name: "",
  errorDelete: false,
  loadingDelete: false,
  loading: false,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CATEGORY_CU_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      }
      break;

    case CATEGORY_CU_SUCCESS:

      return {
        ...state,
        id: action.id,
        category_name: action.category,
        error: false,
        loading: false
      }
      break;

    case CATEGORY_CU_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
      break;
      
      
      case CATEGORY_SINGLE_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      }
      break;

    case CATEGORY_SINGLE_SUCCESS:
      return {
        ...state,
        id: action.id,
        category_name: action.category,
        error: false,
        loading: false
      }
      break;

    case CATEGORY_SINGLE_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
      break;


    case CATEGORY_DELETE_REQUEST:
      return {
        ...state,
        errorDelete: false,
        loadingDelete: true
      }
      break;

    case CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        errorDelete: false,
        loadingDelete: false
      }
      break;

    case CATEGORY_DELETE_ERROR:
      return {
        ...state,
        errorDelete: true,
        loadingDelete: false
      }
      break;

    default:
      return state;
  }
}