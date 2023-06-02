import "./App.css";
import { useAuthContext } from "./context/AuthContext/AuthContext";
import { Login } from "./pages/Login";
import { MainScreen } from "./pages/MainScreen/MainScreen";

function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="w-full flex bg-gradient-to-b h-screen from-primary to-secondary">
      {!isAuthenticated ? <Login /> : <MainScreen />}
    </div>
  );
}

export default App;
