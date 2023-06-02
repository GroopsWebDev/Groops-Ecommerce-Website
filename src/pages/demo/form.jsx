import React, { useState, useEffect } from 'react';

const PersonForm = () => {
  const [person1Id, setPerson1Id] = useState('');
  const [person1Email, setPerson1Email] = useState('');
  const [person2Id, setPerson2Id] = useState('');
  const [person2Email, setPerson2Email] = useState('');

  useEffect(() => {
    // Simulate fetching ID and email from a database
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Fetch person 1 data from the database
        const person1Data = await fetchPersonData(1); // Replace 1 with the actual ID
        setPerson1Id(person1Data.id);
        setPerson1Email(person1Data.email);

        // Fetch person 2 data from the database
        const person2Data = await fetchPersonData(2); // Replace 2 with the actual ID
        setPerson2Id(person2Data.id);
        setPerson2Email(person2Data.email);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchPersonData = async (personId) => {
    // Replace this with your actual data fetching logic
    // e.g., fetch data using Axios, fetch API, or any other library
    const response = await fetch(`https://your-api-url/persons/${personId}`);
    const data = await response.json();
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission, e.g., sending the data to a server
    console.log('Person 1 ID:', person1Id);
    console.log('Person 1 Email:', person1Email);
    console.log('Person 2 ID:', person2Id);
    console.log('Person 2 Email:', person2Email);

    // Reset the form fields
    setPerson1Id('');
    setPerson1Email('');
    setPerson2Id('');
    setPerson2Email('');
  };

  return (
    <div className="max-w-xs mx-auto">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex items-center">
          <label htmlFor="person1Id" className="w-16">ID:</label>
          <input
            type="text"
            id="person1Id"
            name="person1Id"
            value={person1Id}
            onChange={(e) => setPerson1Id(e.target.value)}
            className="flex-grow rounded"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="person1Email" className="w-16">Email:</label>
          <input
            type="email"
            id="person1Email"
            name="person1Email"
            value={person1Email}
            onChange={(e) => setPerson1Email(e.target.value)}
            className="flex-grow rounded"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="person2Id" className="w-16">ID:</label>
          <input
            type="text"
            id="person2Id"
            name="person2Id"
            value={person2Id}
            onChange={(e) => setPerson2Id(e.target.value)}
            className="flex-grow rounded"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="person2Email" className="w-16">Email:</label>
          <input
            type="email"
            id="person2Email"
            name="person2Email"
            value={person2Email}
            onChange={(e) => setPerson2Email(e.target.value)}
            className="flex-grow rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
