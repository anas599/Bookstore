import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TitleAuthor from './props/title-author';
import RemoveButton from './props/Buttons/removeButton';
import { removeBook, addBook, getBooksArr } from '../redux/books/booksSlice';
import AddButton from './props/Buttons/addButton';

function BookSection() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    dispatch(getBooksArr());
  }, [dispatch]);
  const booksArray = useSelector((state) => state.books.booksArray);
  const handleClick = (id) => {
    dispatch(removeBook(id));
  };

  const titleFunc = (event) => {
    setTitle(event.target.value);
  };

  const authorFunc = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <>
      {Object.values(booksArray).map((item) => item.map((book) => (
        <section className="bookDiv" key={book.title}>
          <div className="book">
            <TitleAuthor
              key={book.category}
              id={book.category}
              category={book.category}
              title={book.title}
              author={book.author}
              className="bookName"
            />
            <div>
              <ul className="buttonsDiv">
                <li>
                  <button type="button" id={book.title}>
                    Comments
                  </button>
                </li>
                <li>
                  <RemoveButton
                    id={book.title}
                    onClick={() => handleClick(book.title)}
                  />
                </li>
                <li>
                  <button type="button" id={book.title}>
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
      )))}
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
          <AddButton
            id="newBook"
            title={title}
            author={author}
            category="N/A"
          />
        </form>
      </section>
    </>
  );

  function handleAddBook(event) {
    event.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        category: 'N/A',
      }),
    );
    setTitle('');
    setAuthor('');
  }
}

export default BookSection;
