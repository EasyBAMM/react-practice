import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/1721-Counter";
import { increase, decrease } from "../modules/1761-counter";

const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

export default React.memo(CounterContainer);
