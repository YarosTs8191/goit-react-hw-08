import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { ImHappy } from "react-icons/im";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => dispatch(logout());

  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>
        <ImHappy /> Welcome, {user.name}
      </p>
      <button className={css.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
