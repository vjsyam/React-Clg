import React, { useState } from 'react';

function HomePage() {
    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [rooms, setRooms] = useState([]);

    const searchHotels = (e) => {
        e.preventDefault();
        // Placeholder logic for searching hotels
        const availableRooms = [
            { id: 1, name: 'Deluxe Room', price: 120 },
            { id: 2, name: 'Suite', price: 200 },
            { id: 3, name: 'Standard Room', price: 80 }
        ];
        setRooms(availableRooms);
    };

    return (
        <div>
            <h2>Find Your Perfect Stay</h2>
            <form onSubmit={searchHotels}>
                <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Check-in Date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Check-out Date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                />
                <button type="submit">Search Hotels</button>
            </form>

            {rooms.length > 0 && (
                <div>
                    <h3>Available Rooms</h3>
                    <ul>
                        {rooms.map(room => (
                            <li key={room.id}>
                                {room.name} - ${room.price} per night
                                <button>Book Now</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HomePage;
