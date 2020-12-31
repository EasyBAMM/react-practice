import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer, { rootSaga } from "./modules/1832-index";
// import loggerMiddleware from "./lib/1821-loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
