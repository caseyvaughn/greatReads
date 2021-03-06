import './App.css';
import { Routes, Route } from "react-router-dom";
import BookList from './components/BookList';
import BookDetail from './components/ BookDetail';
import NavbarComp from './components/Navbar';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';




function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/:id/edit" element={<EditBook />} />
        <Route path = "/add" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
