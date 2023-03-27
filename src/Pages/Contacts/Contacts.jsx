import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectLoadingValue,
  selectError,
} from '../../redux/contacts/selectors';
import { selectToken } from 'redux/auth/selectors';
import { List } from 'components/list/List';
import { Form } from 'components/form/Form';
import { Filter } from 'components/filter/Filter';
import styled from 'styled-components';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingValue);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  useEffect(() => {
    token && dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Wraper>
      {!token ? (
        <p>Please, Log In</p>
      ) : (
        <div>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <List />
        </div>
      )}
    </Wraper>
  );
};

export default Contacts;

const Wraper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  padding: 20px 50px;
`;
