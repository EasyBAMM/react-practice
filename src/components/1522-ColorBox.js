import React from "react";
import ColorContext from "../contexts/1521-color";

const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            {(value) => (
                <div
                    style={{
                        width: "64px",
                        height: "64px",
                        background: value.color,
                    }}
                />
            )}
        </ColorContext.Consumer>
    );
};

export default ColorBox;
