import React from "react"

export class Welcome extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (

            <div>
                <p>Welcome {this.props.name}!</p>
            </div>
        )
    }
}