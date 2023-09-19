import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='logo'>
            <Link to='/' className='brand'>
              DEMO
            </Link>
          </div>
          <nav className='nav nav-pills'>
            <NavLink
              to='/'
              className={(navData) =>
                navData.active ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className={(navData) =>
                navData.active ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to='/products'
              className={(navData) =>
                navData.active ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
