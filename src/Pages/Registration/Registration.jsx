// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './registrationStyle.module.css';
import { toast } from 'react-toastify';

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => navigate('/'))
      .catch(() => {
        toast.error('This data is not valid!', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className={css.wraper}>
      <h1 className={css.title}>Registration</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="border"
          name="name"
          type="text"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="border"
          name="email"
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
          SignUP
        </Button>
      </form>
    </div>
  );
}
