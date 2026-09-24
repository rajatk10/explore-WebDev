function MyTravelList() {
    const travel = ["Laskshadweep", "Phuket", "Kerala", "Goa", "Andaman"];
    return (
        <ul>
            {travel.map((travel) => (
                <li key={travel}>{travel}</li>
            ))}
        </ul>
    );
}

export default function Lesson3() {
    return (
        <div>
            <h2>Welcome to Travel App - Lesson3</h2>
            <MyTravelList />
        </div>
    );
}