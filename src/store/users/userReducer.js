const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return { ...state, users: action.payload };
    case "ADD_USER_SUCCESS":
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default userReducer;
