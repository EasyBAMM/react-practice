import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./1342-About";
import Home from "./1323-Home";
import Profile from "./1341-Profile";

const ProfileApp = () => {
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
                    <Link to="/profile/velopert">velopert 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong 프로필</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profile/:username" component={Profile} />
        </div>
    );
};

export default ProfileApp;
