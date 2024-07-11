import css from './ContactList.module.css'
import Contact from "../Contact/Contact"

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, number, name }) => (
        <Contact name={name} key={id} onDelete={onDelete} number={number} id={id} />
      ))}
    </ul>
  );
}

export default ContactList;
