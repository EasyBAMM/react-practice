import React from "react";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/1832-counter";
import Counter from "../components/1811-Counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <div>
            <Counter
                number={number}
                onIncrease={increaseAsync}
                onDecrease={decreaseAsync}
            />
        </div>
    );
};

export default connect(
    (state) => ({
        number: state.counter,
    }),
    {
        increaseAsync,
        decreaseAsync,
    }
)(CounterContainer);
