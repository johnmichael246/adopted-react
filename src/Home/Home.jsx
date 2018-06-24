import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Image
} from 'react-bootstrap'
import SearchForm from '../SearchForms/MainSearchForm'

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <Image src='http://i.imgur.com/SyueVHd.jpg' alt='welcome' rounded responsive/>
            </Col>
            <Col xs={12} md={6}>
              <p><b> Our Mission:</b><br/>
            To use Internet technology and the resources it can generate to:<br/>
            Increase public awareness of the availability of high-quality adoptable pets
            Increase the overall effectiveness of pet adoption programs across North America to the extent that the euthanasia of adoptable pets is eliminated
            Elevate the status of pets to that of family member
            From the comfort of their personal computers, pet lovers can search for a pet that best matches their needs. They can then reference a shelter’s web page and discover what services it offers. Petfinder also includes discussion forums, a pet-care resource directory and a library of free pet-care articles to help keep pets in their homes.
            </p>
            <SearchForm
            handlePetfinderRequest={this.props.handlePetfinderRequest}/>
          </Col>            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
