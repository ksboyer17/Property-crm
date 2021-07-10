import React, { useContext, useReducer } from "react";

const DashboardContext = React.createContext();
const { Provider } = DashboardContext;

const types = {
  SET_PROPERTY: "SET_PROPERTY",
  SET_UNIT: "SET_UNIT",
};

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case types.SET_PROPERTY:
      return {
        ...state,
        property: action.payload,
      };
    default:
      return { ...state };
  }
};

const initialState = {
  property: null,
  unit: null,
};

const DashboardProvider = ({ value = initialState, ...props }) => {
  const [state, dispatch] = useReducer(dashboardReducer, value);

  const setProperty = (property) => {
    dispatch({ type: types.SET_PROPERTY, payload: property });
  };

  const providerValue = {
    ...state,
    setProperty,
  };

  return <Provider value={providerValue} {...props} />;
};

const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export { DashboardProvider, useDashboardContext };
