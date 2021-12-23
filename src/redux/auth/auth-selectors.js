const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = (state) => state.auth.isFetchingCurrentUser;
const getError = (state) => state.auth.error;

const getUserName = (state) => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser,
  getError,
};

export default authSelectors;
