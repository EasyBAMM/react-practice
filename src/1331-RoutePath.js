import React from "react";
import { Route } from "react-router-dom";
import About from "./1323-About";
import Home from "./1323-Home";

const RoutePath = () => {
    return (
        <div>
            <Route path="/" component={Home} exact={true} />
            <Route path={["/about", "/info"]} component={About} />
        </div>
    );
};

export default RoutePath;
