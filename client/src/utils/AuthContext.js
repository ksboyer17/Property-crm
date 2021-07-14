import React, { useContext, useEffect, useReducer } from "react";
import API from "../utils/API";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return { ...state };
  }
};

const AuthProvider = ({ value = { user: null }, ...props }) => {
  const [state, dispatch] = useReducer(authReducer, value);

  const login = (user) => {
    dispatch({ type: types.LOGIN, payload: user });
  };

  const logout = () => {
    dispatch({ type: types.LOGOUT });
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await API.checkAuth();
        login(response.data);
      } catch (err) {
        return;
      }
    })();
  }, []);

  const providerValue = {
    ...state,
    login,
    logout,
  };

  return <Provider value={providerValue} {...props} />;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
