import React, { Component } from 'react';
import BountyLink from '../components/BountyLink';

class Home extends Component {

    render() {

      const bountyLinks = this.props.bounties.map((bounty, index) => {
        return <BountyLink key={index} name={bounty.name} bountyId={bounty._id}/>
      })

    return(
      <div>
        <h2>Home Page</h2>
        <div>
          <ul>
            {bountyLinks}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home;