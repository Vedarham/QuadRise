import React from 'react';
import { 
  FaBullseye, 
  FaCalendar, 
  FaExclamationCircle, 
  FaCheckCircle, 
  FaClock 
} from 'react-icons/fa';
import '../styles/Goals.css';

const goals = [
  {
    id: '1',
    title: 'Master Python Programming',
    description: 'Complete advanced Python courses and build 3 projects',
    deadline: '2024-06-30',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Improve Communication Skills',
    description: 'Attend workshops and practice public speaking',
    deadline: '2024-05-15',
    status: 'Not Started',
    priority: 'Medium',
  },
  {
    id: '3',
    title: 'Build Portfolio Website',
    description: 'Design and develop personal portfolio showcasing projects',
    deadline: '2024-04-30',
    status: 'Completed',
    priority: 'High',
  },
];

export default function Goals() {
  return (
    <div className="goals-container">
      <div className="header">
        <h1>Goals & Objectives</h1>
        <button>Add New Goal</button>
      </div>

      <div className="progress-cards">
        <div className="progress-card">
          <div className="progress-icon green">
            <FaBullseye />
          </div>
          <h3>Overall Progress</h3>
          <div className="progress-info">
            <div className="progress-label">
              <span>Progress</span>
              <span>65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }} />
            </div>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-icon yellow">
            <FaCalendar />
          </div>
          <h3>Time Remaining</h3>
          <p className="stat-value">45</p>
          <p className="stat-label">Days until next milestone</p>
        </div>

        <div className="progress-card">
          <div className="progress-icon purple">
            <FaCheckCircle />
          </div>
          <h3>Completion Rate</h3>
          <p className="stat-value">78%</p>
          <p className="stat-label">Goals completed on time</p>
        </div>
      </div>

      <div className="goals-list">
        <h2>Current Goals</h2>
        <div className="goals-grid">
          {goals.map((goal) => (
            <div key={goal.id} className="goal-card">
              <div className="goal-header">
                <h3>{goal.title}</h3>
                <span className={`priority-tag ${goal.priority.toLowerCase()}`}>
                  {goal.priority} Priority
                </span>
              </div>
              <p className="goal-description">{goal.description}</p>
              <div className="goal-footer">
                <div className="goal-meta">
                  <span className="deadline">
                    <FaCalendar />
                    Due: {goal.deadline}
                  </span>
                  <span className={`status-badge ${goal.status.toLowerCase().replace(' ', '-')}`}>
                    {goal.status === 'Not Started' && <FaClock />}
                    {goal.status === 'In Progress' && <FaExclamationCircle />}
                    {goal.status === 'Completed' && <FaCheckCircle />}
                    {goal.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}