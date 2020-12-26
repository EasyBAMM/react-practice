import React from "react";
import Home from "./1323-Home";
import About from "./1323-About";
import { Route, Link } from "react-router-dom";

const RouteLink = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </div>
    );
};

export default RouteLink;
