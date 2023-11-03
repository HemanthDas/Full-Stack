import { createContext, useState } from "react";
import PropType from "prop-types";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropType.node,
};
export default AuthProvider;
