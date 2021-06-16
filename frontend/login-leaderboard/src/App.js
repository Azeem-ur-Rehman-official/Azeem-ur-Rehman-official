import React from 'react';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/signup" component={Signup} />
          <Route
            exact
            path="/users/leaderboard"
            component={() => <Leaderboard authorized={true} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
