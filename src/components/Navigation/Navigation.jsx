import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { GrHome, GrUserNew } from "react-icons/gr";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Home <GrHome />
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
        >
          Contacts <GrUserNew />
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
