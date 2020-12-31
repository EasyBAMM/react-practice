import { combineReducers } from "redux";
import counter from "./1831-counter";
import sample from "./1831-sample";
import loading from "./1831-loaing2";
const rootReducer = combineReducers({
    counter,
    sample,
    loading,
});

export default rootReducer;
