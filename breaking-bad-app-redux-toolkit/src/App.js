import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
