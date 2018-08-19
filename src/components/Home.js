import React from 'react';
import { Typography, Avatar } from '@material-ui/core';
import RegisterForm from './RegisterForm';


const styles = {
  heroImage: {
    width: '424px',
    height: '229px',
  },
  tomato: {
    color: '#f04d22'
  },
  formMargin: {
    marginTop: '90px'
  }
};

class Home extends React.Component {

  render() {
    return (
      <div className='row'>
        <div className="col d-flex flex-column align-items-center">
          <img className="mt-3" width='424px' height='229px'
            src="https://i.imgur.com/IEgMw7W.png" />
          <Typography className="mt-5 ml-5 bg-light roudned pt-3 pl-3 pr-3 pb-3" variant="display1"><b style={styles.tomato}>Kooker</b> is the first social media platform that connects
          home cooks, verified chefs, and any foodie in an interactive and user-friendly manner.
            <br /> <br /> Our databse contains over +10,000 user-generated recipes,
                that offer a completely new outlook on food .</Typography>
        </div>
        <div className='col d-flex flex-column align-items-center' style={styles.formMargin}>
          <Typography className="mt-3" variant="display4" style={styles.tomato}>kooker</Typography>
          <Typography variant="subheading">Where chefs talk.</Typography>
          <RegisterForm />
          <Typography className="mt-4 text-secondary" variant="body2">Already have an account? Login above!</Typography>
        </div>
      </div>
    );

  }
}

export default Home;
