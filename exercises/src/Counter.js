import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    state = {
        count: initialValue
    }

    constructor (props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + incrementedBy
                }
            })
        }, interval)
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
}
