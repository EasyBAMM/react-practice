import { combineReducers } from "redux";
import counter from "./1831-counter";
import sample from "./1831-sample";
const rootReducer = combineReducers({
    counter,
    sample,
});

export default rootReducer;
