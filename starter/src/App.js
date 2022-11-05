import "./App.css";
import { useEffect, useState } from "react";
import { getAll, search, update } from "./BooksAPI";
import "./components/Books/book.css";
import {
  WantToRead,
  CurrentlyReading,
  Read,
} from "./components/Books/BookShelves";
import { BookSearch } from "./components/Books/Books";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [bookResult, setBookResult] = useState([]);
  const [changeShelf, setChangeShelf] = useState([]);

  const allBooks = async () => {
    try {
      const result = await getAll();
      setBookResult(result);
    } catch (err) {
      console.log(err);
    }
  };

  const selectShelf = async (book, shelf) => {
    const response = await update(book, shelf);
    setChangeShelf(response);
  };

  const handleChange = async (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    let searchedBook = await search(event.target.value);

    if (!searchedBook || event.target.value === "") {
      setSearchResult([]);
      return;
    }
    setSearchResult(
      searchedBook.map((searchedBook) => {
        const bookInShelf = bookResult.find(
          (book) => book.id === searchedBook.id
        );
        if (bookInShelf) {
          searchedBook.shelf = bookInShelf.shelf;
        }
        return searchedBook;
      })
    );
  };

  useEffect(() => {
    allBooks();
  }, [changeShelf]);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              href="/"
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
              <WantToRead bookResult={bookResult} selectShelf={selectShelf} />
              <CurrentlyReading
                bookResult={bookResult}
                selectShelf={selectShelf}
              />
              <Read bookResult={bookResult} selectShelf={selectShelf} />
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
