import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
    return ( 
        <header>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-orange-a">
                <Link className="navbar-brand text-white" to="/">DARE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav> */}

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