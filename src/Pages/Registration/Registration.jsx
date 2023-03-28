// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(register({ name, email, password }));
    navigate('/');
  };

  return (
    <div className="">
      <h1>Registration</h1>
      <form className="" onSubmit={handleSubmit}>
        <input className="border" name="name" type="text" placeholder="name" />
        <input
          className="border"
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          className="border"
          name="password"
          type="password"
          placeholder="password"
        />
        <button className="border">SignUP</button>
      </form>
    </div>
  );
}
