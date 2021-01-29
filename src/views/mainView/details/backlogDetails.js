import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';


@withRouter
class backlogDetails extends PureComponent {
  render() {
    return (
      <div>
        待办详情{this.props.history.query}
      </div>
    )
  }
}

export default backlogDetails
