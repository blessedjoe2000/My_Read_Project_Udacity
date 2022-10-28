import "./App.css";
import { useEffect, useState } from "react";
import { get, getAll, search, update } from "./BooksAPI";
import "./components/Books/book.css";
import Book from "./components/Books/Book";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [shelf, setShelf] = useState("");
  const [bookResult, setBookResult] = useState([]);
  const [books, setBooks] = useState([]);

  const handleChange = async (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    let result = await search(event.target.value);
    setSearchResult(result);
  };

  const selectShelf = async (event) => {
    setShelf(event.target.value);
  };

  const allBooks = async () => {
    const result = await getAll();
    setBookResult(result);
  };

  useEffect(() => {
    allBooks();
  }, []);

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
              {searchResult.map((result, id) => {
                return (
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover">
                          <img
                            src={result.imageLinks.thumbnail}
                            alt={result.title}
                          />
                        </div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="none" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{result.title}</div>
                      <div className="book-authors">
                        {result.authors.map((author) => author)}
                      </div>
                    </div>
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
                    {bookResult.map((book) => {
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
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            id="to-kill-a-mockingbird"
                            className="book-cover"
                          ></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">To Kill a Mockingbird</div>
                        <div className="book-authors">Harper Lee</div>
                      </div>
                    </li>
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div id="enders-game" className="book-cover"></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">Ender's Game</div>
                        <div className="book-authors">Orson Scott Card</div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>;
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div id="the-hobbit" className="book-cover"></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">The Hobbit</div>
                        <div className="book-authors">J.R.R. Tolkien</div>
                      </div>
                    </li>
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            id="the-places-you-go"
                            className="book-cover"
                          ></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          Oh, the Places You'll Go!
                        </div>
                        <div className="book-authors">Seuss</div>
                      </div>
                    </li>
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            id="the-adventure-of-tom-sawyer"
                            className="book-cover"
                          ></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          The Adventures of Tom Sawyer
                        </div>
                        <div className="book-authors">Mark Twain</div>
                      </div>
                    </li>
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
