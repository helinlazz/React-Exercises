import React from "react";
import { DisplayLanguage } from "./HookDisplayLanguage";

export default function Welcome ({ language }) {

    return (
        <div>
            <DisplayLanguage />
            <p>{language === 'eng' ? 'hello' : 'ciao'}</p>
        </div>
    );
}