import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>greatReads</h1>
        </Link>
      <ul>
        <li>
          <Link to="/">All Books</Link>
        </li>
        <li>
          <Link to="/add">Add a Book</Link>
          </li>
      </ul>
      
    </div>
  )
}