import { Button } from 'antd'
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
class backlog extends PureComponent {
  render() {
    return (
      <div>
        <Button onClick={() => {
          this.props.history.push('/index/backlog/details/12')
        }}>待办详情</Button>
      </div>
    )
  }
}

export default backlog
