import { useState } from "react";

export default function Form({ addItem }) {
    const [name, setName] = useState("");
    const [aisle, setAisle] = useState("");
    const [from, setFrom] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !aisle || !from) return;
        const newItem = {
            name,
            id: Date.now(),
            onHand: false,
            aisle,
            from: from.split(",").map(store => store.trim())
        };
        addItem(newItem);
        setName("");
        setAisle("");
        setFrom("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
            />
            <input
                type="text"
                placeholder="Aisle"
                value={aisle}
                onChange={(e) => setAisle(e.target.value)}
                className="input"
            />
            <input
                type="text"
                placeholder="Stores (comma separated)"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="input"
            />
            <button type="submit" className="button">Add Item</button>
        </form>
    );
}
