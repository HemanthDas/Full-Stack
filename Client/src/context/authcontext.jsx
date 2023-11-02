import { createContext } from "react";
import PropType from "prop-types";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const isLogin = false;
  return (
    <AuthContext.Provider value={isLogin}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropType.node,
};
export default AuthProvider;
