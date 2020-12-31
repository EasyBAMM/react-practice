import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./1832-counter";
import sample, { sampleSaga } from "./1832-sample";
import loading from "./1831-loading";

const rootReducer = combineReducers({
    counter,
    sample,
    loading,
});

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
