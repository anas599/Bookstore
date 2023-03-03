/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import TitleAuthor from './props/title-author';
import RemoveButton from './props/Buttons/removeButton';
import {
  addBook, getBooksArr,
} from '../redux/books/booksSlice';
import AddButton from './props/Buttons/addButton';

function BookSection() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [item_id] = useState('');
  const booksArray = useSelector((state) => state.books.booksArray);
  const ifSucceed = useSelector((store) => store.books.ifSucceed);
  useEffect(() => {
    dispatch(getBooksArr());
  }, [dispatch, ifSucceed]);
  useEffect(() => {
    setTitle('');
    setAuthor('');
  }, [booksArray]);
  const titleFunc = (event) => {
    setTitle(event.target.value);
  };
  const authorFunc = (event) => {
    setAuthor(event.target.value);
  };
  const handleAddBook = (event) => {
    event.preventDefault();
    dispatch(
      addBook({
        item_id,
        title,
        author,
      }),
    );
    setTitle('');
    setAuthor('');
  };
  return (
    <>
      {Object.entries(booksArray).map(([firstItemKey, books]) => (
        <div key={firstItemKey}>
          {books.map((book) => (
            <section className="bookDiv" key={book.title}>
              <div className="book">
                <TitleAuthor
                  id={firstItemKey}
                  category={book.category}
                  title={book.title}
                  author={book.author}
                  className="bookName"
                />
                <div>
                  <ul className="buttonsDiv">
                    <li>
                      <button type="button">Comments</button>
                    </li>
                    <li key={firstItemKey}>
                      <RemoveButton id={firstItemKey} />
                    </li>
                    <li>
                      <button
                        type="button"
                        key={firstItemKey}
                        id={firstItemKey}
                      >
                        Edit
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="completion">
                <div className="circle" />
                <div>
                  <h3>64%</h3>
                  <p>Completed</p>
                </div>
              </div>
              <div className="bar" />
              <div className="progress">
                <p>Current Chart</p>
                <p>Chapter 17</p>
                <button type="button" className="updateBtn">
                  UPDATE PROGRESS
                </button>
              </div>
            </section>
          ))}
        </div>
      ))}
      <h3 style={{ color: 'rgba(0, 0, 0, 0.35)', paddingLeft: '7rem' }}>ADD NEW BOOK</h3>
      {/* <section className="newBook"> */}
      <form onSubmit={handleAddBook}>
        <input
          placeholder="Book Title"
          className="bookTitle"
          value={title}
          onChange={titleFunc}
        />
        <input
          placeholder="Author"
          className="bookAuthor"
          value={author}
          onChange={authorFunc}
        />
        <AddButton
          item_id={nanoid()}
          title={title}
          author={author}
          category="N/A"
        />
      </form>
      {/* </section> */}
    </>
  );
}

export default BookSection;
