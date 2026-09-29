import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import roles from "../config/roles";
import "./components.css";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    permission: "dashboard",
  },
  {
    name: "Users",
    path: "/users",
    permission: "users",
  },
  {
    name: "Team",
    path: "/team",
    permission: "team",
  },
  {
    name: "Reports",
    path: "/reports",
    permission: "reports",
  },
  {
    name: "Settings",
    path: "/settings",
    permission: "settings",
  },
  {
    name: "Profile",
    path: "/profile",
    permission: "profile",
  },
];

const Navbar = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const permissions = roles[role] || [];

  const allowedMenus = menuItems.filter((item) =>
    permissions.includes(item.permission)
  );

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar">

      <h2>Company Portal</h2>

      <div className="nav-links">

        {allowedMenus.map((item) => (
          <Link
            key={item.permission}
            to={item.path}
          >
            {item.name}
          </Link>
        ))}

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
};

export default Navbar;