import React, { Component } from "react";

class SplitMeApp extends Component {
    state = {
        SplitMe: null,
    };

    handleClick = async () => {
        const loadedModuele = await import("./1921-SplitMe");
        this.setState({
            SplitMe: loadedModuele.default,
        });
    };

    render() {
        const { SplitMe } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <p onClick={this.handleClick}>Hello React!</p>
                    {SplitMe && <SplitMe />}
                </header>
            </div>
        );
    }
}

export default SplitMeApp;
