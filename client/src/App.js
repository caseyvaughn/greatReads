import './App.css';
import { Routes, Route } from "react-router-dom";
import BookList from './components/BookList';
import BookDetail from './components/ BookDetail';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        greatReads
      </header> */}
      <Navbar />
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
