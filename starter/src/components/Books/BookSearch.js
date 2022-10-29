const BookSearch = ({ selectShelf, book }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover">
          <img src={book.imageLinks.thumbnail} />
        </div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf}
            defaultValue={"none"}
            onChange={(e) => selectShelf(book, e.target.value)}
          >
            <option value="none" disabled>
              Add to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(", ")}</div>
    </div>
  );
};

export default BookSearch;