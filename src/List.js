import React, { useState } from "react";

export default function List({ itemsNeeded, itemsOnHand, toggleItemStatus, removeItem }) {
    const [sortBy, setSortBy] = useState("alphabetically");

    const sortItems = (items) => {
        if (sortBy === "aisle") {
            return items.slice().sort((a, b) => a.aisle.localeCompare(b.aisle) || a.name.localeCompare(b.name));
        } else if (sortBy === "store") {
            const sortedByStore = [];
            items.forEach(item => {
                item.from.forEach(store => {
                    sortedByStore.push({ ...item, store });
                });
            });
            return sortedByStore.sort((a, b) => a.store.localeCompare(b.store) || a.name.localeCompare(b.name));
        } else {
            // Default: sort alphabetically by name
            return items.slice().sort((a, b) => a.name.localeCompare(b.name));
        }
    };

    const sortedItemsNeeded = sortItems(itemsNeeded);
    const sortedItemsOnHand = sortItems(itemsOnHand);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return <><div className="sorting-controls">
        <label className="sorting-label">
            Sort items needed by:
            <select value={sortBy} onChange={handleSortChange} className="sorting-select">
                <option value="alphabetically">Alphabetically</option>
                <option value="aisle">Aisle</option>
                <option value="store">Store</option>
            </select>
        </label>
    </div>
    <div className="list-container">

        <div className="list-section">
            <h2>Items Needed</h2>
            <ul className="list">
                {sortedItemsNeeded.map(item => (
                    <li key={item.id + (item.store || "")} className="list-item">
                        <div>
                            <span>{item.name}</span>
                            <span className="meta"><em><strong>Aisle: </strong>{item.aisle}</em></span>
                                {sortBy === "store" && <span className="meta"><em><strong>Store: </strong>{item.store}</em></span>}
                                {sortBy !== "store" && <span className="meta"><em><strong>From: </strong>{item.from.join(", ")}</em></span>}
                            </div>
                            <div>
                                <button className="action-button" onClick={() => toggleItemStatus(item.id)}>On Hand</button>
                                <button className="remove-button" onClick={() => removeItem(item.id)}>❌</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="list-section">
                <h2>Items On Hand</h2>
                <ul className="list">
                    {sortedItemsOnHand.map(item => (
                        <li key={item.id + (item.store || "")} className="list-item">
                            <div>
                                <span>{item.name}</span>
                                <span className="meta"><em><strong>Aisle: </strong>{item.aisle}</em></span>
                                {sortBy === "store" && <span className="meta"><em><strong>Store: </strong>{item.store}</em></span>}
                                {sortBy !== "store" && <span className="meta"><em><strong>From: </strong>{item.from.join(", ")}</em></span>}
                            </div>
                            <div>
                                <button className="action-button" onClick={() => toggleItemStatus(item.id)}>Needed</button>
                                <button className="remove-button" onClick={() => removeItem(item.id)}>❌</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div></>;
}
