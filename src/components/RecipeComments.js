import React from 'react';

import { Typography, Card, CardContent, CardActions, TextField, Button }
    from '@material-ui/core';

class RecipeComments extends React.Component {
  constructor (props) {
    super(props);
    this.state = { comment: "" };
  }

  doSubmit = () => {
    if (this.state.comment !== "") {
      this.props.onComment({ text: this.state.comment });
      this.setState({ comment: "" });
    }
  }

  render () {
    if (!this.props.comments) {
      return null;
    }
    return (
      <div className="container-fluid">
        <div className='mt-4 row'>
          <Typography varient='display3'>Comments</Typography>
        </div>
        {this.props.currentUser.role === 'CRITIC' || this.props.currentUser.role === 'ADMIN' ?
          <Card className='row mt-4'>
            <CardContent style={{width: '100%'}}>
              <Typography>Add Comment</Typography>
              <div>
                <TextField name="comment"
                id="comment"
                label="Add Comment"
                value={this.state.comment}
                onChange={(ev) => this.setState({ comment: ev.target.value })}
                fullWidth={true} />
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={this.doSubmit}>Submit</Button>
            </CardActions>
          </Card>
          : null}
        <Card className="row">

        </Card>
        {this.props.comments.map(comment => {
          return (
            <Card className="row mt-4">
              <CardContent>
                <Typography color="textSecondary">
                  {comment.author.name}
                </Typography>
                <Typography className='mt-3'>
                  {comment.text}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default RecipeComments;
