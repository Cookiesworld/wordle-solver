export default function LetterInput({ setLetters, letters, label, maxLength }) {
    return (
        <div className="form-group mb-2">
            <label data-testid="letter-label" htmlFor={`${label}Help`}>{label} </label>
            <input className="form-control letters"
                id={`${label}Help`}
                data-testid="letter-input"
                type="text"
                value={letters}
                onChange={(e) => setLetters(e.target.value)}
                pattern="[a-zA-Z]*"
                title="Enter letters"
                maxLength={maxLength}
            />
        </div>
    )
}


