import { useState } from "react";
import "./Reports.css";
const Reports = () => {
  const [period, setPeriod] = useState("Monthly");
  return (
    <div className="reports-page">
      <div className="reports-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p>Track performance and application activity.</p>
        </div>
        <select
          className="reports-period-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="reports-stats">
        <div className="reports-stat-card">
          <div className="reports-stat-icon">
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
        <div className="reports-stat-card">
          <div className="reports-stat-icon">
            <i className="bi bi-person-check"></i>
          </div>
          <div>
            <span>Active Users</span>
            <h2>418</h2>
            <small>
              <i className="bi bi-arrow-up"></i> 8% this month
            </small>
          </div>
        </div>
        <div className="reports-stat-card">
          <div className="reports-stat-icon">
            <i className="bi bi-folder"></i>
          </div>
          <div>
            <span>Projects</span>
            <h2>36</h2>
            <small>
              <i className="bi bi-arrow-up"></i> 5 new projects
            </small>
          </div>
        </div>
        <div className="reports-stat-card">
          <div className="reports-stat-icon">
            <i className="bi bi-bar-chart"></i>
          </div>
          <div>
            <span>Completion</span>
            <h2>82%</h2>
            <small>
              <i className="bi bi-arrow-up"></i> 6% improvement
            </small>
          </div>
        </div>
      </div>
      <div className="reports-card">
        <div className="reports-card-header">
          <div>
            <h2>Project Performance</h2>
            <p>Current project completion status.</p>
          </div>
          <span className="reports-card-icon">
            <i className="bi bi-graph-up"></i>
          </span>
        </div>
        <div className="reports-progress-item">
          <div className="reports-progress-info">
            <span>Website Project</span>
            <strong>90%</strong>
          </div>
          <div className="reports-progress">
            <div style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="reports-progress-item">
          <div className="reports-progress-info">
            <span>Mobile Application</span>
            <strong>72%</strong>
          </div>
          <div className="reports-progress">
            <div style={{ width: "72%" }}></div>
          </div>
        </div>
        <div className="reports-progress-item">
          <div className="reports-progress-info">
            <span>Admin Portal</span>
            <strong>65%</strong>
          </div>
          <div className="reports-progress">
            <div style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>
      <div className="reports-card">
        <div className="reports-card-header">
          <div>
            <h2>{period} Activity</h2>
            <p>Application activity for the selected period.</p>
          </div>
          <span className="reports-card-icon">
            <i className="bi bi-calendar3"></i>
          </span>
        </div>
        <div className="reports-activity-list">
          <div className="reports-activity">
            <span>
              <i className="bi bi-person"></i>
            </span>
            <div>
              <strong>New users registered</strong>
              <p>42 new users</p>
            </div>
          </div>
          <div className="reports-activity">
            <span>
              <i className="bi bi-folder"></i>
            </span>
            <div>
              <strong>Projects created</strong>
              <p>12 new projects</p>
            </div>
          </div>
          <div className="reports-activity">
            <span>
              <i className="bi bi-check-circle"></i>
            </span>
            <div>
              <strong>Tasks completed</strong>
              <p>186 tasks completed</p>
            </div>
          </div>
          <div className="reports-activity">
            <span>
              <i className="bi bi-bar-chart"></i>
            </span>
            <div>
              <strong>Reports generated</strong>
              <p>28 reports generated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reports;
