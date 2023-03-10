import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Categories from './components/Categories';
import Books from './components/books';

const AccountIcon = require('./Assets/accIcon.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>BOOKSTORE CMS</h1>
          <nav>
            <ul>
              <li>
                <Link to="/categories">categories</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </nav>
        </div>
        <img src={AccountIcon} alt="accountIcon" />
      </header>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
