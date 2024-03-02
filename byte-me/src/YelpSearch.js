import React, { useState, useEffect } from 'react';

const YelpSearch = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const apiKey = 'YOUR_YELP_API_KEY'; // Replace with your Yelp API key
        const apiUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=YOUR_LOCATION`;

        try {
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const data = await response.json();
            setRestaurants(data.businesses);
        } catch (error) {
            console.error('Error fetching data from Yelp:', error);
        }
    };

    return (
        <div>
            <h1>Restaurants Near You</h1>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        {restaurant.name} - {restaurant.location.address1}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YelpSearch;
