import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {user && <Card user={user} />}
    </div>
  );
};

export default App;
