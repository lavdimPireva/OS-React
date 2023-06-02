import { useEffect, useState } from "react";
import { AuthContext, AuthContextField, UserFields } from "./AuthContext";

interface Props {
  children: JSX.Element;
}

export const AuthContextProvider = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserFields | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const storageValue = localStorage.getItem("authenticated");

      try {
        if (!storageValue || storageValue === "false") {
          return;
        }

        setUser({
          email: "borgoth@mordos.com",
          name: "Borgoth",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    void checkAuthentication();
  }, []);

  const handleLogin = () => {
    localStorage.setItem("authenticated", "true");

    setUser({
      email: "borgoth@mordos.com",
      name: "Borgoth",
    });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const context: AuthContextField = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
    isAuthenticated: user !== null,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
