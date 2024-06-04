export default function List({ itemsNeeded, itemsOnHand, toggleItemStatus }) {
    return (
        <div className="list-container">
            <div className="list-section">
                <h2>Items Needed</h2>
                <ul className="list">
                    {itemsNeeded.map(item => (
                        <li key={item.id} className="list-item">
                            <div>
                                <span>{item.name}</span>
                                <span className="meta"><em><strong>Aisle: </strong>{item.aisle}</em></span>
                                <span className="meta"><em><strong>From: </strong>{item.from.join(", ")}</em></span>
                            </div>
                            <button className="action-button" onClick={() => toggleItemStatus(item.id)}>On Hand</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="list-section">
                <h2>Items On Hand</h2>
                <ul className="list">
                    {itemsOnHand.map(item => (
                        <li key={item.id} className="list-item">
                            <div>
                                <span>{item.name}</span>
                                <span className="meta"><em><strong>Aisle:</strong> {item.aisle}</em></span>
                                <span className="meta"><em><strong>From: </strong>{item.from.join(", ")}</em></span>
                            </div>
                            <button className="action-button" onClick={() => toggleItemStatus(item.id)}>Needed</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
