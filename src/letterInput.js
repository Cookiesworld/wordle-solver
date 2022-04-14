export default function LetterInput({ setLetters, letters, label, maxLength }) {
    return (
        <div className="form-group mb-2">
            <label for={`${label}Help`}>{label} </label>
            <input className="form-control letters"
                id={`${label}Help`}
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


