export default function ClickTracker () {
    const [button, setButton] = useState("");

    const handleClickButton = (event) => {
        const buttonElement = event.target.value;
        setButton(buttonElement);
    }
    return (
        <>
            <h1>You pressed the button: {button}</h1>
            <button onClick={handleClickButton}>First button</button>
            <button onClick={handleClickButton}>Second button</button>
            <button onClick={handleClickButton}>Third button</button>
        </>
    )
}