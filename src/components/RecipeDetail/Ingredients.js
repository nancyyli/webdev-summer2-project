import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, Typography } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const styles = {
    tomato: {
        color: '#f04d22'
    },
    grey: {
        color: '#c0c5c6'
    },
}

class Ingredients extends React.Component {
    state = {
        checked: [0],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
            return (
                <div>
                    <Typography variant="headline">
                        Ingredients:
                                    </Typography>
                    <List>
                        {this.props.ingredients && this.props.ingredients.map(value => (
                            <ListItem
                            key={value.ingredient}
                            role={undefined}
                            dense
                            button
                            onClick={this.handleToggle(value)}
                    
                        >
                            <Checkbox
                                checked={this.state.checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                style={styles.tomato}
                            />
                            <ListItemText primary={value.quantity + ' ' + value.modifier + ' ' + value.ingredient} secondary/>
                        </ListItem>
                        ))}
                    </List>
                </div>
            );
    }
}

export default Ingredients;
