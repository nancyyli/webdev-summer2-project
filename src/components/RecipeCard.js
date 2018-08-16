import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import { Card, CardHeader, Avatar, IconButton, CardMedia, Typography, CardContent, CardActions, Collapse, Button } from '@material-ui/core';
import { MoreVert, FavoriteIcon, ShareIcon, ExpandMoreIcon } from '@material-ui/icons';

const styles = {
  cardMedia: {
    width: 'auto',
    height: 'auto',
  }
};

const RecipeCard = ({ }) => {
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
          <CardActions>
            <Button />

          </CardActions>
          <Collapse timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div className='col'>
        &nbsp;
    </div>
    </div>
  );
};

export default withRouter(RecipeCard);