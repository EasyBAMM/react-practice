import React from "react";
import { Route } from "react-router-dom";
import Menu from "./2021-Menu";
import RedPage from "../pages/2022-RedPage";
import BluePage from "../pages/2022-BluePage";

const ServerSideApp = () => {
    return (
        <div>
            <Menu />
            <hr />
            <Route path="/red" component={RedPage} />
            <Route path="/blue" component={BluePage} />
        </div>
    );
};

export default ServerSideApp;
