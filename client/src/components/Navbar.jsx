import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap"


export default function NavbarComp() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        bg="light"
        variant="light"
        fixed="top"
        //expand makes navbar responsive; hamburger menu only shows up under medium sized
        expand="sm"
        className="navbar"
      >
        {/* need navbar.toggle for hamburger menu to work properly */}
        <Navbar.Toggle />
        {/* <Link to="/"><h1>greatReads</h1></Link> */}
        <NavLink to ="/"><h1>greatReads</h1></NavLink>
            {/* //styling for hamburger menu */}
            <Navbar.Collapse className="responsive-navbar">
              <NavLink className="navlink" to="/add">Add a Book</NavLink>
              <NavLink className="navlink" to="/">View All Books</NavLink>
            </Navbar.Collapse>
        
    
      </Navbar>
      
    </div>
  )
}
