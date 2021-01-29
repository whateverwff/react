import App from '../App'
import login from '../views/login'
import backlog from '../views/mainView/backlog'
import backlogDetails from '../views/mainView/details/backlogDetails'
import home from '../views/mainView/home'
import inform from '../views/mainView/inform'
import notice from '../views/mainView/notice'
import salefk from '../views/sale/salelist/salefk'
import saletd from '../views/sale/salelist/saletd'
import poxunjia from '../views/po/poxunjia';


export const mainRouter = [
  //   {
  //   pathname: '/',
  //   component: App
  // }, 
  {
    pathname: '/login',
    component: login
  }]

export const pageRouter = [{
  pathname: '/index/home',
  component: home
}, {
  pathname: '/index/backlog',
  component: backlog,
  exact: true
}, {
  pathname: '/index/backlog/details/:id',
  component: backlogDetails,
  onEnter: function (nextState, replaceState) {
    replaceState(null, '/backlogdetail/' + nextState.params.id)
  }
}, {
  pathname: '/index/notice',
  component: notice
}, {
  pathname: '/index/inform',
  component: inform
}, {
  pathname: "/sale/salefk",
  component: salefk
}, {
  pathname: "/sale/saletd",
  component: saletd
}, {
  pathname: "/po/poxunjia",
  component: poxunjia
}]

export const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: { component: home },
    childRoutes: [
      { path: 'inform', component: inform },
      {
        path: 'backlog',
        component: backlog,
        childRoutes: [
          { path: '/backlogdetail/:id', component: backlogDetails },
          {
            path: 'backlogdetail/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/backlogdetail/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]