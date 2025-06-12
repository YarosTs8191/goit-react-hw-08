import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import { GrHome, GrUserNew } from "react-icons/gr";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <Link className={css.link} to="/">
        Home <GrHome />
      </Link>
      {isLoggedIn && (
        <Link className={css.link} to="/contacts">
          Contacts <GrUserNew />
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
