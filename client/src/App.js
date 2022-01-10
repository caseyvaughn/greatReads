import './App.css';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        greatReads
      </header> */}
      <Routes>
        <Route path="/" element={<div>Welcome to greatReads</div>} />
        <Route path="/books/:id" element={<div>Book Detail</div>} />
        <Route path="/books/:id/edit" element={<div>Edit Book</div>} />
        <Route path = "/add" element={<div>Add Book </div>} />
      </Routes>
    </div>
  );
}

export default App;
