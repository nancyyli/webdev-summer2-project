import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';

export default() => {
  return (<div>
    <Grid justify="center">
      <Grid alignItems="center">
        <Typography variant='display3' >
          Hi there, welcome to kooker!
        </Typography>

        <Typography variant='body1'>
          Hi there, welcome to kooker!
        </Typography>
        <Typography variant='display3' >
          Hi there, welcome to kooker!
        </Typography>
        </Grid>
      </Grid>
    </div>
    );
};
