import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography }
    from '@material-ui/core';

import { Alarm, Email, Contacts, Subject, SettingsSharp } from '@material-ui/icons';


class RecipeDetailLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={() => this.props.close()}
                scroll={this.props.scroll}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle id="scroll-dialog-title">Paella</DialogTitle>
                <DialogContent>
                        <img  src="https://res.cloudinary.com/hksqkdlah/image/upload/s--l2y15uPK--/c_scale,f_auto,h_688,q_jpegmini:2,w_688/24617_sfs-paella-for-two-10"/>
                    <DialogContentText>
                        <Typography paragraph variant="title">
                            Method:
              </Typography>
                        <Typography paragraph variant="body">
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
              </Typography>
                        <Typography paragraph variant="body">
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
                        <Typography paragraph variant="body">
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                            cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                            Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                            the rice, and cook again without stirring, until mussels have opened and rice is
                            just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
                        <Typography variant="body">
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.close()}>
                        Cancel
          </Button>
                    <Button onClick={() => this.props.close()}>
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
RecipeDetailLayout.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
    scroll: PropTypes.string

};

export default withRouter(RecipeDetailLayout);
