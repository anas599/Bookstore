import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import AddBook from './components/addBook';
import Books from './components/books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Add-book">Add book</Link>
            </li>
            <li>
              <Link to="/Books">Books</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/Add-book" element={<AddBook />} />
        <Route path="/Books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
