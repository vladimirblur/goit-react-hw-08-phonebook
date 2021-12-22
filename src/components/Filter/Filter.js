import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "redux/contacts";
import s from "./Filter.module.css";

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const filterId = uuidv4();

  return (
    <div className={s.filter}>
      <label className={s.label} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={filter}
        id={filterId}
        onChange={(e) => dispatch(contactsActions.filterChange(e.target.value))}
      ></input>
    </div>
  );
}
