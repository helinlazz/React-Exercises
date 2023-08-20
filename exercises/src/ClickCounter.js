import React, { useState, useEffect } from 'react';

import React, { useState, useEffect } from 'react';

export default function Counter () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((latestCount) => latestCount + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <h1>{count}</h1>
        </>
    );
}

