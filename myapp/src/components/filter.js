import React, { useState } from 'react';
import GetBooks from './landing';
function Filter({ BookImage, setBooks }) {
    const handleonclick = (e) => {
        const genre = e.target.value;
        if (genre === "all") {
            setBooks(BookImage);
        }
        else {
            const getList = BookImage.filter(list => {
                return list.display_name === genre;
            })
            setBooks(getList);
        }

    }


    return (
        <>
            <section className="filter">
                <div className="filter-dropdown">
                    <label>Choose a Genre</label>
                    <select name="books_filter" id="genre" onChange={(e) => handleonclick(e)}>
                        <option value="all">All</option>
                        {
                            BookImage.map((list, index) => {
                                return (
                                    <option value={list.display_name} >{list.display_name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="filter-date">
                </div>
            </section>
        </>
    );
}

export default Filter;