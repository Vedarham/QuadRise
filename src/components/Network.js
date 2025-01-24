import React from 'react';
import { 
  FaUsers, 
  FaComments, 
  FaUserPlus, 
  FaSearch 
} from 'react-icons/fa';
import '../styles/Network.css';

const connections = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Data Scientist',
    company: 'TechCorp',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    connectionDate: '2024-02-15',
    status: 'connected',
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Software Engineer',
    company: 'InnovateTech',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    connectionDate: '2024-03-01',
    status: 'connected',
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'DesignHub',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120',
    connectionDate: '2024-03-10',
    status: 'pending',
  },
];

const suggestedConnections = [
  {
    id: '4',
    name: 'David Kim',
    role: 'ML Engineer',
    company: 'AI Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    connectionDate: '',
    status: 'pending',
  },
  {
    id: '5',
    name: 'Lisa Patel',
    role: 'Career Counselor',
    company: 'CareerBoost',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120',
    connectionDate: '',
    status: 'pending',
  },
];

export default function Network() {
  return (
    <div className="network-container">
      <div className="network-header">
        <h1>Professional Network</h1>
        <div className="header-actions">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search connections..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
          <button className="add-connection-btn">
            <FaUserPlus />
            Add Connection
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon indigo">
            <FaUsers />
          </div>
          <div className="stat-info">
            <p className="stat-label">Total Connections</p>
            <p className="stat-value">127</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">
            <FaComments />
          </div>
          <div className="stat-info">
            <p className="stat-label">Active Conversations</p>
            <p className="stat-value">8</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon yellow">
            <FaUserPlus />
          </div>
          <div className="stat-info">
            <p className="stat-label">Pending Requests</p>
            <p className="stat-value">5</p>
          </div>
        </div>
      </div>

      <div className="connections-grid">
        <div className="current-connections">
          <h2>Current Connections</h2>
          <div className="connections-list">
            {connections.map((connection) => (
              <div key={connection.id} className="connection-card">
                <div className="connection-info">
                  <img
                    src={connection.avatar}
                    alt={connection.name}
                    className="connection-avatar"
                  />
                  <div className="connection-details">
                    <h3>{connection.name}</h3>
                    <p>{connection.role} at {connection.company}</p>
                  </div>
                </div>
                <div className="connection-actions">
                  <button className="action-button">
                    <FaComments />
                  </button>
                  <button className="view-profile-btn">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="suggested-connections">
          <h2>Suggested Connections</h2>
          <div className="suggestions-list">
            {suggestedConnections.map((connection) => (
              <div key={connection.id} className="connection-card">
                <div className="connection-info">
                  <img
                    src={connection.avatar}
                    alt={connection.name}
                    className="connection-avatar"
                  />
                  <div className="connection-details">
                    <h3>{connection.name}</h3>
                    <p>{connection.role} at {connection.company}</p>
                  </div>
                </div>
                <button className="connect-button">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}