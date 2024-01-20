import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";
import AdminPage from "pages/AdminPage";

// Define your routes with roles
export const routes = [
  { path: "/", component: <Home />, exact: true, roles: ["user", "admin"] },
  { path: "/about", component: <About />, roles: ["user", "admin"] },
  { path: "/contact", component: <Contact />, roles: ["user", "admin"] },
  { path: "/admin", component: <AdminPage />, roles: ["admin"] },
];
