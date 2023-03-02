import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Categories from './components/Categories';
import Books from './components/books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          BOOKSTORE CMS
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/categories">categories</Link>
            </li>
            <li>
              <Link to="/">Books</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
