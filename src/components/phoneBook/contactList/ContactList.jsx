import { useCallback } from 'react';
import { Contact } from './Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/index';
import { filterContacts } from 'components/services/index';
import css from './ContactList.module.css';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const filtredContacts = useCallback(
    () => filterContacts(contacts, filter),
    [contacts, filter]
  );

  return (
    <ul>
      {filtredContacts().map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact name={name} number={number} />
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { ContactList };