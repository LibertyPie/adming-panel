import { SUBCATEGORY_CU_REQUEST, SUBCATEGORY_CU_SUCCESS, SUBCATEGORY_CU_ERROR,
 SUBCATEGORY_SINGLE_REQUEST, SUBCATEGORY_SINGLE_SUCCESS, SUBCATEGORY_SINGLE_ERROR,
  SUBCATEGORY_DELETE_REQUEST, SUBCATEGORY_DELETE_SUCCESS, SUBCATEGORY_DELETE_ERROR } from "../constants";

const initialState = {
  id: null,
  cat_id: null,
  subcategory_name: "",
  errorDelete: false,
  loadingDelete: false,
  loading: false,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBCATEGORY_CU_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      }
      break;

    case SUBCATEGORY_CU_SUCCESS:

      return {
        ...state,
        id: action.id,
        cat_id: action.cat_id,
        subcategory_name: action.name,
        error: false,
        loading: true
      }
      break;

    case SUBCATEGORY_CU_ERROR:
      return {
        ...state,
        error: false,
        loading: true
      }
      break;
      
      
      case SUBCATEGORY_SINGLE_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      }
      break;

    case SUBCATEGORY_SINGLE_SUCCESS:
      return {
        ...state,
        id: action.id,
        cat_id: action.cat_id,
        subcategory_name: action.category,
        error: false,
        loading: true
      }
      break;

    case SUBCATEGORY_SINGLE_ERROR:
      return {
        ...state,
        error: false,
        loading: true
      }
      break;


    case SUBCATEGORY_DELETE_REQUEST:
      return {
        ...state,
        errorDelete: false,
        loadingDelete: true
      }
      break;

    case SUBCATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        errorDelete: false,
        loadingDelete: false
      }
      break;

    case SUBCATEGORY_DELETE_ERROR:
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