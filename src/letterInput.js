export default function LetterInput({ setLetters, letters, label }) {
    return (
        <div className="mb-3 mt-3">
            <label for="">{label}
                <input className="letters"
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


