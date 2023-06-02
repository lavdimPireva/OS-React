import React, { useContext } from "react";

export interface AuthContextField {
  user: UserFields | null;
  onLogout: () => void;
  onLogin: () => void;
  isAuthenticated: boolean;
}

export interface UserFields {
  name: string;
  email: string;
}

export const AuthContext = React.createContext<AuthContextField>({
  user: null,
  onLogin: () => {},
  onLogout: () => {},
  isAuthenticated: false,
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
