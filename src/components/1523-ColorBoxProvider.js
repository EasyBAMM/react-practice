import React from "react";
import ColorContext from "../contexts/1521-color";
import ColorBox from "./1522-ColorBox";

const ColorBoxApp = () => {
    return (
        <ColorContext.Provider value={{ color: "red" }}>
            <div>
                <ColorBox />
            </div>
        </ColorContext.Provider>
    );
};

export default ColorBoxApp;
