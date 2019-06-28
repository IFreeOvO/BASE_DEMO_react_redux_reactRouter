function user(state = '张三', action) {
  switch (action.type) {
    case 'set':
      return action.name
    default:
      return state
  }
}

export default user