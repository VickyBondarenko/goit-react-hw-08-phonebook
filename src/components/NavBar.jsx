import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../redux/auth/operations';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const name = useSelector(state => state.auth.user.name);
  return (
    <Header className="">
      <div>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedin && <StyledLink to="/contacts">Phonebook</StyledLink>}
      </div>

      {!isLoggedin ? (
        <div>
          <StyledLink to="/login">log In</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </div>
      ) : (
        <Wrap className="">
          <User>Welcome, {name}</User>
          <Button
            variant="contained"
            style={{ height: '40px' }}
            onClick={() => {
              dispatch(logOut());
              navigate('/');
            }}
          >
            Log Out
          </Button>
        </Wrap>
      )}
    </Header>
  );
};

const Header = styled.header`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px 2px gray;
`;

const StyledLink = styled(NavLink)`
  font-size: 25px;
  margin-right: 10px;
  padding: 4px;
  text-decoration: none;
  border-bottom: 3px solid;
  color: black;

  &.active {
    color: #1565c0;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const User = styled.p`
  font-size: 25px;
  padding: 4px;
  border-bottom: 3px solid #1565c0;
`;
