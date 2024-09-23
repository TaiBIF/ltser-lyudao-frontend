import { Link } from 'react-router-dom';
import { SocialObservationBookCategoryList, BookItemList } from 'data/siteData';

const Books = () => {
  const renderedContent = SocialObservationBookCategoryList.map(
    (item, index) => {
      const filteredBooks = BookItemList.filter(
        (bookItem) => bookItem.theme === item.theme
      );
      return (
        <div key={index} className="book-container">
          <div className="title-box">
            <div className="title">
              <h2>{item.category}</h2>
              <div className="line"></div>
            </div>
            <p>{item.content}</p>
          </div>
          <ul>
            {filteredBooks.map((book) => (
              <li key={book.id} className="detail-box">
                <Link key={book.id} to={book.url} className="book-title">
                  {book.title}
                </Link>
                <div className="book-detail">
                  <div>作者/編者：{book.author}</div>
                  <div>出版單位：{book.publisher}</div>
                  <div>出版時間：{book.publish_date}</div>
                  <div>ISBN/ISSN：{book.isbn_issn}</div>
                </div>
                <div>{book.abstract}</div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  );
  return <div>{renderedContent}</div>;
};

export default Books;
