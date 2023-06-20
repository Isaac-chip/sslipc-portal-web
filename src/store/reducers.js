const initialState = {
    _Form: {},
  };
  
  function FormReducer(state = initialState, action) {
    const type = action.type
    const payload = action.payload

    switch (type) {
      case 'INCREMENT':
        return {
          ...state,
          _Form:{...state._Form, ...payload}
        };
     
      default:
        return state;
    }
  }
  
  export default FormReducer;
  