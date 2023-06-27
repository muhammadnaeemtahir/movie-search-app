const Navbar = ({ name }) => {
  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7yeUlvninc0q61O08jMxVCyj_pmt9MMKExcXEfcPfg&s"
                alt="Logo"
                width="100"
                height="auto"
                className="d-inline-block align-text-center me-1"
              />
              {name}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
