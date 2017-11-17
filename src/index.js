import stateRouter from './services/router';
import auth from './services/auth';
import Dashboard from './components/Dashboard/Dashboard.html';
import Login from './components/Login/Login.html';
import Nothing from './components/Dashboard/Nothing.html';

stateRouter.addState({
  name: 'login',
  route: '/login',
  template: Login,
  resolve: function(data, parameters, callback) {
    auth.clear();
    callback();
  },
});

stateRouter.addState({
  name: 'dashboard',
  route: '/dashboard',
  template: Dashboard,
  resolve: function(data, parameters, callback) {
    if(auth.getToken()) {
      callback();
    } else {
      callback.redirect('login');
    }
  },
});

stateRouter.addState({
  name: 'dashboard.nested',
  route: '/nested',
  template: Nothing
});

stateRouter.on('routeNotFound', function(route, parameters) {
  console.log(route + ' routeNotFound');
});

stateRouter.on('stateChangeStart', function(route, parameters) {
  console.log('stateChangeStart', route, parameters);
});

stateRouter.on('stateChangeEnd', function(route, parameters) {
  console.log('stateChangeEnd', route, parameters);
});

stateRouter.on('stateError', function(route, parameters) {
  console.log(route + ' stateError');
});

stateRouter.evaluateCurrentRoute('login');