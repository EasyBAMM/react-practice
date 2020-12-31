import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/1811-counter";
import Counter from "../components/1811-Counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <div>
            <Counter
                number={number}
                onIncrease={increase}
                onDecrease={decrease}
            />
        </div>
    );
};

export default connect(
    (state) => ({
        number: state.counter,
    }),
    {
        increase,
        decrease,
    }
)(CounterContainer);
