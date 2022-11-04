const BookSearch = ({ selectShelf, book }) => {
  console.log("book", book);
  if (!book) return <div>Loading...</div>;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(${
              book?.imageLinks?.thumbnail ? book.imageLinks.thumbnail : ""
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book?.shelf || "none"}
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
      <div className="book-title">{book?.title}</div>
      <div className="book-authors">
        {book?.authors ? book?.authors.join(", ") : "unknown author"}
      </div>
    </div>
  );
};

export default BookSearch;
