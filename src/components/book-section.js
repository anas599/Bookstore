import { useSelector } from 'react-redux';
import TitleAuthor from './props/title-author';

function BookSection() {
  const booksArr2 = useSelector((state) => state.books.booksArray);
  return (
    <>
      {booksArr2.map((book) => (
        <section className="bookDiv" key={book.id}>
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
                  <button type="button">Comments</button>
                </li>
                <li>
                  <button type="button">Remove</button>
                </li>
                <li>
                  <button type="button">Edit</button>
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
        <form>
          <input placeholder="Book Title" className="bookTitle" />
          <input placeholder="Author" className="bookAuthor" />
          <button type="button"> ADD BOOK</button>
        </form>
      </section>
    </>
  );
}

export default BookSection;
