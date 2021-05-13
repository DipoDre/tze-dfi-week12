import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-orange-a fixed-top">
                <Link className="navbar-brand text-white" to="/">DARE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" data-toggle="collapse" data-target="#navbarNav">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" data-toggle="collapse" data-target="#navbarNav">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio" data-toggle="collapse" data-target="#navbarNav">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" data-toggle="collapse" data-target="#navbarNav">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Menu;