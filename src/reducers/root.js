import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import categoryListReducer from "./categoryListReducer";
import commonReducer from "./commonReducer";

// Aggreating all the reducers defined

const rootReducer = combineReducers({
    common: commonReducer,
    categoryList: categoryListReducer,
    category: categoryReducer
});

export default rootReducer;
