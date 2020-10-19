import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  TextField,
  makeStyles,
  Grid,
  Paper,
  IconButton,
  Tooltip
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { authProvider } from "src/authProvider.js";
import AzureAD from 'react-aad-msal';
import Can from 'src/authorize/Can';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import InitiativeAddModal from './modals/InitiativeAddModal';
import InitiativeYearAddModal from './modals/InitiativeYearAddModal';



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

const Toolbar = ({ className, years, setSelectedYear, selectedYear, currentYear, ...rest }) => {
  const classes = useStyles();
  const [isInitiativeAddModalOpen, setIsInitiativeAddModalOpen] = useState(false);
  const [isInitiativeYearAddModalOpen, setIsInitiativeYearAddModalOpen] = useState(false);

  const initiativeYearSelectionChange = (e, values) => {
    values && values.year ? setSelectedYear(values.year) : setSelectedYear(selectedYear)
  }

  const handleInitiativeAddModalOpen = () => {
    setIsInitiativeAddModalOpen(true)
  }

  const handleInitiativeYearAddModalOpen = () => {
    setIsInitiativeYearAddModalOpen(true)
  }

  return (
    <AzureAD provider={authProvider}>
      {
        ({ accountInfo }) => {
          const role = accountInfo.account.idToken.roles
          return (
            <div
              className={clsx(classes.root, className)}
              {...rest}
            >
              <Box>
                <Paper className={classes.paper}>
                  <Grid container spacing={3} alignItems='center'>
                    <Grid item xs={6}>
                      <Autocomplete
                        id="combo-box-demo"
                        size="small"
                        options={years}
                        getOptionLabel={(option) => option.year}
                        style={{ width: 300 }}
                        onChange={(e, v) => initiativeYearSelectionChange(e, v)}
                        renderInput={(params) => <TextField {...params} label="Combo box" label={selectedYear} variant="outlined" />}
                      />
                    </Grid>
                    <Grid item xs={6} align="end">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                      >
                        {currentYear === selectedYear &&
                          <Can
                            role={role}
                            perform="initiative:add"
                            yes={() => (
                              <Box mr={1}>
                                <IconButton
                                  color="primary"
                                  variant="contained"
                                  onClick={handleInitiativeAddModalOpen}
                                >
                                  <Tooltip title="Add initiative">
                                    <AddCircleOutlineIcon />
                                  </Tooltip>
                                </IconButton>
                              </Box>
                            )}
                          />
                        }
                        <Can
                          role={role}
                          perform="year:add"
                          yes={() => (
                            <Box>
                              <IconButton
                                color="primary"
                                variant="contained"
                                onClick={handleInitiativeYearAddModalOpen}

                              >
                                <Tooltip title="Add initiative year">
                                  <EventAvailableIcon />
                                </Tooltip>
                              </IconButton>
                            </Box>
                          )}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
              <InitiativeAddModal isInitiativeAddModalOpen={isInitiativeAddModalOpen} setIsInitiativeAddModalOpen={setIsInitiativeAddModalOpen} currentYear={currentYear} />
              <InitiativeYearAddModal isInitiativeYearAddModalOpen={isInitiativeYearAddModalOpen} setIsInitiativeYearAddModalOpen={setIsInitiativeYearAddModalOpen} />
            </div>
          )
        }}
    </AzureAD >
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  years: PropTypes.array.isRequired,
  setSelectedYear: PropTypes.func,
  selectedYear: PropTypes.string,
  currentYear: PropTypes.string
};

export default Toolbar;
