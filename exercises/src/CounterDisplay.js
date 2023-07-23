import React from "react";

export class CounterDisplay extends React.Component {


    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <h1>Count: {count}</h1>
            </div>
        )
    }
}
