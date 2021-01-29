import React, { PureComponent } from 'react'

export default class index extends PureComponent {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        {this.props.msg}
      </div>
    )
  }
}
