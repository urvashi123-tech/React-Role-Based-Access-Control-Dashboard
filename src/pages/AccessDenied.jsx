import { useNavigate } from "react-router-dom";
import "./AccessDenied.css";
const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <div className="access-denied">
      <h1>
        <i className="bi bi-ban access-denied-icon"></i>
        Access Denied
      </h1>
      <p>You don't have permission to access this page.</p>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </div>
  );
};
export default AccessDenied;
