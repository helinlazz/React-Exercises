import React from "react"
import { Age } from "./Age"

export class Welcome extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        const rangeAge = this.props.age > 18 && this.props.age < 65

        const nameJohn = this.props.name === "John";

        return (

            <div>
                <p>Welcome {this.props.name}!</p>
                {rangeAge && nameJohn && <Age age={25} />}
            </div>
        )
    }
}

