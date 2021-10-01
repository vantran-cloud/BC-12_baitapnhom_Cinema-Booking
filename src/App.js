import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes } from 'routes';
import ClientLayout from 'layouts/ClientLayout';
import Login from 'containers/shared/Auth/Login/Login';
import Register from 'containers/shared/Auth/Register/Register';

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map(route => {
      const { path, component, exact, isPrivate } = route;
      return (
        <Layout 
          path={path} 
          exact={exact} 
          component={component} 
          isPrivate={isPrivate}
        />
      );
    });
  };
  return (   
    <div className="App">
      <Router>
        <Switch>
          {renderLayout(clientRoutes, ClientLayout)}
          {/* {renderLayout(adminRoutes, AdminLayout)} */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
