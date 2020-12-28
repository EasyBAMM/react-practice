import { combineReducers } from "redux";
import counter from "./1761-counter";
import todos from "./1761-todos";

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
