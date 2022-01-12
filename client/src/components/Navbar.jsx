import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"

export default function NavbarComp() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        //expand makes navbar responsive; hamburger menu only shows up under medium sized
        expand="md"
      >
        {/* need navbar.toggle for hamburger menu to work properly */}
        <Navbar.Toggle></Navbar.Toggle>
        <Link to="/"><h1>greatReads</h1></Link>
        {/* //styling for hamburger menu */}
        <Navbar.Collapse>
          <NavLink to="/add">Add a Book</NavLink>
          <NavLink to="/">View All Books</NavLink>
        </Navbar.Collapse>
      </Navbar>
      
      {/* <Link to="/">
        <h1>greatReads</h1>
        </Link>
      <ul>
        <li>
          <Link to="/">All Books</Link>
        </li>
        <li>
          <Link to="/add">Add a Book</Link>
          </li>
      </ul> */}
      
    </div>
  )
}

{/* <Link to="/">
<h1>greatReads</h1>
</Link>
<ul>
<li>
  <Link to="/">All Books</Link>
</li>
<li>
  <Link to="/add">Add a Book</Link>
  </li>
</ul> */}