import { SUBCATEGORY_LIST_REQUEST, SUBCATEGORY_LIST_ERROR, SUBCATEGORY_LIST_SUCCESS} from "../constants";

const initialState = {
  list: [],
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
      case SUBCATEGORY_LIST_REQUEST: 
      return {
          ...state,
          error: false,
          loading: true
      }
      break;
      case SUBCATEGORY_LIST_SUCCESS:
        return {
          ...state,
          list: action.list,
          error: false,
          loading: false
        }
      break;
      case SUBCATEGORY_LIST_ERROR:
        return {
          ...state,
          list: [],
          error:true
        }
      break;
      default:
          return state;
  }
}