import React, { useState, Suspense } from "react";

const SplitMe = React.lazy(() => import("./1921-SplitMe"));

const SplitMeApp = () => {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    return (
        <div>
            <p onClick={onClick}>Hello React!</p>
            <Suspense fallback={<div>loading...</div>}>
                {visible && <SplitMe />}
            </Suspense>
        </div>
    );
};

export default SplitMeApp;
