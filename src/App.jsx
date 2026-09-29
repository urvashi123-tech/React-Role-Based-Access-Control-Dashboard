import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Team from "./pages/Team";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import AccessDenied from "./pages/AccessDenied";
const App = () => {
  const { role, loading } = useAuth();
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <>
      {role && <Navbar />}
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute permission="dashboard">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Users */}
        <Route
          path="/users"
          element={
            <ProtectedRoute permission="users">
              <Users />
            </ProtectedRoute>
          }
        />
        {/* Team */}
        <Route
          path="/team"
          element={
            <ProtectedRoute permission="team">
              <Team />
            </ProtectedRoute>
          }
        />
        {/* Reports */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute permission="reports">
              <Reports />
            </ProtectedRoute>
          }
        />
        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute permission="settings">
              <Settings />
            </ProtectedRoute>
          }
        />
        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute permission="profile">
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Access Denied */}
        <Route path="/access-denied" element={<AccessDenied />} />
        {/* Any unknown URL */}
        <Route
          path="*"
          element={<Navigate to={role ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </>
  );
};
export default App;
