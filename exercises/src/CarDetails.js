import { useEffect, useRef } from "react"

export default function CarDetails ({ initialVal }) {
    const refModel = useRef();
    const refYear = useRef();
    const refColor = useRef();

    useEffect(() => {
        refModel.current.value = initialVal.model;
        refYear.current.value = initialVal.year;
        refColor.current.value = initialVal.color;
    }, [initialVal]);

    return (
        <form>
            <label>Model:</label>
            <input id='model' name='model' ref={refModel} />

            <label>Year:</label>
            <input id='year' name='year' ref={refYear} />

            <label>Color:</label>
            <input id='color' name='color' ref={refColor} />

            <input type="submit" value="Submit" />
        </form>
    );
}
