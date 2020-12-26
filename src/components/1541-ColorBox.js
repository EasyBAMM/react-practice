import React, { useContext } from "react";
import ColorContext from "../contexts/1531-color";

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        <>
            {(value) => (
                <>
                    <div
                        style={{
                            width: "64px",
                            height: "64px",
                            background: state.color,
                        }}
                    />
                    <div
                        style={{
                            width: "32px",
                            height: "32px",
                            background: state.subcolor,
                        }}
                    />
                </>
            )}
        </>
    );
};

export default ColorBox;