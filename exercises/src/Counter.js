import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    };


    componentDidMount () {
        this.intervalVar = setInterval(() => {
            this.setState((state) => ({
                count: state.count + this.props.incrementedBy
            }));
        }, this.props.interval);
    }

    render () {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
            </div>
        );
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementedBy: 1,
    interval: 1000,
};
