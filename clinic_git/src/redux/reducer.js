const initialState = {
  users: null,
  appointments: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        users: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        users: action.payload,
      };
    case 'APPOINTMENT':
      return {
        ...state,
        appointments: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
