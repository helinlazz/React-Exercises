import React from "react";
import { Welcome } from "./Welcome";
import { Age } from "../Age";

export class App extends React.Component {
    render () {
        return (

            <div>
                <Welcome name="Mirka" />
                <Age age={25} />
            </div>
        )
    }
}
