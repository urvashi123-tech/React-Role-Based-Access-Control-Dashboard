import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import roles from "../config/roles";

const ProtectedRoute = ({ permission, children }) => {
  const { role, loading } = useAuth();

  if (loading) {
    return <h2>Checking access...</h2>;
  }

  if (!role) {
    return <Navigate to="/" replace />;
  }

  const userPermissions = roles[role] || [];

  if (!userPermissions.includes(permission)) {
    return <Navigate to="/access-denied" replace />;
  }

  return children;
};

export default ProtectedRoute;