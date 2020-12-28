import React from "react";
import { connect } from "react-redux";
import Counter from "../components/1721-Counter";
import { decrease, increase } from "../modules/1731-counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default connect(
    (state) => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    }
)(CounterContainer);
