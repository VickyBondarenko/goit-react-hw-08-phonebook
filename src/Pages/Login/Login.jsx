import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(logIn({ email, password }));
    form.reset();
    navigate('/contacts');
  };

  return (
    <div className="form__wrapper">
      <h1>login</h1>
      <form className="flex gap-2 flex-col w-1/4 p-4" onSubmit={handleSubmit}>
        <input
          className="border"
          name="email"
          placeholder="email"
          type="text"
        />
        <input
          className="border"
          name="password"
          placeholder="password"
          type="password"
        />
        <button className="border">Login</button>
      </form>
    </div>
  );
}
