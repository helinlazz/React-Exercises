import React from "react"
import { Age } from "./Age"

export class Welcome extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        const rangeAge = this.props.age > 18 && this.props.age < 65

        return (

            <div>
                <p>Welcome {this.props.name}!</p>
                {rangeAge && <Age age={25} />}
            </div>
        )
    }
}

