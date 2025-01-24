import React from 'react';
import "../styles/Dashboard.css"
import { 
  FaChartBar, 
  FaBook, 
  FaCalendar, 
  FaTrophy, 
  FaUsers,
  FaArrowRight,
  FaBell
} from 'react-icons/fa';

const mockSkills = [
  { id: '1', name: 'Critical Thinking', progress: 75, category: 'Soft Skills' },
  { id: '2', name: 'Data Analysis', progress: 60, category: 'Technical' },
  { id: '3', name: 'Communication', progress: 85, category: 'Soft Skills' },
  { id: '4', name: 'Machine Learning', progress: 45, category: 'Technical' },
];

const mockMilestones = [
  {
    id: '1',
    title: 'Complete Python Basics',
    description: 'Master fundamental Python programming concepts',
    completed: true,
    dueDate: '2024-03-25',
  },
  {
    id: '2',
    title: 'Data Structures Project',
    description: 'Implement a real-world data structures project',
    completed: false,
    dueDate: '2024-04-01',
  },
  {
    id: '3',
    title: 'Technical Interview Prep',
    description: 'Practice common interview questions and algorithms',
    completed: false,
    dueDate: '2024-04-15',
  },
];

const mockAnalytics = {
  skillProgress: 65,
  milestonesCompleted: 8,
  activeDays: 15,
  upcomingEvents: 3,
};

const upcomingEvents = [
  {
    id: 1,
    title: 'AI Workshop',
    date: 'March 25, 2024',
    time: '2:00 PM',
    type: 'Workshop',
  },
  {
    id: 2,
    title: 'Career Counseling Session',
    date: 'March 27, 2024',
    time: '11:00 AM',
    type: 'Meeting',
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <h1 className="header-title">Dashboard</h1>
            <div className="header-icons">
              <button className="bell-button">
                <FaBell className="bell-icon" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Analytics Cards */}
        <div className="analytics-grid">
          <div className="analytics-card">
            <div className="card-content">
              <div className="analytics-icon blue">
                <FaChartBar className="icon" />
              </div>
              <div className="card-text">
                <p className="text-label">Skill Progress</p>
                <p className="text-value">{mockAnalytics.skillProgress}%</p>
              </div>
            </div>
          </div>
          <div className="analytics-card">
            <div className="card-content">
              <div className="analytics-icon yellow">
                <FaTrophy className="icon" />
              </div>
              <div className="card-text">
                <p className="text-label">Milestones</p>
                <p className="text-value">{mockAnalytics.milestonesCompleted}</p>
              </div>
            </div>
          </div>
          <div className="analytics-card">
            <div className="card-content">
              <div className="analytics-icon green">
                <FaCalendar className="icon" />
              </div>
              <div className="card-text">
                <p className="text-label">Active Days</p>
                <p className="text-value">{mockAnalytics.activeDays}</p>
              </div>
            </div>
          </div>
          <div className="analytics-card">
            <div className="card-content">
              <div className="analytics-icon purple">
                <FaUsers className="icon" />
              </div>
              <div className="card-text">
                <p className="text-label">Upcoming Events</p>
                <p className="text-value">{mockAnalytics.upcomingEvents}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-grid">
          {/* Skills Progress */}
          <div className="skills-progress-container">
            <div className="skills-progress">
              <div className="progress-header">
                <h2 className="section-title">Skills Progress</h2>
                <button className="view-all-button">
                  View All
                </button>
              </div>
              <div className="skills-list">
                {mockSkills.map((skill) => (
                  <div key={skill.id} className="skill-item">
                    <div className="skill-header">
                      <div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-category">({skill.category})</span>
                      </div>
                      <span className="skill-progress">{skill.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="events-container">
            <div className="events-section">
              <h2 className="section-title">Upcoming Events</h2>
              <div className="events-list">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="event-card"
                  >
                    <div className="event-content">
                      <div>
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-details">
                          {event.date} at {event.time}
                        </p>
                      </div>
                      <span className="event-type">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
                <button className="view-calendar-button">
                  View Calendar
                  <FaArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="milestones-container">
            <div className="milestones-section">
              <div className="milestones-header">
                <h2 className="section-title">Current Milestones</h2>
                <button className="view-all-button">
                  View All
                </button>
              </div>
              <div className="milestones-list">
                {mockMilestones.map((milestone) => (
                  <div key={milestone.id} className="milestone-card">
                    <div className="milestone-content">
                      <input
                        type="checkbox"
                        checked={milestone.completed}
                        onChange={() => {}}
                        className="milestone-checkbox"
                      />
                      <div className="milestone-details">
                        <h3 className="milestone-title">{milestone.title}</h3>
                        <p className="milestone-description">{milestone.description}</p>
                        <p className="milestone-due">Due: {milestone.dueDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
