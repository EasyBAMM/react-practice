import React from "react";
import CounterContainer from "../containers/1771-CounterContainer";
import TodosContainer from "../containers/1774-TodosContainer";

const CounterTodosApp = () => {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer />
        </div>
    );
};

export default CounterTodosApp;
