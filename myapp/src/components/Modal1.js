import React, { useState, useEffect } from 'react';

import { imgStyle } from '../constants/const';

function Modal({ list, books, onclosemodal, getSimilarImage }) {
    const [reviews, setReviews] = useState({});
    const getReviews = () => {
        fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?api-key=Gtdym4qr4grJV7x3aOBuAu0CcmchgkGj&title=${list.title}`)
            .then(response => response.json())
            .then(data => setReviews(data.results));
    }
    useEffect(() => {
        getReviews();
    }, [list.title])
    function closeModal() {
        onclosemodal();
    }
    function similarImages(e) {
        getSimilarImage(e);
    }
    return (
        <>
            <div className="modal_display">
                <div className="modal-container">
                    <div id="book_content" className="book-content">
                        <h6>Book Details</h6>
                        <div className="book-container">
                            <div id="popedbook" className="poped-book">
                                <img id="popedimg" className="book-img" data-book="book"
                                    src={list.book_image} /></div>
                            <div className="book-details"><label>Title</label>
                                <h6 id="title" className="title">{list.title}</h6>
                                <label>Author</label>
                                <h6 id="author" className="author">{list.author}</h6>
                                <label>Contributor</label>
                                <h6 id="contributor" className="contributor">{list.contributor}</h6>
                                <label>Publisher</label>
                                <h6 id="publisher" className="publisher">{list.publisher}</h6>
                                <label>Description</label>
                                <h6 id="description" className="description">{list.description}</h6>
                                <label>Buy Links</label>
                                {list.buy_links.map((links) => {
                                    return (
                                        <div id="buylinks" className="buy-links">
                                            <a href={links.url} target="_blank">{links.name}</a>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                    <div id="similar-content" className="similar-content">
                        <div id="null" className="similar-control">
                            <h6>Similar Books</h6>
                            <button id="hidePopUp" className="hidePopUp " onClick={closeModal} >X</button>
                        </div>
                        <div id="similar-container" className="similar-container">
                            {books.map((similar_books) => {
                                return (
                                    <img src={similar_books.book_image} className={similar_books.primary_isbn10} onClick={(e) => similarImages(e)} style={imgStyle} />
                                )
                            })}
                        </div>
                    </div>
                    <div id="review-content" className="review-content">
                        <h6>Book Reviews</h6>

                        <div id="review-container" className="review-container">
                            {reviews.length !== 0 ?
                                <>
                                    <a href={reviews.url}>
                                        <p id="default-review" className="default-review">{reviews.url}</p>
                                    </a>
                                </> : <>
                                    <p id="default-review" className="default-review">NO REVIEWS FOR THIS BOOK</p>

                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;