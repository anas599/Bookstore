import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TitleAuthor from './props/title-author';
import RemoveButton from './props/Buttons/removeButton';
import { removeBook, addBook } from '../redux/books/booksSlice';
import AddButton from './props/Buttons/addButton';

function BookSection() {
  const booksArr2 = useSelector((state) => state.books.booksArray);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleClick = (id) => {
    dispatch(removeBook(id));
  };

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
        title, author,
      }),
    );
  };

  return (
    <>
      {booksArr2.map((book) => (
        <section className="bookDiv" key={book.item_id}>
          <div className="book">
            <TitleAuthor
              id={book.item_id}
              category={book.category}
              name={book.title}
              author={book.author}
              className="bookName"
            />
            <div>
              <ul className="buttonsDiv">
                <li>
                  <button type="button" id={book.item_id}>
                    Comments
                  </button>
                </li>
                <li>
                  <RemoveButton
                    id={book.item_id}
                    onClick={() => handleClick(book.item_id)}
                  />
                </li>
                <li>
                  <button type="button" id={book.item_id}>
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
      <section className="newBook">
        <h3>ADD NEW BOOK</h3>
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
          <AddButton id="newBook" title={title} author={author} category="N/A" />
        </form>
      </section>
    </>
  );
}

export default BookSection;
