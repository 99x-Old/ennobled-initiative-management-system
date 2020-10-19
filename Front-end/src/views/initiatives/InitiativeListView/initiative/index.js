import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { useLocation } from "react-router-dom";
import InitiativeActionCard from './initiativeActionCardModified';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  InitiativeYearCard: {
    height: '100%'
  }
}));

const InitiativeView = () => {
  const classes = useStyles();
  const location = useLocation();

  const initiativeActions = location.state.actions

  return (
    <Page
      className={classes.root}
      title="Initiative"
    >
      <Container maxWidth={false}>
        <Box display="flex" flexDirection="row" mt={2} flexWrap="wrap">
          {initiativeActions.map((action) => (
            <Box mr={3} mb={3} minWidth={300} >
              <InitiativeActionCard
                className={classes.InitiativeYearCard}
                action={action}
                header={action}
                media=""
                content=""
                description=""
              />
            </Box>))}
        </Box>
      </Container>
    </Page>
  );
};

export default InitiativeView;
