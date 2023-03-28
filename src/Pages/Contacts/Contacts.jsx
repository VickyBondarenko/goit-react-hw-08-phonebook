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
      <h2>Phonebook</h2>
      <Form />

      <Filter />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <List />
    </Wraper>
  );
};

export default Contacts;

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
