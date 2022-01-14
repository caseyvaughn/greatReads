import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { Dropdown, DropdownButton, Container } from 'react-bootstrap';

export default function NavbarComp() {

  const handleCollapse = () => {
    console.log("handleCollapse");
    // nav.classList.add("collapsed");
  }
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
        {/* <Container> */}
          <Navbar.Brand>
            <NavLink to="/" style={{ textDecoration: 'none', color: "black"}}><h1>greatReads</h1></NavLink>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar" >
          <Nav className="mr-auto">
                {/* <NavLink eventKey="1" className="navlink" to="/add" onClick={handleCollapse}>Add a Book</NavLink>
                <NavLink eventKey = "2" className="navlink" to="/">View All Books</NavLink> */}
            <NavItem>
              <Nav.Link eventKey="1" className="navlink" as={Link} to="/add" onClick={handleCollapse}>
                Add a Book</Nav.Link>
            </NavItem>

            <NavItem>
              <Nav.Link eventKey="2" className="navlink" as={Link} to="/">
                View All Books</Nav.Link>
            </NavItem>
              </Nav>
            </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  )
}
