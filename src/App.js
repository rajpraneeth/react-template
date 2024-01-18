// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import { useAuth } from "./AuthContext";

// Your components
import Login from "./components/Login";
import { routes } from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <BrowserRouter>
        {user.authenticated && <Header />}
        <div style={{ height: "90%" }}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                element={
                  user.authenticated && route.roles.includes(user.role) ? (
                    route.component
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            ))}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {user.authenticated && <Footer />}
      </BrowserRouter>
    </>
  );
};

export default App;
