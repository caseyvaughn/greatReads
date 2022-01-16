import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap"

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
        <Navbar.Brand>
          <NavLink to="/" style={{ textDecoration: 'none', color: "black"}}><h1>greatReads</h1></NavLink>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar" >
            <Nav className="mr-auto">
                <NavItem>
                  <Nav.Link eventKey="1" className="navlink" as={Link} to="/add">
                    Add a Book</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="2" className="navlink" as={Link} to="/">
                    View All Books</Nav.Link>
                </NavItem>
            </Nav>
            </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
