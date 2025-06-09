import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar /> {/* Навігаційна панель */}
      <main>
        <Outlet /> {/* Виводить внутрішні сторінки */}
      </main>
    </>
  );
};

export default Layout;
