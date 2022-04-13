
export default function SingleLetterInput({ letter, setLetter, position }) {
    return (
        <div className="col-sm">
            <input className="form-control single"
                type="text"
                value={letter}
                onChange={(e) => setLetter(e.target.value, position)}
                pattern="[a-zA-Z]*"
                maxLength={1} />
        </div>
    );
}
