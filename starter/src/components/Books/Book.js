import { useState } from "react";

// const [changeBook, SetChangeBook] = useState();

const Book = ({ selectShelf, book }) => {
  //state for the shelf value
  //event to change shelf state
  //effort to update using the api

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover">
          <img src={book.imageLinks.thumbnail} />
        </div>
        <div className="book-shelf-changer">
          <select onChange={selectShelf}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(", ")}</div>
    </div>
  );
};

export default Book;
