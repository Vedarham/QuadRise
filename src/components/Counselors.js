import React, { useState } from 'react';
import "../styles/Counselors.css"
import { 
  FaSearch, 
  FaStar, 
  FaClock, 
  FaGlobe, 
  FaBriefcase, 
  FaComments, 
  FaCalendar,
  FaFilter
} from 'react-icons/fa';

const specializations = [
  'Career Development',
  'Technical Skills',
  'Leadership',
  'Data Science',
  'Software Engineering',
  'Product Management',
  'UX/UI Design',
  'Business Strategy',
  'Entrepreneurship',
];

const counselors = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'advisor',
    company: 'TechCorp',
    specialization: ['Data Science', 'Machine Learning', 'Career Development'],
    experience: 12,
    rating: 4.9,
    reviews: 128,
    availability: 'Available',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Senior Data Scientist with extensive experience in mentoring and career development. Passionate about helping students bridge the gap between academic knowledge and industry requirements.',
    hourlyRate: 150,
    languages: ['English', 'Mandarin'],
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'advisor',
    company: 'InnovateTech',
    specialization: ['Software Engineering', 'System Design', 'Technical Skills'],
    experience: 15,
    rating: 4.8,
    reviews: 95,
    availability: 'Busy',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Principal Software Engineer specializing in system architecture and scalable solutions. Committed to mentoring the next generation of software engineers.',
    hourlyRate: 180,
    languages: ['English', 'Spanish'],
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'counselor',
    company: 'CareerBoost',
    specialization: ['Career Development', 'Leadership', 'Business Strategy'],
    experience: 8,
    rating: 4.7,
    reviews: 156,
    availability: 'Available',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Certified Career Counselor with expertise in professional development and leadership coaching. Helping professionals navigate career transitions and growth opportunities.',
    hourlyRate: 120,
    languages: ['English', 'French'],
  },
];

function Counselors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const filteredCounselors = counselors.filter((counselor) => {
    const matchesSearch = counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      counselor.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || counselor.role === selectedRole;
    const matchesSpecialization = selectedSpecialization === 'all' ||
      counselor.specialization.includes(selectedSpecialization);
    return matchesSearch && matchesRole && matchesSpecialization;
  });

  return (
    <div className="counselors-container">
      <div className="content-wrapper">
        <div className="header">
          <h1 className="page-title">Find Your Mentor</h1>
          <button className="become-mentor-btn">
            Become a Mentor
          </button>
        </div>

        <div className="search-section">
          <div className="search-grid">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search by name or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <FaSearch className="search-icon" />
            </div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Roles</option>
              <option value="counselor">Counselors</option>
              <option value="advisor">Company Advisors</option>
            </select>
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Specializations</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="counselors-grid">
          {filteredCounselors.map((counselor) => (
            <div key={counselor.id} className="counselor-card">
              <div className="card-content">
                <div className="card-header">
                  <div className="profile-section">
                    <img
                      src={counselor.avatar}
                      alt={counselor.name}
                      className="profile-image"
                    />
                    <div className="profile-info">
                      <h3>{counselor.name}</h3>
                      <p className="profile-role">
                        {counselor.role === 'advisor' ? 'Company Advisor' : 'Career Counselor'} at {counselor.company}
                      </p>
                      <div className="rating">
                        <FaStar className="star-icon" />
                        <span className="rating-text">{counselor.rating}</span>
                        <span className="reviews-count">({counselor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <span className={`availability-badge ${counselor.availability.toLowerCase()}`}>
                    {counselor.availability}
                  </span>
                </div>

                <p className="bio">{counselor.bio}</p>

                <div className="specializations">
                  {counselor.specialization.map((spec) => (
                    <span key={spec} className="specialization-tag">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="details-grid">
                  <div className="detail-item">
                    <FaBriefcase className="detail-icon" />
                    {counselor.experience} years exp.
                  </div>
                  <div className="detail-item">
                    <FaClock className="detail-icon" />
                    ${counselor.hourlyRate}/hour
                  </div>
                  <div className="detail-item">
                    <FaGlobe className="detail-icon" />
                    {counselor.languages.join(', ')}
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="schedule-btn">
                    <FaCalendar className="detail-icon" />
                    Schedule Meeting
                  </button>
                  <button className="message-btn">
                    <FaComments className="detail-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counselors;