import "./book.css";
import BookShelfChanger from "../BookShelfChanger";
import { CurrentlyReading, WantToRead, Read } from "../BookShelfTitle";

export const BookCurrentlyReading = () => {
  return (
    <div className="bookshelf">
      <CurrentlyReading />
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div id="to-kill-a-mockingbird" className="book-cover"></div>
                <BookShelfChanger />
              </div>
              <div className="book-title">To Kill a Mockingbird</div>
              <div className="book-authors">Harper Lee</div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-top">
                <div id="enders-game" className="book-cover"></div>
                <BookShelfChanger />
              </div>
              <div className="book-title">Ender's Game</div>
              <div className="book-authors">Orson Scott Card</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export const BookWantToRead = () => {
  return (
    <div className="bookshelf">
      <WantToRead />
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div id="book-1776" className="book-cover"></div>
                <BookShelfChanger />
              </div>
              <div className="book-title">1776</div>
              <div className="book-authors">David McCullough</div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-top">
                <div id="harry-potter" className="book-cover"></div>
                <BookShelfChanger />
              </div>
              <div className="book-title">
                Harry Potter and the Sorcerer's Stone
              </div>
              <div className="book-authors">J.K. Rowling</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export const BookRead = () => {
  return (
    <div className="bookshelf">
      <Read />
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div id="the-hobbit" className="book-cover"></div>
                <BookShelfChanger />
              </div>
              <div className="book-title">The Hobbit</div>
              <div className="book-authors">J.R.R. Tolkien</div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-top">
                <div id="the-places-you-go" className="book-cover"></div>
                <BookShelfChanger />
              </div>
              <div className="book-title">Oh, the Places You'll Go!</div>
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
                <BookShelfChanger />
              </div>
              <div className="book-title">The Adventures of Tom Sawyer</div>
              <div className="book-authors">Mark Twain</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};
