import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const UserListView = () => {
  const classes = useStyles();
  const [users] = useState(data);
  const [filteredUsers, setFilteredUsers] = useState(data);
  
  return (
    <Page
      className={classes.root}
      title="users"
    >
      <Container maxWidth={false}>
        <Toolbar users={users} setFilteredUsers={setFilteredUsers}/>
        <Box mt={3}>
          <Results filteredUsers={filteredUsers} />
        </Box>
      </Container>
    </Page>
  );
};

export default UserListView;
