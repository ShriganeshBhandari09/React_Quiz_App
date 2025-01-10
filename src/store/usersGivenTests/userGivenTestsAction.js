export const fetchUsersGivenTestsRequest = () => ({
  type: "FETCH_USER_GIVEN_TEST_REQUEST",
});
export const fetchUsersGivenTestsSuccess = (usersGivenTests) => ({
  type: "FETCH_USER_GIVEN_TEST_SUCCESS",
  payload: usersGivenTests,
});
export const fetchUsersGivenTestsError = (error) => ({
  type: "FETCH_USER_GIVEN_TEST_ERROR",
  payload: error,
});

export const addUserTestRequest = (userTest) => ({
  type: "ADD_USER_TEST_REQUEST",
  payload: userTest,
});
export const addUserTestSuccess = (userTest) => ({
  type: "ADD_USER_TEST_SUCCESS",
  payload: userTest,
});
export const addUserError = (error) => ({
  type: "ADD_USER_TEST_ERROR",
  payload: error,
});


export const updateUserTestRequest = (userTest) => ({
  type: "UPDATE_USER_TEST_REQUEST",
  payload: userTest,
});
export const updateUserTestSuccess = (userTest) => ({
  type: "UPDATE_USER_TEST_SUCCESS",
  payload: userTest,
});
export const updateUserError = (error) => ({
  type: "UPDATE_USER_TEST_ERROR",
  payload: error,
});


