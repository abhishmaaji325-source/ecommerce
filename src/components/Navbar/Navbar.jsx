import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <NavLink to="/">🛍 ShopVerse</NavLink>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/shop">Shop</NavLink>

          <NavLink to="/categories">Categories</NavLink>

          <NavLink to="/deals">Deals</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Right Side Icons */}
        <div className="nav-icons">

          <button
            className="search-btn"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch />
          </button>

          <NavLink to="/wishlist" className="icon-btn">
            <FaHeart />
          </NavLink>

          <NavLink to="/cart" className="cart-icon">
            <FaShoppingCart />
            <span>{cartCount}</span>
          </NavLink>

          <NavLink to="/login" className="login-btn">
            <FaUser />
            Login
          </NavLink>

        </div>

      </div>

      {showSearch && (
        <div className="search-dropdown">
          <input
            type="text"
            placeholder="Search products..."
          />
        </div>
      )}

    </header>
  );
};

export default Navbar;