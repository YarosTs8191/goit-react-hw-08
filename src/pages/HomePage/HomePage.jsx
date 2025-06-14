import css from "./HomePage.module.css";
import { ImStackoverflow } from "react-icons/im";
import { FaChessBishop } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1>
        Welcome to ContactBook <ImStackoverflow />
      </h1>
      <p>
        This app was created by Yaroslav Tsyutsmats — Developer in progress{" "}
        <FaChessBishop />
      </p>
    </div>
  );
};

export default HomePage;
