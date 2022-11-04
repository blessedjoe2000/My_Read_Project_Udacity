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

  const allBooks = async () => {
    try {
      const result = await getAll();
      setBookResult(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    let searchedBook = await search(event.target.value);

    if (searchedBook.error || searchValue === " ") {
      console.log("value: " + searchValue);
      console.log("error searching books " + searchedBook.error);
      setSearchResult([]);
      return;
    }
    setSearchResult(
      searchedBook.map((searchedBook) => {
        const bookInShelf = bookResult.find(
          (book) => book.id === searchedBook.id
        );
        if (bookInShelf) searchedBook.shelf = bookInShelf.shelf;
        return searchedBook;
      })
    );
  };

  // const searchBooks = async () => {
  //   try {
  //     let searchedBooks = await search(searchValue);
  //     console.log("searched books ", searchedBooks);
  //     if (searchedBooks.error) {
  //       console.log("error found during search " + searchedBooks.error);
  //       setSearchResult([]);
  //       return;
  //     }
  // setSearchResult(
  //   searchedBooks.map((searchedBook) => {
  //     const bookInShelf = bookResult.find(
  //       (book) => book.id === searchedBook.id
  //     );
  //     if (bookInShelf) searchedBook.shelf = bookInShelf.shelf;
  //     return searchedBook;
  //   })
  // );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const selectShelf = async (book, shelf) => {
    const response = await update(book, shelf);
    console.log("book", book, "shelf", shelf);
    console.log("updated", response);
    setChangeShelf(response);
    console.log("book result", bookResult);
  };

  // const selectShelf = async (book, shelf) => {
  //   try {
  //     const response = await update(book, shelf);
  //     console.log("book", book, "shelf", shelf);
  //     console.log("updated", response);
  //     setChangeShelf(response);
  //     console.log("book result", bookResult);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    allBooks();
  }, [changeShelf]);

  // useEffect(() => {
  //   if (searchValue) {
  //     searchBooks();
  //     return;
  //   }
  //   if (!searchValue || !showSearchPage) {
  //     setSearchResult([]);
  //     return;
  //   }
  // }, [searchValue]);

  // useEffect(() => {
  //   if (!showSearchPage) {
  //     setSearchResult([]);
  //     setSearchValue(" ");
  //   }
  // }, [showSearchPage]);

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
