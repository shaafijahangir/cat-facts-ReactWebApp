import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'
import './App.css'; // This is assuming that App.css contains the styles for About

function About() {
  return (
    <div>
      <header>
        <h1>About Cat Facts</h1>
        <nav>
          <Link to="/" className="button">Home</Link>
        </nav>
      </header>
      <main>
        <section>
          <h2>What is Cat Facts?</h2>
          <p>Cat Facts is a fun website where you can learn interesting facts about cats. Each time you visit or refresh the page, you'll discover a new, randomly selected fact about cats.</p>
        </section>
      </main>
    </div>
  );
}

export default About;