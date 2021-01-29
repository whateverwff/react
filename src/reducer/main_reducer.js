const initState = {
  title: '测试'
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, actions = {}) => {
  switch (actions.type) {
    case 'title':
      Object.assign(state, {
        title: actions.payload.title
      })
      break
    default:
      break
  }
  return state
}