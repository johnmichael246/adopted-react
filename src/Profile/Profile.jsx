
import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
// import './Profile.css';

class Profile extends Component {
  render() {
    const { user } = this.props;
    let profile = !!user ? (
      <div className="container">
        <div className="profile-area">
          <h1>{user.name}</h1>
          <Panel header="Profile">
            <img src={user.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{user.nickname}</h3>
            </div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    ) : (
      <div>loading...</div>
    )
    return profile
  }
}

export default Profile;