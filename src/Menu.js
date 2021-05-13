import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
    return ( 
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">DARE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link eventKey={1} as={Link} to="/" exact>Home</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/about">About</Nav.Link>
                        <Nav.Link eventKey={3} as={Link} to="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link eventKey={4} as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </header>
    );
}

export default Menu;