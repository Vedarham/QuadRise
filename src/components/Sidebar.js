import React from 'react';
import { 
  FaGraduationCap, 
  FaChartLine, 
  FaBullseye, 
  FaUsers, 
  FaCog, 
  FaSignOutAlt,
  FaHandshake
} from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import '../styles/Sidebar.css';

const menuItems = [
  { id: 'dashboard', icon: MdDashboard, label: 'Dashboard' },
  { id: 'learning-path', icon: FaGraduationCap, label: 'Learning Path' },
  { id: 'goals', icon: FaBullseye, label: 'Goals' },
  { id: 'network', icon: FaUsers, label: 'Network' },
  { id: 'counselors', icon: FaHandshake, label: 'Find Mentor' },
];

function Sidebar({ onNavigate, currentView }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <FaGraduationCap className="logo-icon" />
          <span className="logo-text">QuadRise</span>
        </div>
      </div>

      <nav className="nav-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-item ${currentView === item.id ? 'active' : ''}`}
            >
              <Icon className="nav-item-icon" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="user-section">
        <div className="user-info">
          <img
            className="user-avatar"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
          />
          <div className="user-details">
            <p className="user-name">Alex Thompson</p>
            <p className="user-role">Student</p>
          </div>
        </div>
        <div className="action-buttons">
          <button className="action-button">
            <FaCog className="action-button-icon" />
            Settings
          </button>
          <button className="action-button">
            <FaSignOutAlt className="action-button-icon" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;