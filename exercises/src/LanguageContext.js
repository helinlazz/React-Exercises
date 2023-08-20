import React, { useState } from 'react';

export default function LanguageContext ({ lang }) {
    const [select, setSelect] = useState('it');

    return lang({ select, setSelect });
}
