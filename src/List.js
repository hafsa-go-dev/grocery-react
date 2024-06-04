export default function List({ itemsNeeded, itemsOnHand, toggleItemStatus, removeItem }) {
    const sortedItemsNeeded = itemsNeeded.slice().sort((a, b) => a.name.localeCompare(b.name));
    const sortedItemsOnHand = itemsOnHand.slice().sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="list-container">
            <div className="list-section">
                <h2>Items Needed</h2>
                <ul className="list">
                    {sortedItemsNeeded.map(item => (
                        <li key={item.id} className="list-item">
                            <div>
                                <span>{item.name}</span>
                                <span className="meta">Aisle: {item.aisle}</span>
                                <span className="meta">From: {item.from.join(", ")}</span>
                            </div>
                            <div>
                                <button className="action-button" onClick={() => toggleItemStatus(item.id)}>On Hand</button>
                                <button className="action-button" onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="list-section">
                <h2>Items On Hand</h2>
                <ul className="list">
                    {sortedItemsOnHand.map(item => (
                        <li key={item.id} className="list-item">
                            <div>
                                <span>{item.name}</span>
                                <span className="meta">Aisle: {item.aisle}</span>
                                <span className="meta">From: {item.from.join(", ")}</span>
                            </div>
                            <div>
                                <button className="action-button" onClick={() => toggleItemStatus(item.id)}>Needed</button>
                                <button className="action-button" onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
