const initialState = {
  loading: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USER_SUCCESS":
      return { ...state, users: action.payload, loading: false };
    case "ADD_USER_REQUEST":
      return { ...state, loading: true };
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
