import "./SettingsView.css";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext.jsx";

function SettingsView() {
    const { user, setUser } = useContext(UserContext);
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [preferredGenre, setPreferredGenre] = useState(user?.selectedGenres?.[0] || "");

    const genres = [
        "Action", "Adventure", "Animation", "Comedy", "Family",
        "Fantasy", "History", "Horror", "Sci-Fi", "Thriller"
    ];

    function handleSaveChanges(event) {
        event.preventDefault();

        const updatedUser = {
            ...user,
            firstName,
            lastName,
            selectedGenres: [preferredGenre],
        };

        setUser(updatedUser);
        alert("Settings updated successfully!");
    }

    return (
        <div className="settings-container">
            <h1 className="settings-title">Settings</h1>
            <form className="settings-form" onSubmit={handleSaveChanges}>
                <label className="settings-label">First Name:</label>
                <input
                    type="text"
                    className="settings-input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label className="settings-label">Last Name:</label>
                <input
                    type="text"
                    className="settings-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label className="settings-label">Email:</label>
                <input
                    type="email"
                    className="settings-input"
                    value={user?.email || ""}
                    disabled
                />

                <label className="settings-label">Preferred Genre:</label>
                <select
                    className="settings-select"
                    value={preferredGenre}
                    onChange={(e) => setPreferredGenre(e.target.value)}
                >
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>

                <button type="submit" className="settings-save-button">
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default SettingsView;