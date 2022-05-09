import { React, useState } from 'react';
import { imgStyle } from '../constants/const';
import Modal from './Modal1';
export default function GetBooks({ BookImage }) {

  const [viewModal, setViewModal] = useState(false);
  const [imgId, setImgId] = useState({});
  const [books, setBooks] = useState([]);

  const handleonclick = (e, book, books) => {
    setViewModal(true);
    setImgId(book);
    setBooks(books);
  }

  const getSimilarMessage = (e) => {
    setImgId(e.target.className);
  }
  const onclosemodal = () => {
    setViewModal(false);
  }
  return (
    <div className="flex">
      <div className="render" >
        {BookImage.map((data, index) => {
          const books = data.books;
          return (
            <>
              <div key={data.list_id} className="book-div">
                <h2 className='book_title'>{data.display_name}</h2>
                {books.map((book => {
                  return <img src={book.book_image} className={book.primary_isbn10} onClick={(e) => handleonclick(e, book, books)} style={imgStyle} alt={book.display_name} />
                }))}
              </div>

            </>
          )
        })}
        {viewModal ? <Modal list={imgId} books={books} onclosemodal={onclosemodal} getSimilarImage={getSimilarMessage} /> : null}
      </div>
    </div>
  );

}