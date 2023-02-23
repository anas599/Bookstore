import TitleAuthor from './props/title-author';

function BookSection() {
  return (
    <>
      <section className="bookDiv">
        <div className="book">
          <TitleAuthor
            category="Action"
            name="The Hunger Games"
            author="Suzanne Collins"
            className="bookName"
          />
          <div>
            <ul className="buttonsDiv">
              <li><button type="button">Comments</button></li>
              <li><button type="button">Remove</button></li>
              <li><button type="button">Edit</button></li>
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
          <button type="button" className="updateBtn">UPDATE PROGRESS</button>
        </div>
      </section>
      <section className="bookDiv">
        <div className="book">
          <TitleAuthor
            category="Science fiction"
            name="Dune"
            author="Frank Herbert"
            className="bookName"
          />
          <div>
            <ul className="buttonsDiv">
              <li><button type="button">Comments</button></li>
              <li><button type="button">Remove</button></li>
              <li><button type="button">Edit</button></li>
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
          <button type="button" className="updateBtn">UPDATE PROGRESS</button>
        </div>
      </section>
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
