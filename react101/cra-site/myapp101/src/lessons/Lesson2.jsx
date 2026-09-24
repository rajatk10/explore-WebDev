function MyFruitList() {
    const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    return (
        <ul>
            {fruits.map((fruit) => (
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>
    );
}

export default function Lesson2() {
    return (
        <div>
            <h2>Welcome to Fruits App - Lesson2</h2>
            <MyFruitList />
        </div>
    );
}