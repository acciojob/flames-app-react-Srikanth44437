import React, { Component, useState } from "react";
import "../styles/App.css";
import { getFlamesResult } from "./functions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "Marriage",
            input1Value: "",
            input2Value: "",
        };
    }
    manageInputs(destinedInput, value) {
        switch (destinedInput) {
            case "input1":
                this.setState({ ...this.state, input1Value: value });
                break;
            case "input2":
                this.setState({ ...this.state, input2Value: value });
                break;
            default:
                break;
        }
        console.log(this.state.input1Value + " and  " + this.state.input2Value);
    }
    render() {
        const calculateFlames = () => {
            const result = getFlamesResult(
                this.state.input1Value,
                this.state.input2Value
            );
            this.setState({ ...this.state, answer: result });
            console.log(result);
        };
        const clearInputFields = () => {
            this.setState({
                ...this.state,
                input1Value: "",
                input2Value: "",
                answer: "",
            });
        };
        return (
            <div id="main">
                <input
                    type="text"
                    name="name1"
                    data-testid="input1"
                    onChange={(e) =>
                        this.manageInputs(
                            e.target.getAttribute("data-testid"),
                            e.target.value
                        )
                    }
                    value={this.state.input1Value}
                />
                <input
                    type="text"
                    name="name2"
                    data-testid="input2"
                    onChange={(e) =>
                        this.manageInputs(
                            e.target.getAttribute("data-testid"),
                            e.target.value
                        )
                    }
                    value={this.state.input2Value}
                />
                <button data-testid="calculate_relationship" onClick={calculateFlames}>
                    Calculate Relationship Future
                </button>
                <button data-testid="clear" onClick={clearInputFields}>
                    Clear
                </button>
                <h3 data-testid="answer">Marriage</h3>
            </div>
        );
    }
}

export default App;