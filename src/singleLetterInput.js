
export default function SingleLetterInput({ letter, setLetter, position }) {
    return (
        <input className="form-control single"
            type="text"
            value={letter}
            onChange={(e) => setLetter(e.target.value, position)}
            pattern="[a-zA-Z]*"
            maxLength={1} />

    );
}
