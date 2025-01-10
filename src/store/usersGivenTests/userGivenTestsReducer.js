const initialState = {
  usersGivenTests: [],
};

const userGivenTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_GIVEN_TEST_SUCCESS":
      return { ...state, usersGivenTests: action.payload };

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
          user.email === action.payload.email ? action.payload : user
        ),
      };

    default:
      return state;
  }
};

export default userGivenTestReducer;
