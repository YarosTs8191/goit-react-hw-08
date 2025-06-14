import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <AppBar /> {/* Навігаційна панель */}
      <main className={css.container}>
        <Outlet /> {/* Виводить внутрішні сторінки */}
      </main>
    </>
  );
};

export default Layout;
