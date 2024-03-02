import React, { useState, useEffect } from 'react';

const YelpSearch = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const location = 'St. Louis'; // Or dynamically set this based on user input or geolocation
        const apiUrl = `/api/yelp?location=${location}`;
      
        try {
          const response = await fetch(apiUrl);
      
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
      
          const data = await response.json();
          setRestaurants(data.businesses);
        } catch (error) {
          console.error('Error fetching data:', error);
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
