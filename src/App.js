import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookShow from "./components/BookShow";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 1000), title: title },
    ];

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
