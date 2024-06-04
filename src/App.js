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
        },
        {
            name: "Muenster Cheese",
            id: 11,
            onHand: false,
            aisle: "Deli",
            from: [
                "Trader Joe's",
                "Acme"
            ]
        },
        {
            name: "Buffalo Chicken Dip",
            id: 12,
            onHand: false,
            aisle: "Deli",
            from: [
                "Trader Joe's"
            ]
        },
        {
            name: "Potatoes",
            id: 13,
            onHand: false,
            aisle: "Produce",
            from: [
                "Acme",
                "Costco"
            ]
        },
        {
            name: "Shallots",
            id: 14,
            onHand: false,
            aisle: "Produce",
            from: [
                "Trader Joe's",
                "Acme"
            ]
        },
        {
            name: "Sunflower Seeds",
            id: 15,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Sour Cherry Juice",
            id: 16,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Fig Preserves",
            id: 17,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Acme"
            ]
        },
        {
            name: "Olive Oil",
            id: 18,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Hazelnut Paste",
            id: 19,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Pastirma",
            id: 20,
            onHand: false,
            aisle: "Meat",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Turkish Sausage (Sucuk)",
            id: 21,
            onHand: false,
            aisle: "Meat",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "White Cheese",
            id: 22,
            onHand: false,
            aisle: "Dairy",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Antep Cheese",
            id: 23,
            onHand: false,
            aisle: "Dairy",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Pasta",
            id: 24,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Sam's Club",
                "Costco"
            ]
        },
        {
            name: "Pasta Sauce",
            id: 25,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Acme",
                "Trader Joe's"
            ]
        },
        {
            name: "Baby Spinach",
            id: 26,
            onHand: false,
            aisle: "Produce",
            from: [
                "Acme",
                "Trader Joe's",
                "Sam's Club",
                "Costco"
            ]
        },
        {
            name: "Milk",
            id: 27,
            onHand: false,
            aisle: "Dairy",
            from: [
                "Sam's Club"
            ]
        },
        {
            name: "Avocados",
            id: 28,
            onHand: false,
            aisle: "Produce",
            from: [
                "Acme",
                "Trader Joe's",
                "Sam's Club",
                "Costco"
            ]
        },
        {
            name: "Garlic",
            id: 29,
            onHand: false,
            aisle: "Produce",
            from: [
                "Acme",
                "Trader Joe's"
            ]
        },
        {
            name: "Rotisserie Chicken",
            id: 30,
            onHand: false,
            aisle: "Deli",
            from: [
                "Acme"
            ]
        },
        {
            name: "Kozy Shack Chocolate Pudding",
            id: 31,
            onHand: false,
            aisle: "Dairy",
            from: [
                "Acme"
            ]
        },
        {
            name: "Handsome Cut Potato Fries",
            id: 32,
            onHand: false,
            aisle: "Frozen",
            from: [
                "Trader Joe's"
            ]
        },
        {
            name: "Thai Vegetable Gyozas",
            id: 33,
            onHand: false,
            aisle: "Frozen",
            from: [
                "Trader Joe's"
            ]
        },
        {
            name: "Grass Fed Beef Patties",
            id: 34,
            onHand: false,
            aisle: "Frozen",
            from: [
                "Costco"
            ]
        },
        {
            name: "Spicy Turkish Ketchup",
            id: 35,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Sweet Chili Sauce",
            id: 36,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Trader Joe's"
            ]
        },
        {
            name: "Chili Ramen",
            id: 37,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Amazon",
                "Acme"
            ]
        },
        {
            name: "Spring Water",
            id: 38,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Sam's Club",
                "Costco"
            ]
        },
        {
            name: "Pistachio Chocolate",
            id: 39,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Turkish Market"
            ]
        },
        {
            name: "Sandwich Bread",
            id: 40,
            onHand: false,
            aisle: "Bakery",
            from: [
                "Sam's Club",
                "Acme"
            ]
        },
        {
            name: "Bolillos",
            id: 41,
            onHand: false,
            aisle: "Bakery",
            from: [
                "Sam's Club"
            ]
        },
        {
            name: "Rotisserie Seasoned Chicken Breast",
            id: 42,
            onHand: false,
            aisle: "Deli",
            from: [
                "Sam's Club"
            ]
        },
        {
            name: "Buffalo Seasoned Chicken Breast",
            id: 43,
            onHand: false,
            aisle: "Deli",
            from: [
                "Sam's Club"
            ]
        },
        {
            name: "Strawberries",
            id: 44,
            onHand: false,
            aisle: "Produce",
            from: [
                "Sam's Club",
                "Costco",
                "Acme"
            ]
        },
        {
            name: "Reddi Whip",
            id: 45,
            onHand: false,
            aisle: "Dairy",
            from: [
                "Acme",
                "Sam's Club"
            ]
        },
        {
            name: "Chocolate Syrup",
            id: 46,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Acme"
            ]
        },
        {
            name: "Coke Zero",
            id: 47,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Sam's Club",
                "Costco"
            ]
        },
        {
            name: "Sarikiz Mandarin Soda",
            id: 48,
            onHand: false,
            aisle: "Pantry",
            from: [
                "Turkish Market"
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