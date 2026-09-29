import { useState } from "react";
import "./Team.css";
const Team = () => {
  const [showForm, setShowForm] = useState(false);
  const [members, setMembers] = useState([
    { name: "Aman Verma", role: "Frontend Developer" },
    { name: "Neha Sharma", role: "Backend Developer" },
    { name: "Rahul Singh", role: "UI Designer" },
  ]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const addMember = (e) => {
    e.preventDefault();
    if (!name || !role) {
      alert("Please enter member details");
      return;
    }
    setMembers([
      ...members,
      {
        name,
        role,
      },
    ]);
    setName("");
    setRole("");
    setShowForm(false);
  };
  return (
    <div className="team-page">
      <div className="team-header">
        <div>
          <h1>Team Management</h1>
          <p>Manage your team members and responsibilities.</p>
        </div>
        <button
          className="team-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? (
            <>
              <i className="bi bi-x-lg"></i>
              Close
            </>
          ) : (
            <>
              <i className="bi bi-plus-lg"></i>
              Add Team Member
            </>
          )}
        </button>
      </div>
      {showForm && (
        <div className="team-form-card">
          <h2>Add Team Member</h2>
          <form onSubmit={addMember}>
            <div className="team-form-group">
              <label>Member Name</label>
              <input
                type="text"
                placeholder="Enter member name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="team-form-group">
              <label>Job Role</label>
              <input
                type="text"
                placeholder="Enter job role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="team-form-actions">
              <button
                type="button"
                className="team-cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button type="submit" className="team-primary-btn">
                <i className="bi bi-person-plus"></i>
                Add Member
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="team-stats">
        <div className="team-stat-card">
          <span>
            <i className="bi bi-people"></i>
          </span>
          <div>
            <p>Total Members</p>
            <h2>{members.length}</h2>
          </div>
        </div>
        <div className="team-stat-card">
          <span>
            <i className="bi bi-person-check"></i>
          </span>
          <div>
            <p>Active Members</p>
            <h2>{members.length}</h2>
          </div>
        </div>
        <div className="team-stat-card">
          <span>
            <i className="bi bi-briefcase"></i>
          </span>
          <div>
            <p>Departments</p>
            <h2>3</h2>
          </div>
        </div>
      </div>
      <div className="team-section">
        <div className="team-section-header">
          <div>
            <h2>Team Members</h2>
            <p>View all members of your team.</p>
          </div>
        </div>
        <div className="team-grid">
          {members.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-card-top">
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <span className="team-status">
                  <i className="bi bi-circle-fill"></i>
                  Active
                </span>
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-card-footer">
                <span>
                  <i className="bi bi-person"></i>
                  Team Member
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
