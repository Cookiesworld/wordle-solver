export default function LetterInput({ setLetters, letters, label, maxLength }) {
    return (
        <div className="form-group mb-2">
            <label data-testid="letter-label" htmlFor={`${label}Help`}>{label} </label>
            <input className="form-control letters"
                id={`${label}Help`}
                data-testid="letter-input"
                type="text"
                value={letters}
                pattern="[a-zA-Z]*"
                title="Enter letters"
                maxLength={maxLength}
                onChange={(e) => handleChange(e, setLetters)}
            />
        </div>
    )
}

const handleChange = (e, setLetters) => {
    //setValidated(e.currentTarget.value);
    // custom validation logic here
    if (/^[a-zA-Z]*$/.test(e.currentTarget.value)) {
        e.currentTarget.setCustomValidity('')
        setLetters(e.currentTarget.value)
    } else {
        e.currentTarget.setCustomValidity('Field must contain \'Characters only\'');
    }
}

