import react from "react";

export default function MyForm({ setLetters, letters, label }) {
    return (
        <div>
            <form>
                <label>{label}
                    <input type="text"
                        value={letters}
                        onChange={(e) => setLetters(e.target.value)}
                    />
                </label>
            </form>
        </div>
    )
}
