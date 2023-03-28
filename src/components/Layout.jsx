import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Suspense fallback={<Loader>Loading...</Loader>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 20px;
  text-decoration: none;
  box-sizing: border-box;
`;

const Loader = styled.h1`
  text-align: center;
`;
