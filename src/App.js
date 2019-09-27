import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import Header from './pages/header';
import Tutors from './pages/tutorlist';

export default class App extends React.Component {
  render() {
    const App = () => (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/tutorlist' component={Tutors}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}
