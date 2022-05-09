import './App.css';
import './style.css';
import React, { useState, useEffect } from 'react';
import GetBooks from './components/landing';
import Filter from './components/filter';
import Header from './components/header';
function App() {
  const [Book, setBook] = useState([]);
  const [BookImage, setBookImage] = useState([])
  const getOverviewList = () => {
    fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=Gtdym4qr4grJV7x3aOBuAu0CcmchgkGj")
      .then(response => response.json())
      .then(data => {
        setBookImage(data.results.lists);
        setBook(data.results.lists);
      })
  }
  useEffect(() => {
    getOverviewList();
  }, [])
  function SetBooks(book) {
    setBook(book);
  };
  return (
    <div>
      <Header BookImage={BookImage} setBooks={SetBooks} />
      <Filter BookImage={BookImage} setBooks={SetBooks} />
      <GetBooks BookImage={Book} />
    </div>
  );
}

export default App;
