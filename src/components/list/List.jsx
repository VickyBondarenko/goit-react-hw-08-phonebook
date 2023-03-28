import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { applayFilter } from '../../redux/contacts/selectors';
import css from './listStyle.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const List = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(applayFilter);

  return (
    <ul className={css.list}>
      {contactsList.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.contact}>
            {name} : {number}
          </p>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            size="small"
            className={css.list_btn}
            onClick={event => dispatch(deleteContact(event.target.id))}
            id={id}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
