import React, { Component } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Auth from './Auth/Auth'
import Callback from './Callback/Callback'
import Profile from './Profile/Profile'
import SearchResults from './SearchResults/SearchResults'
import ProtectedRoute from './ProtectedRoute'
import { read } from 'fs';
import Pet from './entities/Pet'


const auth = new Auth()

const handleAuthentication = ({location, history}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication(history)
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      pets: [],
      lastOffset: '0'
    }
  }

  componentDidMount() {
    if(auth.isAuthenticated()) {
      try {
        this.getProfile(this.state.user)
      } catch(err) {
        console.log(err)
      }
    }
  }

  handlePetfinderRequest = async (data) => {
    let response = await fetch('api/petfinder', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    })
    response = await response.json()
    let pets = response.pets.pet.map(data => new Pet(data))
    this.props.history.push('/search')
    this.setState({
      pets,
      lastOffset: response.lastOffset.$t
    })
    return 
  }

  goTo = (route) => {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    auth.login()
  }

  logout = () => {
    auth.logout(this.props.history)
    this.setState({user: null}, () => this.props.history.replace('/'))
  }

  getProfile = (user) => {
    if (!user) {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access Token must exist to fetch profile');
      }
      auth.getProfile((err, profile) => {
        if(err) {
          console.log(err)
        } else {
          this.setState({ user: profile._id })
        }
      })
    }
  }

  render() {
    const isAuthenticated = auth.isAuthenticated()
    const { user } = this.state 
    return (
      <div>
        <NavBar
        login={this.login}
        logout={this.logout}
        goTo={this.goTo}
        isAuthenticated={isAuthenticated}/>
        <div className='content'>
          <Switch>
            <Route exact path= '/' render={(props) => (
              <Home
              auth={auth}
              handlePetfinderRequest={this.handlePetfinderRequest}
              {...props}/>
            )} />
            <Route path= '/search' render={(props) => (
              <SearchResults
              auth={auth}
              pets={this.state.pets}
              {...props}/>
            )} />
            <ProtectedRoute path='/profile' component={Profile} user={user} auth={auth}/>
            <Route path="/callback" render={(props) => {
              handleAuthentication(props)
              return <Callback auth={auth}{...props} /> 
            }}/>
            <Route render={() => (<div> Sorry, that page doent exist </div>)}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
