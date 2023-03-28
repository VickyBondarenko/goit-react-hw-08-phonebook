import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Button from '@mui/material/Button';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Home = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <Greetings>
      <h1 className="">Welcome to our homepage!</h1>
      {!isLoggedin ? (
        <div>
          <p>
            Thank you for visiting our website. We hope you find everything
            you're looking for and more!
          </p>
          <Link to="/login">
            <Button variant="outlined" size="small" type="button">
              Please Log In
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <p>Thank you for authorization!</p>
          <Link to="/contacts">
            <Button variant="outlined" size="small" type="button">
              Your Phonebook
            </Button>
          </Link>
        </div>
      )}
    </Greetings>
  );
};

export default Home;

const Greetings = styled.div`
  text-align: center;
`;
