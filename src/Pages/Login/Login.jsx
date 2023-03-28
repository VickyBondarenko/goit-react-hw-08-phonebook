import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './loginStyle.module.css';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => navigate('/contacts'))
      .catch(error => console.log(error));

    form.reset();
  };

  return (
    <div className={css.wraper}>
      <h1 className={css.title}>login</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="border"
          name="email"
          placeholder="email"
          type="text"
        />
        <TextField
          id="outlined-basic"
          label="Passwordl"
          variant="outlined"
          className="border"
          name="password"
          type="password"
        />
        <Button variant="contained" className="border" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
}
