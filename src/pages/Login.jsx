import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [selectedRole, setSelectedRole] = useState("user");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    login(selectedRole);
    navigate("/dashboard");
  };
  return (
    <div className="login-page">
      <div className="login-brand-section">
        <div className="login-brand-content">
          <div className="login-logo">
            <span>CP</span>
            <h2>Company Portal</h2>
          </div>
          <div className="login-tagline">
            <span className="tagline-small">WELCOME TO YOUR WORKSPACE</span>
            <h1>
              Manage.
              <br />
              <span>Collaborate.</span>
              <br />
              Grow.
            </h1>
            <p>
              A smarter way to manage your team, users, reports and everyday
              business activities.
            </p>
          </div>

          <div className="login-features">
            <div className="login-feature">
              <span>
                <i className="bi bi-check-lg"></i>
              </span>
              <p>Role-based access</p>
            </div>

            <div className="login-feature">
              <span>
                <i className="bi bi-check-lg"></i>
              </span>
              <p>Smart team management</p>
            </div>

            <div className="login-feature">
              <span>
                <i className="bi bi-check-lg"></i>
              </span>
              <p>Powerful analytics</p>
            </div>
          </div>
        </div>
        <div className="floating-circle circle-one"></div>
        <div className="floating-circle circle-two"></div>
        <div className="floating-card floating-card-one">
          <span>
            <i className="bi bi-bar-chart-fill"></i>
          </span>
          <div>
            <strong>Analytics</strong>
            <small>Track performance</small>
          </div>
        </div>
        <div className="floating-card floating-card-two">
          <span>
            <i className="bi bi-people-fill"></i>
          </span>
          <div>
            <strong>Team</strong>
            <small>Work together</small>
          </div>
        </div>
      </div>
      <div className="login-form-section">
        <div className="login-box">
          <div className="login-mobile-logo">
            <div>CP</div>
            <h2>Company Portal</h2>
          </div>
          <div className="login-heading">
            <span className="login-welcome">
              WELCOME BACK <i className="bi bi-hand-wave-fill"></i>
            </span>
            <h1>Sign in to your account</h1>
            <p>Select your role to continue to the dashboard.</p>
          </div>
          <div className="login-form">
            <label>Select your role</label>
            <div className="role-select-wrapper">
              <span className="role-icon">
                <i className="bi bi-shield-lock-fill"></i>
              </span>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="selected-role-info">
              <div className="selected-role-icon">
                {selectedRole === "admin" ? (
                  <i className="bi bi-person-badge-fill"></i>
                ) : selectedRole === "manager" ? (
                  <i className="bi bi-briefcase-fill"></i>
                ) : (
                  <i className="bi bi-person-fill"></i>
                )}
              </div>
              <div>
                <strong>
                  {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                </strong>

                <p>
                  {selectedRole === "admin"
                    ? "Full system access"
                    : selectedRole === "manager"
                      ? "Team & report access"
                      : "Basic dashboard access"}
                </p>
              </div>
            </div>

            <button className="login-button" onClick={handleLogin}>
              Continue to Dashboard
              <span>
                <i className="bi bi-arrow-right"></i>
              </span>
            </button>
          </div>

          <div className="login-footer">
            <span>
              <i className="bi bi-shield-lock-fill"></i>
            </span>
            Secure role-based access
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
