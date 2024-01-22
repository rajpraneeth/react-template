// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { routes } from "./routes";

// Your components
import Header from "components/Header";
import Footer from "components/Footer";
import NotFound from "components/NotFound";
import Sidebar from "components/Sidebar";
import Login from "pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <BrowserRouter>
        {user.authenticated && <Header />}
        <div style={{ height: "90%", display:'flex', gap:'20px' }}>
          {user.authenticated && <Sidebar />}
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
        <ToastContainer position="bottom-right" />
        {user.authenticated && <Footer />}
      </BrowserRouter>
    </>
  );
};

export default App;
