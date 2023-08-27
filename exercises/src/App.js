import { FilteredList } from "./UseMemo";

export default function App () {

    const nomi = [
        { name: 'pino', id: 1, age: 20 },
        { name: 'maria', id: 2, age: 17 },
        { name: 'carlo', id: 3, age: 13 },
        { name: 'letizia', id: 5, age: 34 }
    ]

    return (
        <div>
            <FilteredList list={nomi} />
        </div>
    )
}