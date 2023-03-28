import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectItems } from '../../redux/contacts/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import css from './formStyle.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const user = {
    name,
    number,
  };

  const handlestateInpyt = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleCheck = data => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is alredy in contact`);
    } else {
      dispatch(addContact(data));
    }
  };

  const handleSabmit = e => {
    e.preventDefault();
    handleCheck(user);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSabmit}>
      <label className={css.label}>
        Name
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handlestateInpyt}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>

      <label className={css.label}>
        Number
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          onChange={handlestateInpyt}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>
      <Button variant="contained" className={css.form_btn} type="submit">
        Add contact
      </Button>
    </form>
  );
};
