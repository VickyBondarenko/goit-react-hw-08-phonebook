import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../redux/auth/operations';
import { selectIsLoggedIn, selectToken } from '../redux/auth/selectors';
import styled from 'styled-components';

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  // const name = useSelector(state => state.auth.user.name);
  return (
    <Header className="">
      {token ? (
        <StyledLink to="/contacts">Phonebook</StyledLink>
      ) : (
        <StyledLink to="/">Home</StyledLink>
      )}

      {!isLoggedin ? (
        <div>
          <StyledLink to="/login">log In</StyledLink> |
          <StyledLink to="/register">Register</StyledLink>
        </div>
      ) : (
        <div className="">
          <p>mango@mail.com</p>
          <button
            className=""
            onClick={() => {
              dispatch(logOut());
              navigate('/');
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </Header>
  );
};

const Header = styled.header`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px 2px gray;
`;

const StyledLink = styled(NavLink)`
  font-size: 36px;
  margin-right: 10px;
  padding: 4px;
  text-decoration: none;
  border-bottom: 3px solid;
  color: black;

  &.active {
    color: lightcoral;
  }
`;
