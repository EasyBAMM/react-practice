import React from "react";
import { ColorProvider } from "../contexts/1531-color";
import ColorBox from "./1532-ColorBox";
import SelectColors from "./1533-SelectColors";

const ColorBoxApp = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default ColorBoxApp;
