const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("successfuly logged in!");
      return {
        ...state,
        authError: null
      };

    case "LOGIN_ERROR":
      console.log("login failed. Please try again");
      return {
        ...state,
        authError: "Login failed"
      };

    case "LOGOUT_SUCCESS":
      console.log("Logged out successfuly");
      return state;

    case "LOGOUT_ERROR":
      console.log("Logout error ");
      return {
        ...state,
        authError: "Logout failed"
      };

    default:
      return state;
  }
};

export default authReducer;
