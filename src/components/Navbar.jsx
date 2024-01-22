import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useRecoilValue } from "recoil";
import shopState from "../recoil/atoms/shop";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const shop = useRecoilValue(shopState);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar">
      <div className="container">
        {/* <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div> */}
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link
                to={`/orders?restrauntName=${shop.restrauntName}&username=${shop.username}`}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to={`/menu/?restrauntName=${shop.restrauntName}&username=${shop.username}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link to="/addItem">Add Item</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
