import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";
const Dashboard = () => {
  const { role } = useAuth();
  return (
    <div className="dashboard-page">
      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>

        <div className="role-badge">{role?.toUpperCase()}</div>
      </div>

      <div className="dashboard-stats">
        {/* ADMIN */}
        {role === "admin" && (
          <>
            <div className="dashboard-stat-card">
              <div className="stat-icon purple">
                <i className="bi bi-people"></i>
              </div>

              <div>
                <span>Total Users</span>
                <h2>524</h2>
                <small>
                  <i className="bi bi-arrow-up"></i> 12% this month
                </small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon blue">
                <i className="bi bi-person-badge"></i>
              </div>

              <div>
                <span>Managers</span>
                <h2>24</h2>
                <small>
                  <i className="bi bi-arrow-up"></i> 4 new
                </small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon green">
                <i className="bi bi-cash-stack"></i>
              </div>

              <div>
                <span>Total Revenue</span>
                <h2>₹12L</h2>
                <small>
                  <i className="bi bi-arrow-up"></i> 18% this month
                </small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon orange">
                <i className="bi bi-bar-chart"></i>
              </div>

              <div>
                <span>Projects</span>
                <h2>36</h2>
                <small>5 new projects</small>
              </div>
            </div>
          </>
        )}
        {/* MANAGER */}
        {role === "manager" && (
          <>
            <div className="dashboard-stat-card">
              <div className="stat-icon purple">
                <i className="bi bi-people"></i>
              </div>

              <div>
                <span>Team Members</span>
                <h2>18</h2>
                <small>3 active today</small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon blue">
                <i className="bi bi-folder"></i>
              </div>

              <div>
                <span>Projects</span>
                <h2>12</h2>
                <small>4 in progress</small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon green">
                <i className="bi bi-check-circle"></i>
              </div>

              <div>
                <span>Completed Tasks</span>
                <h2>186</h2>
                <small>
                  <i className="bi bi-arrow-up"></i> 15% this week
                </small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon orange">
                <i className="bi bi-graph-up"></i>
              </div>

              <div>
                <span>Performance</span>
                <h2>86%</h2>
                <small>
                  <i className="bi bi-arrow-up"></i> 6% improvement
                </small>
              </div>
            </div>
          </>
        )}
        {/* user */}
        {role === "user" && (
          <>
            <div className="dashboard-stat-card">
              <div className="stat-icon purple">
                <i className="bi bi-clipboard-check"></i>
              </div>

              <div>
                <span>My Tasks</span>
                <h2>12</h2>
                <small>4 pending</small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon green">
                <i className="bi bi-check-circle"></i>
              </div>

              <div>
                <span>Completed</span>
                <h2>28</h2>
                <small>
                  <i className="bi bi-arrow-up"></i> 8 this week
                </small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon orange">
                <i className="bi bi-clock"></i>
              </div>

              <div>
                <span>Pending</span>
                <h2>4</h2>
                <small>Due this week</small>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="stat-icon blue">
                <i className="bi bi-bell"></i>
              </div>

              <div>
                <span>Notifications</span>
                <h2>7</h2>
                <small>3 unread</small>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="dashboard-content">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest activity in your account</p>
            </div>
            <button className="view-btn">View All</button>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <i className="bi bi-person"></i>
              </div>
              <div>
                <strong>New user registered</strong>
                <span>Rahul Sharma joined the platform</span>
              </div>
              <small>10 min ago</small>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <i className="bi bi-folder"></i>
              </div>
              <div>
                <strong>New project created</strong>
                <span>Website Development project</span>
              </div>
              <small>1 hour ago</small>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                <strong>Task completed</strong>
                <span>Homepage design completed</span>
              </div>
              <small>2 hours ago</small>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <div>
                <strong>Report generated</strong>
                <span>Monthly performance report</span>
              </div>
              <small>Yesterday</small>
            </div>
          </div>
        </div>
        <div className="dashboard-panel">
          <h2>Quick Overview</h2>
          <div className="overview-item">
            <div>
              <span>Project Progress</span>
              <strong>78%</strong>
            </div>
            <div className="progress">
              <div style={{ width: "78%" }}></div>
            </div>
          </div>
          <div className="overview-item">
            <div>
              <span>Team Performance</span>
              <strong>86%</strong>
            </div>
            <div className="progress">
              <div style={{ width: "86%" }}></div>
            </div>
          </div>
          <div className="overview-item">
            <div>
              <span>Task Completion</span>
              <strong>92%</strong>
            </div>
            <div className="progress">
              <div style={{ width: "92%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
