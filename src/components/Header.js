import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
      dispatch({ type: "LOGOUT_USER" });
    }
  };

  return (
    <div className="container">
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
              <span className="header__optionOne">Hello {user?.email},</span>
              <span className="header__optionTwo">
                {user ? "Signout" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionOne">Returns</span>
              <span className="header__optionTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionOne">Your</span>
              <span className="header__optionTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__basket">
              <ShoppingBasketIcon />
              <span className="header__optionTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
