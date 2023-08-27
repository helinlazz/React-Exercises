import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function DisplayLanguage () {

    const language = useContext(LanguageContext)

    return (
        <h3>Current Language: {language}</h3>
    )
}