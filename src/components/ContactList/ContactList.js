import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchContacts,
  deleteContact,
} from "redux/contacts/contacts-operations";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, id, number }) => (
        <li className={s.item} key={id}>
          <span className={s.contactInfo}>
            {name}: {number}
          </span>
          <button
            className="button"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
