import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import commonReducer from "./commonReducer";

// Aggreating all the reducers defined

const rootReducer = combineReducers({
    common: commonReducer,
    category: categoryReducer
});

export default rootReducer;
