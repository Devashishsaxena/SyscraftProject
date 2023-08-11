import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
export function AuthProvider({ children }) {
  //logic here
  const [state, dispatch] = useReducer(authReducer, {
    token: "tetsing12w4w",
    refreshedToken: "sasa",
  });

  const updateToken = (token) => {
    dispatch({ type: "UPDATE_TOKEN", payload: token });
  };
  return (
    <AuthContext.Provider value={{ ...state, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
}
