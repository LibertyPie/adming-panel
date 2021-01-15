import { combineReducers } from "redux";
import commonReducer from "./commonReducer";

// Aggreating all the reducers defined

const rootReducer = combineReducers({
    common: commonReducer
});

export default rootReducer;
