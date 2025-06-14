import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import { useLocation } from "react-router-dom";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const location = useLocation();

  useEffect(() => {
    // Закриваємо меню при зміні маршруту
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={css.header}>
      <button className={css.burger} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>

      <nav className={`${css.nav} ${isOpen ? css.show : ""}`}>
        <Navigation />
      </nav>

      <div className={css.user}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
};

export default AppBar;
