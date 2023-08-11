import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useContext() must be inside ThemeProvider");
  }
  return context;
};
