import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        return (


            //se i props NON sono stringhe dobbiamo passarli nelle parentesi graffe, come in questo caso con l'età 
            <div>
                <Welcome name="Mirka" age={25} />
            </div>
        )
    }
}