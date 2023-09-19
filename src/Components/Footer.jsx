import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <nav className='d-flex justify-content-center'>
          <NavLink
            to='/'
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to='about'
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to='products'
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>
          <NavLink
            to='posts'
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
          >
            Posts
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
