import React, { PureComponent, useContext } from 'react'

import { Button } from 'antd'

import { testApi } from '../../api'
import { Link, withRouter } from 'react-router-dom'
import TodoList from '../../commponts/todoList/index'

import { connect } from 'react-redux'
import { setTitle } from "../../actions/main_actions";

@withRouter
@connect((state) => ({}), { setTitle })
class home extends PureComponent {
  // propType: {
  //   title: React.PropTypes.string.isRequired
  // }
  constructor(props) {
    super()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { title } = useContext()
  }

  windowAlert() {
    console.log(testApi())
    this.props.setTitle('这是一条测试信息')
    // this.props.history.push('/login')
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <Button type="primary" onClick={this.windowAlert.bind(this)}>测试按钮</Button>
            <Link to="/login">去登录{this.title}</Link>
          </header>
          <div>
            {[1, 2].map(item => {
              return (<TodoList msg={item} key={item}></TodoList>)
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default home
