import React, { Component } from 'react';
import BountyLink from '../components/BountyLink';

class Home extends Component {
  render() {
    return(
      <div>
        <h2>Home Page</h2>
        <div>
          <BountyLink name={'Yosemite Sam'} bountyId={'asdf1234'} />
        </div>
      </div>
    )
  }
}
export default Home;