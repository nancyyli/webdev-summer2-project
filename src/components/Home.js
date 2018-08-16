import React from 'react';
import Typography from '@material-ui/core/Typography';


const styles = {
  col: {
    height: '250px',
  }
};

class Home extends React.Component {


  render() {
    return (
      <div className='bg-light h-85'>
      <div className='row' style={styles.col}>
        <div className='col'>
          &nbsp;
        </div>
      </div>
      <div className='row-fluid'>
        <div className='col'>
          &nbsp;
        </div>
        <div className='col d-flex justify-content-center align-self-center'>
          <Typography variant="display4">kooker</Typography>
          <Typography variant="subheading">Where chefs talk.</Typography>
        </div>
        <div className='col'>
          &nbsp;
        </div>
      </div>
    </div>

  );

  }
}

export default Home;
