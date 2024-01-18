import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import AdminPage from "../components/AdminPage";

// Define your routes with roles
export const routes = [
  { path: "/", component: <Home />, exact: true, roles: ["user", "admin"] },
  { path: "/about", component: <About />, roles: ["user", "admin"] },
  { path: "/contact", component: <Contact />, roles: ["user", "admin"] },
  { path: "/admin", component: <AdminPage />, roles: ["admin"] },
];
