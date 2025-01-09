export const fetchUsersRequest = () => ({ type: "FETCH_USER_REQUEST" });
export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USER_SUCCESS",
  payload: users,
});
export const fetchUsersError = (error) => ({
  type: "FETCH_USER_ERROR",
  payload: error,
});

export const addUserRequest = (user) => ({
  type: "ADD_USER_REQUEST",
  payload: user,
});
export const addUserSuccess = (user) => ({
  type: "ADD_USER_SUCCESS",
  payload: user,
});
export const addUserError = (error) => ({
  type: "ADD_USER_ERROR",
  payload: error,
});
