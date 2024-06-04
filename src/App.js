import Header from "./Header";
import Form from "./Form";
import List from "./List";
import {useEffect, useState} from "react";
import "./index.css";

export default function App() {
    const allItems = [
        {
            name: "Bananas",
            id: 1,
            onHand: false,
            aisle: "Produce",
            from: [
                "Trader Joe's",
                "Sam's Club"
            ]
        },
        {
            name: "Apples",
            id: 2,
            onHand: false,
            aisle: "Produce",
            from: [
                "Sam's Club"
            ]
        },
        {
            name: "Cherries",
            id: 3,
            onHand: false,
            aisle: "Produce",
            from: [
                "Sam's Club"
            ]
        },
        {
            name: "Blackberries",
            id: 4,
            onHand: false,
            aisle: "Produce",
            from: [
                "Sam's Club"
            ]
        },
        {
            name: "Blueberries",
            id: 5,
            onHand: false,
            aisle: "Produce",
            from: [
                "Sam's Club"
            ]
        },
        {
            name: "Lettuce",
            id: 6,
            onHand: false,
            aisle: "Produce",
            from: [
                "Costco",
                "Trader Joe's",
                "Acme"
            ]
        },
        {
            name: "Yogurt",
            id: 7,
            onHand: false,
            aisle: "Dairy",
            from: [
                "Acme"
            ]
        },
        {
            name: "Pepper Jack Cheese",
            id: 8,
            onHand: false,
            aisle: "Deli",
            from: [
                "Trader Joe's",
                "Acme"
            ]
        },
        {
            name: "Cucumbers",
            id: 9,
            onHand: false,
            aisle: "Produce",
            from: [
                "Trader Joe's",
                "Acme",
                "Costco"
            ]
        },
        {
            name: "Tomatoes on the Vine",
            id: 10,
            onHand: false,
            aisle: "Produce",
            from: [
                "Sam's Club",
                "Costco"
            ]
        }
    ]


    const [allItemsList, setAllItemsList] = useState(allItems);

    const itemsNeeded = allItemsList.filter(item => !item.onHand);
    const itemsOnHand = allItemsList.filter(item => item.onHand);

    useEffect(() => {
        const storedItems = localStorage.getItem('groceryListItems');
        if (storedItems) {
            setAllItemsList(JSON.parse(storedItems));
        }
    }, []); // Run only once on component mount

    useEffect(() => {
        localStorage.setItem('groceryListItems', JSON.stringify(allItemsList));
    }, [allItemsList]);

    function addItem(item) {
        setAllItemsList(prevItems => [...prevItems, item]);
    }

    function toggleItemStatus(itemId) {
        setAllItemsList(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, onHand: !item.onHand } : item
            )
        );
    }

    function removeItem(itemId) {
        setAllItemsList(prevItems =>
            prevItems.filter(item => item.id !== itemId)
        );
    }

    return (
        <div className="app">
            <Header />
            <Form addItem={addItem} />
            <List
                itemsNeeded={allItemsList.filter(item => !item.onHand)}
                itemsOnHand={allItemsList.filter(item => item.onHand)}
                toggleItemStatus={toggleItemStatus}
                removeItem={removeItem}
            />
        </div>
    );
}