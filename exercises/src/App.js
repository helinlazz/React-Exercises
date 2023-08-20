import React from "react";
import DisplayLanguage from "./DisplayLanguage";


export default function App () {
    return (
        <LanguageContext.Consumer>
            {({ select }) => (
                <div>
                    <h1>language: {select}</h1>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}