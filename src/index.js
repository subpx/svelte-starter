import stateRouter from './services/router';
import auth from './services/auth';
import Dashboard from './components/Dashboard/Dashboard.html';
import Login from './components/Login/Login.html';
import Contact from './components/Contact/Contact.html';
import Nothing from './components/Dashboard/Nothing.html';

stateRouter.addState({
  name: 'login',
  route: '/login',
  template: Login,
  resolve(data, parameters, callback) {
    auth.clear();
    callback();
  },
});

stateRouter.addState({
  name: 'contact',
  route: '/contact',
  template: Contact,
});

stateRouter.addState({
  name: 'dashboard',
  route: '/dashboard',
  template: Dashboard,
  resolve(data, parameters, callback) {
    if (auth.getToken()) {
      callback();
    } else {
      callback.redirect('login');
    }
  },
});

stateRouter.addState({
  name: 'dashboard.nested',
  route: '/nested',
  template: Nothing,
});

stateRouter.on('routeNotFound', (route, parameters) => {
  console.log('routeNotFound', route, parameters);
});

stateRouter.on('stateChangeStart', (route, parameters) => {
  console.log('stateChangeStart', route, parameters);
});

stateRouter.on('stateChangeEnd', (route, parameters) => {
  console.log('stateChangeEnd', route, parameters);
});

stateRouter.on('stateError', (route, parameters) => {
  console.log('stateError', route, parameters);
});

stateRouter.evaluateCurrentRoute('login');
