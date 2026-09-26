function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">
                DesiredRep
            </a>

            <div className="navbar-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;