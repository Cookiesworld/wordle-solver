
export default function SingleLetterInput({ letter, setLetter, position }) {
    return (
        <input className="form-control single"
            type="text"
            value={letter}
            onChange={(e) => handleChange(e, setLetter, position)}
            pattern="[a-zA-Z]*"
            maxLength={1} />
    );
}

const handleChange = (e, setLetters, position) => {
    //setValidated(e.currentTarget.value);
    // custom validation logic here
    if (/^[a-zA-Z]*$/.test(e.currentTarget.value)) {
        e.currentTarget.setCustomValidity('')
        setLetters(e.currentTarget.value, position)
    } else {
        e.currentTarget.setCustomValidity('Field must contain \'Characters only\'');
    }
}