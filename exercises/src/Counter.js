import React from "react";

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
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementedBy: 1,
    interval: 1000,
}
