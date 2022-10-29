import "./App.css";
import { useEffect, useState } from "react";
import { get, getAll, search, update } from "./BooksAPI";
import "./components/Books/book.css";
import Book from "./components/Books/Book";
import BookSearch from "./components/Books/BookSearch";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [bookResult, setBookResult] = useState([]);
  const [changeShelf, setChangeShelf] = useState([]);

  const handleChange = async (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    let result = await search(event.target.value);
    console.log("search book", result);
    setSearchResult(result);
  };

  const allBooks = async () => {
    const result = await getAll();
    setBookResult(result);
  };

  useEffect(() => {
    allBooks();
  }, [changeShelf]);

  const selectShelf = async (book, shelf) => {
    const response = await update(book, shelf);
    console.log("shelf book", book);
    setChangeShelf(response);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                name="searchValue"
                value={searchValue}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            {searchResult.map((book) => (book.shelf = ""))}
            <ol className="books-grid">
              {searchResult.map((book) => {
                return (
                  <li>
                    <BookSearch selectShelf={selectShelf} book={book} />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>;
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

              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>;
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

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>;
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
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
