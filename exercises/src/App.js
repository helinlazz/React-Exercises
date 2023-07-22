import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        return (

            <div>
                <Welcome name="Mirka" age={25} />
            </div>
        )
    }
}