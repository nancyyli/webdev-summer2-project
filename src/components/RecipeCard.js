import React from 'react';
import RecipeDetailLayout from '../containers/RecipeDetailLayout';

import { Link, withRouter } from 'react-router-dom';

import { Card, CardHeader, Avatar, IconButton, CardMedia, Typography, CardContent, CardActions, Collapse, Button } from '@material-ui/core';
import { MoreVert, FavoriteIcon, ShareIcon, ExpandMoreIcon } from '@material-ui/icons';


const styles = {
  cardMedia: {
    width: '600px',
    height: '60% !important',
  },
  button: {
    outline: 'none',
  }
};

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false,
      scroll: 'paper',
    };
  }

  handleClickOpen(scroll) {
    console.log('click open');
    this.setState({
      open: true, scroll
    });
  };

  handleClose() {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div className='row mt-3 bg-light pt-5 pb-5 mr-1 ml-1 rounded'>
        <div className='col'>
          &nbsp;
    </div>
        <div className='col-8'>
          <Card >
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" >
                  EH
              </Avatar>
              }
              action={
                <IconButton>
                  <MoreVert />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="August 16, 2018"
            />
            <CardMedia
              style={styles.cardMedia}
              component="img"
              src="https://res.cloudinary.com/hksqkdlah/image/upload/s--l2y15uPK--/c_scale,f_auto,h_688,q_jpegmini:2,w_688/24617_sfs-paella-for-two-10"
            />
            <CardContent>
              <Typography component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
            </CardContent>
            <Link to={'/profile/recipes/:recipeId'} style={styles.link}>
              <Button className="float-right" onClick={() => this.handleClickOpen()} >
                More...
            </Button>
            </Link>
          </Card>
        </div>
        <div className='col'>
          &nbsp;
    </div>
        <RecipeDetailLayout
          open={this.state.open}
          close={this.handleClose}
          scroll={this.state.scroll} />
      </div>
    );
  }
};

export default withRouter(RecipeCard);