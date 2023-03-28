import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/slice';
import { selectFilterValue } from '../../redux/contacts/selectors';
import TextField from '@mui/material/TextField';
import css from './filterStyle.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);

  const dispatch = useDispatch();

  return (
    <div className={css.wraper}>
      <p>Find contacts by name</p>
      <TextField
        id="outlined-basic"
        label="Contact name"
        variant="outlined"
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
