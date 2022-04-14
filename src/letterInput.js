export default function LetterInput({ setLetters, letters, label, maxLength }) {
    return (
        <div className="form-group">
            <label>{label}
                <input className="form-control letters"
                    type="text"
                    value={letters}
                    onChange={(e) => setLetters(e.target.value)}
                    pattern="[a-zA-Z]*"
                    title="Enter letters"
                    maxLength={maxLength}
                />
            </label>
        </div>
    )
}


