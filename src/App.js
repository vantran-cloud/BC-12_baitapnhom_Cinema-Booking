import About from 'containers/client/About/About';
import Home from 'containers/client/Home/Home';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';
import SeatPlan from 'containers/client/SeatPlan/SeatPlan';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (   
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/moviedetail" component={MovieDetail} />
          <Route path="/seatplan" component={SeatPlan} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
