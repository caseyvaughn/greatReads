import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap"
import { Dropdown, DropdownButton } from 'react-bootstrap';

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
        <NavLink to="/"><h1>greatReads</h1></NavLink>
        
        {/* <DropdownButton title="Sort Books">
        <Dropdown.Item onClick={() => { setSortParam("startDate") }}>Start Date</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortParam("endDate") }}>End Date</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortParam("title") }}>Title</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortParam("author") }}>Author's Firstname</Dropdown.Item>
        <Dropdown.Item onClick={() => { setSortParam("stars") }}>Rating</Dropdown.Item>
      </DropdownButton> */}


            {/* //styling for hamburger menu */}
            <Navbar.Collapse className="responsive-navbar">
              <NavLink className="navlink" to="/add">Add a Book</NavLink>
              <NavLink className="navlink" to="/">View All Books</NavLink>
            </Navbar.Collapse>
        
    
      </Navbar>
      
    </div>
  )
}
