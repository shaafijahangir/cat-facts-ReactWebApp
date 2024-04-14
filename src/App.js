import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function App() {
  const [catFact, setCatFact] = useState('Loading...');

  const fetchCatFacts = async () => {
    const apiURL = 'https://catfact.ninja/fact';
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error('Fetch error:', error);
      setCatFact('Failed to load cat fact.');
    }
  };
  
  // Fetch a cat fact when the component mounts
  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to Cat Facts!</h1>
        <nav>
          {/* Replace 'a' tag with 'Link' to prevent page reloads */}
          <Link to="/about" className="button">About</Link>
        </nav>
      </header>
      <main>
        <section>
          <h2>Random Cat Fact</h2>
          <p>{catFact}</p>
          <button onClick={fetchCatFacts} className="fact-button">Get Another Fact</button>
        </section>
      </main>
    </div>
  );
}

export default App;