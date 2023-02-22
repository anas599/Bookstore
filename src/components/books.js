import TitleAuthor from './props/title-author';

function Books() {
  return (
    <>
      <section>
        <div className="book">
          <TitleAuthor
            name="The Hunger Games"
            author="Suzanne Collins"
            className="bookName"
          />
          <div>
            <ul>
              <li>Comments</li>
              <li>Remove</li>
              <li>Edit</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>64%</h3>
          <p>Completed</p>
        </div>
        <div>
          <p>Current Chart</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </section>
      <section>
        <h3>ADD NEW BOOK</h3>
        <form>
          <input placeholder="Book Title" />
          <input placeholder="Author" />
          <button type="button"> ADD BOOK</button>
        </form>
      </section>
    </>
  );
}
export default Books;
