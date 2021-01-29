import react from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Frames from "./commponts/Frames/index";
import { pageRouter } from './Router';
class App extends react.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <Frames>
          <Switch>
            {
              pageRouter.map(item => {
                return (<Route path={item.pathname} exact={item.exact} key={item.pathname} component={item.component} />)
              })
            }
            {/* <Route path='/index/home' component={home}></Route>
            <Route path='/index/backlog' exact component={backlog}></Route>
            <Route path='/index/backlog/details' component={backlogDetails}></Route>
            <Route path='/index/notice' component={notice}></Route>
            <Route path='/index/inform' component={inform}></Route> */}
          </Switch>
        </Frames>
      </div>
    )
  }
}
// <Redirect to='/login'></Redirect>
//  {/* <Switch>
//           */}
//           {/* {
//             pageRouter.map(item => {
//               return (<Route path={item.pathname} key={item.pathname} component={item.component} />)
//             })
//           }
//           <Redirect from='/' to='index/home'></Redirect> */}
//     {/* </Switch> */ }

export default App;
