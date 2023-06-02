import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext/AuthContextProvider";
import "./styles/index.css";
import { WindowContextProvider } from "@context/WindowContext/WindowContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <WindowContextProvider>
          <App />
        </WindowContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")!
);
