import { useState } from "react";
import "./Users.css";
const Users = () => {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 4,
      name: "Neha Kapoor",
      email: "neha@gmail.com",
      role: "Manager",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      role: "Admin",
      status: "Active",
    },
  ]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "User",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const addUser = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please fill all fields");
      return;
    }
    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: form.role,
      status: "Active",
    };
    setUsers([...users, newUser]);
    setForm({
      name: "",
      email: "",
      role: "User",
    });
    setShowForm(false);
  };
  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const managers = users.filter((user) => user.role === "Manager").length;
  const admins = users.filter((user) => user.role === "Admin").length;
  return (
    <div className="users-page">
      {/* HEADER */}
      <div className="users-header">
        <div>
          <h1>Users Management</h1>
          <p>Manage users, roles and account access from one place.</p>
        </div>
        <button className="users-primary-btn" onClick={() => setShowForm(true)}>
          <i className="bi bi-person-plus"></i>
          Add New User
        </button>
      </div>
      {/* STATS */}
      <div className="users-stats">
        <div className="users-stat-card">
          <div className="users-stat-icon purple">
            <i className="bi bi-people"></i>
          </div>
          <div>
            <span>Total Users</span>
            <h2>{users.length}</h2>
          </div>
        </div>
        <div className="users-stat-card">
          <div className="users-stat-icon green">
            <i className="bi bi-check-circle"></i>
          </div>
          <div>
            <span>Active Users</span>
            <h2>{activeUsers}</h2>
          </div>
        </div>
        <div className="users-stat-card">
          <div className="users-stat-icon orange">
            <i className="bi bi-person-badge"></i>
          </div>
          <div>
            <span>Managers</span>
            <h2>{managers}</h2>
          </div>
        </div>
        <div className="users-stat-card">
          <div className="users-stat-icon blue">
            <i className="bi bi-shield-check"></i>
          </div>
          <div>
            <span>Admins</span>
            <h2>{admins}</h2>
          </div>
        </div>
      </div>
      {/* ADD USER FORM */}
      {showForm && (
        <div className="users-form-card">
          <div className="users-form-header">
            <div>
              <h2>Add New User</h2>
              <p>Create a new user account.</p>
            </div>
            <button
              className="users-close-btn"
              onClick={() => setShowForm(false)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <form onSubmit={addUser}>
            <div className="users-form-grid">
              <div className="users-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="users-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="users-form-group">
                <label>Role</label>
                <select name="role" value={form.role} onChange={handleChange}>
                  <option value="User">User</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="users-form-actions">
              <button
                type="button"
                className="users-cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button type="submit" className="users-primary-btn">
                <i className="bi bi-person-plus"></i>
                Create User
              </button>
            </div>
          </form>
        </div>
      )}
      {/* USERS TABLE */}
      <div className="users-table-card">
        <div className="users-table-header">
          <div>
            <h2>All Users</h2>
            <p>{filteredUsers.length} users found</p>
          </div>
          <div className="users-filters">
            <div className="users-search">
              <span>
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>
        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Account</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="users-user-info">
                        <div className="users-avatar">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <strong>{user.name}</strong>
                          <span>{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`users-role ${user.role.toLowerCase()}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`users-status ${user.status.toLowerCase()}`}
                      >
                        <span className="users-status-dot">
                          <i className="bi bi-circle-fill"></i>
                        </span>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <span className="users-account">
                        <i className="bi bi-building"></i>
                        Company Account
                      </span>
                    </td>
                    <td>
                      <button
                        className="users-delete-btn"
                        onClick={() => deleteUser(user.id)}
                      >
                        <i className="bi bi-trash3"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="users-no-data">
                    <i className="bi bi-person-x"></i>
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Users;
