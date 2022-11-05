import { Book } from "./Books";

export const WantToRead = ({ bookResult, selectShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookResult
            .filter((book) => book.shelf === "wantToRead")
            .map((book) => {
              return (
                <li>
                  <Book selectShelf={selectShelf} book={book} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export const CurrentlyReading = ({ bookResult, selectShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookResult
            .filter((book) => book.shelf === "currentlyReading")
            .map((book) => {
              return (
                <li>
                  <Book selectShelf={selectShelf} book={book} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export const Read = ({ bookResult, selectShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookResult
            .filter((book) => book.shelf === "read")
            .map((book) => {
              return (
                <li>
                  <Book selectShelf={selectShelf} book={book} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};
