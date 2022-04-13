export default function LetterInput({ setLetters, letters, label }) {
    return (
        <div className="form-group col-md">
            <label>{label}
                <input className="form-control letters"
                    type="text"
                    value={letters}
                    onChange={(e) => setLetters(e.target.value)}
                    pattern="[a-zA-Z]*"
                    title="Enter letters"
                    maxLength={5}
                />
            </label>
        </div>
    )
}


