import React, { useState } from "react";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import("./1921-SplitMe"), {
    fallback: <div>loading...</div>,
});

const SplitMeApp = () => {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    const onMouseOver = () => {
        SplitMe.preload();
    };

    return (
        <div>
            <p onClick={onClick} onMouseOver={onMouseOver}>
                Hello React!
            </p>
            {visible && <SplitMe />}
        </div>
    );
};

export default SplitMeApp;
