import React from 'react';
import ReactDOM from 'react-dom';
import { mainRouter, routeConfig, pageRouter } from './Router/index.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
// import {
//   IndexRoute
// } from 'react-router'
import { Provider } from 'react-redux'
import store from './store.js'

import './App.css';
import App from './App.js';
import login from './views/login';
import home from './views/mainView/home.js';
import { noFindPage } from './views/mainView/404';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/index' component={App}></Route>
        <Route path='/sale' component={App}></Route>
        <Route path='/po' component={App}></Route>
        <Route path='/login' exact component={login}></Route>
        <Redirect to='/index' from='*' />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


// <Route path='/' component={App}>
//       {/* <Route path='index/home' component={home}></Route> */}
//       {/* <IndexRoute path='/index/home' component={home}></IndexRoute> */}
//       {
//         pageRouter.map(item => {
//           return (<Route path={item.pathname} key={item.pathname} component={item.component} />)
//         })
//       }
//     </Route>
//     {/* <Route path='/login' exact component={login}></Route> */}
//     {/* {mainRouter.map(item => {
//       return (
//         <Route path={item.pathname} key={item.pathname} component={item.component} />
//       )
//     })} */}
//     {/* <Redirect to='index/home' from='/'></Redirect> */}



document.title = '捷禾云'




