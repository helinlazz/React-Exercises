import React from "react"
import { Age } from "./Age"

export class Welcome extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (

            <div>
                <p>Welcome {this.props.name}!</p>
                <Age age={25} />
            </div>
        )
    }
}