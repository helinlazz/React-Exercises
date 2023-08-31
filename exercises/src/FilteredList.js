import { useMemo, useState } from "react";

export default function FilteredList ({ list }) {

    const [people, setPeople] = useState(list);

    useMemo(() => {
        setPeople(people.filter(el => el.age > 18));
    }, [list]);

    return (
        <>
            <ul>
                {people.map((el) => (
                    <li key={el.id}>
                        {"my id is: " + el.id + ", my name is: " + el.name + ", I'm " + el.age + " years old."}
                    </li>
                ))}
            </ul>
        </>
    );

}