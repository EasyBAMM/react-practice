import { combineReducers } from "redux";
import counter from "./1731-counter";
import todos from "./1732-todos";

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
