import "./navbar.scss";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpne, setNav] = useState(false);
  const className = navOpne ? "openNav" : "";

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logoContainer">
          <MenuOutlinedIcon
            className="menuIcon"
            onClick={() => setNav(!navOpne)}
          />
          <Link className="link" to="/">
          <p>DRI<span>PP</span>IN</p></Link>
        </div>
        <div className="navContainer">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/shop" className="link">
              <li>Products</li>
            </Link>
            <Link to="/contact" className="link">
              <li>About</li>
            </Link>
            <Link to="#" className="link">
              <li>Career</li>
            </Link>
          </ul>
          <Link to="/contact">
          <button>Get in touch</button></Link>
        </div>
        <div className={`sideNav ${className}`}>
          <div className="profileContainer">
            <div className="profile">
              <PersonIcon className="personIcon" />
            </div>
          </div>
          <button className="editBtn">Edit profile</button>
          <nav>
            <ul>
              <Link className="link" to="/account">
                <li>My account</li>
              </Link>
              <Link className="link"  to="/deals">
                <li>Deals of the day</li>
              </Link>
              <Link className="link"  to="#">
              <li>My wishlist</li></Link>
              <Link className="link"  to="/bag">
                <li>My Bag</li>
              </Link>
              <Link className="link"  to="#">
              <li>My orders</li></Link>
              <Link className="link"  to="/payment">
                <li>Payment info</li>
              </Link>
              <Link className="link"  to="#">
              <li>Billing address</li></Link>
              <hr />
              <Link className="link"  to="#">
              <li>Settings</li></Link>
              <Link className="link"  to="#">
              <li>About us</li></Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
