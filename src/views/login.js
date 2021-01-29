import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (store) => {
  return { title: store.main_reducer.title }
}

@connect(mapStateToProps)
@withRouter
class login extends PureComponent {
  constructor(props) {
    super()
  }
  componentWillMount(){} //在渲染前调用，在客户端同时服务端
  componentDidMount(){} // 在第一次渲染后调用，只在客户端
  componentWillReceiveProps(){} //在组件接收到一个新的prop（更新后）时被调用。初始化render时不会被调用
  shouldComponentUpdate(){} // 返回一个布尔值。组件接收到新的道具或状态时被调用。初始化或使用forceUpdate时不被调用。
  componentWillUpdate(){} // 在组件接收到新的道具或状态但还没有渲染时被调用。初始化时不被调用
  componentDidUpdate(){} // 在组件完成更新后立即调用。初始化时不被调用
  componentWillUnmount(){} // 在组件从DOM中删除之前被调用
  render() {
    return (
      <div>
        登录{this.props.title}
        <div onClick={() => {
          this.props.history.goBack()
        }}>返回</div>
      </div>
    )
  }
}

export default login
