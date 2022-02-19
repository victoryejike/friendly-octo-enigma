import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import UserPage from './containers/UserPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userId" component={UserPage} />
          <Route>404 Not Found!</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
