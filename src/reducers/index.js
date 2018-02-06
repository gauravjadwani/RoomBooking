let INITIAL_STATE={
  'isloading':true
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}
