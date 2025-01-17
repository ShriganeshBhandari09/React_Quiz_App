const initialState = {
  usersGivenTests: [],
  loading: false,
};

const userGivenTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_GIVEN_TEST_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USER_GIVEN_TEST_SUCCESS":
      return { ...state, usersGivenTests: action.payload, loading: false };

    case "ADD_USER_TEST_SUCCESS":
      return {
        ...state,
        usersGivenTests: [...state.usersGivenTests, action.payload], // Adds new test
      };

    case "UPDATE_USER_TEST_SUCCESS":
      console.log("Hello");
      return {
        ...state,
        usersGivenTests: state.usersGivenTests.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    default:
      return state;
  }
};

export default userGivenTestReducer;
