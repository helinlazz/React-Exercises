import { Link } from "react-router-dom";

export function NotFound () {

    return (
        <>
            <p>Page not found</p>
            <Link to="/">Go back</Link>
        </>
    )
}