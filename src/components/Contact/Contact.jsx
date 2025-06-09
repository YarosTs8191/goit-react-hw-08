import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations"; // ✅ новий імпорт
import css from "./Contact.module.css";
import { ImAddressBook } from "react-icons/im";
import { ImPhone } from "react-icons/im";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id)); // ✅ бекенд-запит
  };

  return (
    <li className={css.item}>
      <div className={css.grup}>
        <p className={css.name}>
          <ImAddressBook className={css.icon} />
          {contact.name}
        </p>
        <p className={css.number}>
          <ImPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
