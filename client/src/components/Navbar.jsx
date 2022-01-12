import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"

export default function NavbarComp() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
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
      
    </div>
  )
}
