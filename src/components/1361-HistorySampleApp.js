import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./1323-Home";
import About from "./1342-About";
import Profiles from "./1351-Profiles";
import HistorySample from "./1361-HistorySample";

const HistorySampleApp = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">History 예제</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/history" component={HistorySample} />
        </div>
    );
};

export default HistorySampleApp;
