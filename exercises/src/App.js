import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";

export default function App () {

    const [language, setLanguage] = useState('eng')

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <div>
            <select value={language} onChange={handleChangeLanguage}>
                <option value='eng'>english</option>
                <option value='ita'>italian</option>
            </select>
            <LanguageContext.Provider value={language}>
                <Welcome language={language} />
            </LanguageContext.Provider>
        </div>
    )
}