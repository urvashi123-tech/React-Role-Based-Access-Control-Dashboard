import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Profile.css";
const Profile = () => {
  const { role } = useAuth();
  const roleName = role ? role.charAt(0).toUpperCase() + role.slice(1) : "User";
  const defaultProfile = {
    name: "Demo User",
    email: "demo@example.com",
    phone: "+91 9876543210",
  };
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });
  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    setFormData(profile);
  }, [profile]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
    setSuccessMessage("");
  };
  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields.");
      return;
    }
    const updatedProfile = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };
    setProfile(updatedProfile);
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
    setIsEditing(false);
    setSuccessMessage("Profile updated successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };
  return (
    <div className="profile-page">
      {/* HEADER */}
      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>View and manage your account information.</p>
        </div>
        {!isEditing && (
          <button className="profile-edit-btn" onClick={handleEdit}>
            <i className="bi bi-pencil-square"></i>
            Edit Profile
          </button>
        )}
      </div>
      {/* SUCCESS MESSAGE */}
      {successMessage && (
        <div className="profile-success">
          <i className="bi bi-check-circle-fill"></i>
          {successMessage}
        </div>
      )}
      {/* EDIT FORM */}
      {isEditing && (
        <div className="profile-edit-card">
          <div className="profile-edit-header">
            <div>
              <h2>Edit Profile</h2>
              <p>Update your personal information below.</p>
            </div>
            <span>
              <i className="bi bi-pencil-square"></i>
            </span>
          </div>
          <form onSubmit={handleSave}>
            <div className="profile-form-grid">
              <div className="profile-form-group">
                <label>Full Name</label>
                <div className="profile-input-wrapper">
                  <i className="bi bi-person"></i>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="profile-form-group">
                <label>Email Address</label>
                <div className="profile-input-wrapper">
                  <i className="bi bi-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="profile-form-group">
                <label>Phone Number</label>
                <div className="profile-input-wrapper">
                  <i className="bi bi-telephone"></i>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="profile-form-group">
                <label>Role</label>
                <div className="profile-input-wrapper">
                  <i className="bi bi-shield-check"></i>
                  <input type="text" value={roleName} disabled />
                </div>
                <small>Role cannot be changed from profile.</small>
              </div>
            </div>
            <div className="profile-form-actions">
              <button
                type="button"
                className="profile-cancel-btn"
                onClick={handleCancel}
              >
                <i className="bi bi-x-lg"></i>
                Cancel
              </button>
              <button type="submit" className="profile-save-btn">
                <i className="bi bi-check-lg"></i>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
      {/* PROFILE CONTENT */}
      <div className="profile-layout">
        {/* PROFILE CARD */}
        <div className="profile-card-large">
          <div className="profile-cover"></div>
          <div className="profile-main">
            <div className="profile-avatar">
              {profile.name.charAt(0).toUpperCase()}
            </div>
            <h2>{profile.name}</h2>
            <span className="profile-role">{roleName}</span>
            <p className="profile-email">
              <i className="bi bi-envelope"></i>
              {profile.email}
            </p>
            <p className="profile-phone">
              <i className="bi bi-telephone"></i>
              {profile.phone}
            </p>
          </div>
          <div className="profile-status">
            <span className="profile-status-dot"></span>
            <i className="bi bi-check-circle"></i>
            Active Account
          </div>
        </div>
        {/* ACCOUNT INFORMATION */}
        <div className="profile-details-card">
          <div className="profile-details-header">
            <div>
              <h2>Account Information</h2>
              <p>Your account details</p>
            </div>
            <span className="profile-info-icon">
              <i className="bi bi-person-badge"></i>
            </span>
          </div>
          <div className="profile-details-list">
            <div className="profile-detail-row">
              <div>
                <span className="detail-label">Full Name</span>
                <strong>{profile.name}</strong>
              </div>
              <span className="detail-icon">
                <i className="bi bi-person"></i>
              </span>
            </div>
            <div className="profile-detail-row">
              <div>
                <span className="detail-label">Email Address</span>
                <strong>{profile.email}</strong>
              </div>
              <span className="detail-icon">
                <i className="bi bi-envelope"></i>
              </span>
            </div>
            <div className="profile-detail-row">
              <div>
                <span className="detail-label">Phone Number</span>
                <strong>{profile.phone}</strong>
              </div>
              <span className="detail-icon">
                <i className="bi bi-telephone"></i>
              </span>
            </div>
            <div className="profile-detail-row">
              <div>
                <span className="detail-label">Role</span>
                <strong>{roleName}</strong>
              </div>
              <span className="detail-icon">
                <i className="bi bi-shield-check"></i>
              </span>
            </div>
            <div className="profile-detail-row">
              <div>
                <span className="detail-label">Account Status</span>
                <strong className="active-text">Active</strong>
              </div>
              <span className="detail-icon">
                <i className="bi bi-check-circle"></i>
              </span>
            </div>
            <div className="profile-detail-row">
              <div>
                <span className="detail-label">Member Since</span>
                <strong>January 2026</strong>
              </div>
              <span className="detail-icon">
                <i className="bi bi-calendar3"></i>
              </span>
            </div>
            <div className="profile-detail-row">
              <div>
                <span className="detail-label">Last Login</span>
                <strong>Today</strong>
              </div>
              <span className="detail-icon">
                <i className="bi bi-clock"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* PERMISSION CARD */}
      <div className="profile-permission-card">
        <div className="permission-icon">
          <i className="bi bi-shield-lock"></i>
        </div>
        <div className="permission-content">
          <h3>{roleName} Account</h3>
          <p>
            Your account has access to pages and features according to the{" "}
            <strong>{roleName}</strong> role.
          </p>
        </div>
        <span className="permission-badge">{roleName}</span>
      </div>
    </div>
  );
};
export default Profile;
