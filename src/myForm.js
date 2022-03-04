import react from "react";

export default function MyForm({ setLetters, letters }) {
    return (
        <div>
            <form>
                <label>Enter Letters
                    <input type="text"
                        value={letters}
                        onChange={(e) => setLetters(e.target.value)}
                    />
                </label>
            </form>
        </div>
    )
}
