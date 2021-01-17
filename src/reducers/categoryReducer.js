import { CATEGORY_CU_REQUEST, CATEGORY_CU_SUCCESS, CATEGORY_CU_ERROR,
 CATEGORY_SINGLE_REQUEST, CATEGORY_SINGLE_SUCCESS, CATEGORY_SINGLE_ERROR } from "../constants";

const initialState = {
  id: null,
  category_name: "",
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
        loading: true
      }
      break;

    case CATEGORY_CU_ERROR:
      return {
        ...state,
        error: false,
        loading: true
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
        loading: true
      }
      break;

    case CATEGORY_SINGLE_ERROR:
      return {
        ...state,
        error: false,
        loading: true
      }
      break;

    default:
      return state;
  }
}