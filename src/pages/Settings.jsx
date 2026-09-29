import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Settings.css";
const Settings = () => {
  const { darkMode, toggleDarkMode } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [saved, setSaved] = useState(false);
  const handleUpdate = () => {
    localStorage.setItem(
      "appSettings",
      JSON.stringify({
        notifications,
        emailAlerts,
        darkMode,
      }),
    );
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };
  return (
    <div className="settings-page">
      {/* HEADER */}
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your application preferences and account settings.</p>
        </div>
      </div>
      {/* SUCCESS MESSAGE */}
      {saved && (
        <div className="settings-success">
          <span>
            <i className="bi bi-check-circle"></i>
          </span>
          Settings updated successfully!
        </div>
      )}
      {/* SETTINGS CARD */}
      <div className="settings-card">
        <div className="settings-card-header">
          <div>
            <h2>Application Settings</h2>
            <p>Configure how the application behaves for you.</p>
          </div>
          <div className="settings-icon">
            <i className="bi bi-gear"></i>
          </div>
        </div>
        {/* PUSH NOTIFICATIONS */}
        <div className="settings-row">
          <div className="settings-info">
            <div className="settings-option-icon purple">
              <i className="bi bi-bell"></i>
            </div>
            <div>
              <h3>Push Notifications</h3>
              <p>Receive notifications about your activities.</p>
            </div>
          </div>
          <label className="settings-switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="settings-slider"></span>
          </label>
        </div>
        {/* EMAIL ALERTS */}
        <div className="settings-row">
          <div className="settings-info">
            <div className="settings-option-icon blue">
              <i className="bi bi-envelope"></i>
            </div>
            <div>
              <h3>Email Alerts</h3>
              <p>Receive important updates through email.</p>
            </div>
          </div>
          <label className="settings-switch">
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
            />
            <span className="settings-slider"></span>
          </label>
        </div>
        {/* DARK MODE */}
        <div className="settings-row">
          <div className="settings-info">
            <div className="settings-option-icon dark">
              <i className="bi bi-moon"></i>
            </div>
            <div>
              <h3>Dark Mode</h3>
              <p>Change the application appearance.</p>
            </div>
          </div>
          <label className="settings-switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="settings-slider"></span>
          </label>
        </div>
        {/* CURRENT STATUS */}
        <div className="settings-summary">
          <h3>Current Preferences</h3>
          <div className="settings-summary-grid">
            <div>
              <span>Notifications</span>
              <strong>{notifications ? "Enabled" : "Disabled"}</strong>
            </div>
            <div>
              <span>Email Alerts</span>
              <strong>{emailAlerts ? "Enabled" : "Disabled"}</strong>
            </div>
            <div>
              <span>Dark Mode</span>
              <strong>{darkMode ? "Enabled" : "Disabled"}</strong>
            </div>
          </div>
        </div>
        {/* BUTTON */}
        <div className="settings-actions">
          <button className="settings-update-btn" onClick={handleUpdate}>
            <i className="bi bi-check-circle"></i>
            Update Settings
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
