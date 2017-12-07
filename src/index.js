import stateRouter from './services/router';
import auth from './services/auth';
import Dashboard from './components/Dashboard/Dashboard.html';
import Login from './components/Login/Login.html';
import Grid from './components/Grid/Grid.html';
import Draggable from './components/Draggable/Draggable.html';
import Sortable from './components/Sortable/Sortable.html';
import Nothing from './components/Dashboard/Nothing.html';
import Form from './components/Form/Form.html';

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
  name: 'grid',
  route: '/grid',
  template: Grid
});

stateRouter.addState({
  name: 'sortable',
  route: '/sortable',
  template: Sortable
});

stateRouter.addState({
  name: 'draggable',
  route: '/draggable',
  template: Draggable
});

stateRouter.addState({
  name: 'form',
  route: '/form',
  template: Form
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
  template: Nothing
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
