import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  SvgIcon,
  Grid,
  Paper,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2)
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  toolBox: {
    paddingBottom: theme.spacing(0)
  }
}));

const Toolbar = ({ className, users, setFilteredUsers, ...rest }) => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const filteredUsers = filterUsers(users, searchText);
    filteredUsers ? setFilteredUsers(filteredUsers) : setFilteredUsers([])
  };

  const filterUsers = (users, searchText) => {
    const filteredUsers = users.filter((user) => {
      if (user && user.name) {
        return user.name.toLowerCase().includes(searchText.toLowerCase());
      }
    });
    return filteredUsers;
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box>
        <Paper className={classes.paper}>
          <Grid container spacing={3} alignItems='center'>
            <Grid item xs={6}>
              <Box maxWidth={500}>
                <TextField
                  fullWidth
                  size="small"
                  value={searchText}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          fontSize="small"
                          color="action"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search user"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={6} align="end">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button
                  color="primary"
                  variant="contained"
                >
                  Add Initiative
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div >
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
