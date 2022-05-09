import React, { useState } from 'react';

function Header({ BookImage, setBooks }) {

    const handleonclick = (e) => {
        const genre = e.target.value;
        const getList = BookImage.filter(list => {
            return list.title === genre;
        })
        setBooks(getList);
    }

    return (
        <header>
            <div className="header">
                <h2 className="header-title">New York Times Book Store</h2>
                <div className="books-all-filter">
                    <input type="text" placeholder="Enter your suggestions" id="filter-text" />
                    <button class="btn-submit-filters" onClick={(e) => handleonclick(e)}>TRY MY LUCK</button>
                </div>
            </div>
        </header>
    );
}

export default Header;