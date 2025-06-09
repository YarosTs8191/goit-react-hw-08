import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contacts/slice"; // ✅ новий імпорт

const ContactList = () => {
  // ✅ використовуємо мемоізований селектор
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
