import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import data from './data';
import InitativeList from './InitiativeList';
import * as initiativeApi from "../../../api/initiativeApi";
import * as initiativeYearApi from "../../../api/initiativeYearApi";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  InitiativeYearCard: {
    height: '100%'
  }
}));

const InitiativeListView = () => {
  const currentYear = new Date().getFullYear().toString();
  const classes = useStyles();
  const [initiativeList, setInitiativeData] = useState();
  const [years, setYears] = useState();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  useEffect(() => {
    initiativeApi.getInitiatives(selectedYear).then((initiatives) => {
      setInitiativeData(initiatives)
    }
    ).catch(() => {
      setInitiativeData([])
    }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  useEffect(() => {
    initiativeYearApi.getInitiativeYears().then((_years) => {
      setYears(_years)
    }
    ).catch(() => {
      setYears([])
    }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("initaitives", initiativeList)

  return (
    <Page
      className={classes.root}
      title="Initiatives"
    >
      <Container maxWidth={false}>
        {years &&
          <Toolbar years={years} setSelectedYear={setSelectedYear} selectedYear={selectedYear} currentYear={currentYear} />

        }
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {initiativeList &&
              <Grid
                item
                lg={12}
                md={12}
                xs={12}
              >
                <InitativeList
                  className={classes.InitiativeYearCard}
                  initiatives={initiativeList}
                  selectedYear={selectedYear}
                />
              </Grid>
            }
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default InitiativeListView;
