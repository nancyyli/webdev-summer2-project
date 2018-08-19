import React from 'react';
import RecipeDetailLayout from '../containers/RecipeDetailLayout';

import { Link, Route, withRouter } from 'react-router-dom';
import format from 'date-fns/format';
import { Card, CardHeader, Avatar, IconButton, CardMedia, Typography, CardContent, CardActions, Collapse, Button } from '@material-ui/core';
import { MoreVert, FavoriteIcon, ShareIcon, ExpandMoreIcon } from '@material-ui/icons';


const styles = {
  img: {
      width: 'calc(100%/4)',
  },
  cardMedia: {
    width: '100%',
    height: '15vw',
    objectFit: 'cover',
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

  componentWillReceiveProps(newProps) {
    this.props = newProps;
    console.log(this.props);
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
      <div className='row mt-2 bg-light pt-5 pb-5 mr-1 ml-1 rounded'>
        <div className='col'>
          &nbsp;
    </div>
        <div className='col-8'>
          <Card >
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" >
                  {this.props.recipe.author.name || ''}
              </Avatar>
              }
              action={
                <IconButton>
                  <MoreVert />
                </IconButton>
              }
              title={this.props.recipe.title || ''}
              subheader= {format(new Date(this.props.recipe.created), "MMM D, YYYY")}
            />
            <CardMedia
              style={styles.cardMedia}
              component="img"
              src={this.props.recipe.image}            
            />
            <CardContent>
              <Typography component="p">
              {this.props.recipe.description}
            </Typography>
            </CardContent>
            <Link to={`/profile/recipes/${this.props.recipe.id}`}>
              <Button className="float-right" onClick={() => this.handleClickOpen()} style={styles.button}>
                More...
            </Button>
            </Link>
          </Card>
        </div>
        <div className='col'>
          &nbsp;
          </div>
      </div>
    );
  }
};

export default withRouter(RecipeCard);