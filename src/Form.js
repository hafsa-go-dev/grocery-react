import { useState } from "react";

export default function Form({ addItem }) {
    const [name, setName] = useState("");
    const [aisle, setAisle] = useState("");
    const [from, setFrom] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !aisle || from.length === 0) return;
        const newItem = {
            name,
            id: Date.now(),
            onHand: false,
            aisle,
            from
        };
        addItem(newItem);
        setName("");
        setAisle("");
        setFrom([]);
    };

    const handleStoreChange = (e) => {
        const store = e.target.value;
        setFrom((prevFrom) =>
            prevFrom.includes(store)
                ? prevFrom.filter((item) => item !== store)
                : [...prevFrom, store]
        );
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
            <div className="checkboxes-container">
                <fieldset>
                    <legend>Aisle:</legend>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Bakery"
                                onChange={(e) => setAisle(e.target.value)}
                                checked={aisle === "Bakery"}
                            />
                            Bakery
                        </label>
                    </div>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Dairy"
                                onChange={(e) => setAisle(e.target.value)}
                                checked={aisle === "Dairy"}
                            />
                            Dairy
                        </label>
                    </div>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Deli"
                                onChange={(e) => setAisle(e.target.value)}
                                checked={aisle === "Deli"}
                            />
                            Deli
                        </label>
                    </div>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Frozen"
                                onChange={(e) => setAisle(e.target.value)}
                                checked={aisle === "Frozen"}
                            />
                            Frozen
                        </label>
                    </div>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Meat"
                                onChange={(e) => setAisle(e.target.value)}
                                checked={aisle === "Meat"}
                            />
                            Meat
                        </label>
                    </div>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Pantry"
                                onChange={(e) => setAisle(e.target.value)}
                                checked={aisle === "Pantry"}
                            />
                            Pantry
                        </label>
                    </div>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Produce"
                                onChange={(e) => setAisle(e.target.value)}
                                checked={aisle === "Produce"}
                            />
                            Produce
                        </label>
                    </div>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="Home/Misc."
                                onChange={(e) => setAisle(e.target.value)}
                                checked={aisle === "Home/Misc."}
                            />
                            Home/Misc.
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Store(s):</legend>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="Acme"
                                onChange={handleStoreChange}
                                checked={from.includes("Acme")}
                            />
                            Acme
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="Amazon"
                                onChange={handleStoreChange}
                                checked={from.includes("Amazon")}
                            />
                            Amazon
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="Costco"
                                onChange={handleStoreChange}
                                checked={from.includes("Costco")}
                            />
                            Costco
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="Sam's Club"
                                onChange={handleStoreChange}
                                checked={from.includes("Sam's Club")}
                            />
                            Sam's Club
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="Trader Joe's"
                                onChange={handleStoreChange}
                                checked={from.includes("Trader Joe's")}
                            />
                            Trader Joe's
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="Turkish Market"
                                onChange={handleStoreChange}
                                checked={from.includes("Turkish Market")}
                            />
                            Turkish Market
                        </label>
                    </div>
                </fieldset>
            </div>
            <button type="submit" className="button">Add Item</button>
        </form>
    );
}
