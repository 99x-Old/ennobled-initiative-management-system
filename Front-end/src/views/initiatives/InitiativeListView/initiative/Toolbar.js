import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  makeStyles
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, initiatives, setSelectedYear, ...rest }) => {
  const classes = useStyles();
  const initiativeYearSelectionChange = (e, values) => {
    setSelectedYear(values.year);
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          color="primary"
          variant="contained"
        >
          Add Initiative Year
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box
              maxWidth={500}
              display="flex"
              justifyContent="space-evenly"
            >
              <Autocomplete
                id="combo-box-demo"
                options={initiatives}
                getOptionLabel={(option) => option.year}
                style={{ width: 300 }}
                onChange={(e, v) => initiativeYearSelectionChange(e, v)}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
              />
              <Button
                color="primary"
                variant="contained"

              >
                Add Initiative
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  initiatives: PropTypes.array.isRequired,
  setSelectedYear: PropTypes.func
};

export default Toolbar;
