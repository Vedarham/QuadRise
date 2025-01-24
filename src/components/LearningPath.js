import React from 'react';
import { 
  FaBook, 
  FaClock, 
  FaChartBar, 
  FaArrowRight 
} from 'react-icons/fa';
import '../styles/LearningPath.css';

const recommendedCourses = [
  {
    id: '1',
    title: 'Python for Data Science',
    description: 'Master Python fundamentals and essential libraries for data analysis',
    duration: '8 weeks',
    level: 'Intermediate',
    category: 'Data Science',
    progress: 45,
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    description: 'Learn core ML concepts and implement popular algorithms',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'AI/ML',
    progress: 20,
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    title: 'Business Communication',
    description: 'Develop essential communication skills for the workplace',
    duration: '4 weeks',
    level: 'Beginner',
    category: 'Soft Skills',
    progress: 75,
    thumbnail: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=400',
  },
];

export default function LearningPath() {
  return (
    <div className="learning-path-container">
      <div className="header">
        <h1>Learning Path</h1>
        <button>Customize Path</button>
      </div>

      <div className="ai-recommendation">
        <div>
          <h2>AI-Powered Learning Recommendations</h2>
          <p>Based on your goals and progress, we recommend focusing on these areas</p>
          <div className="recommendation-tags">
            <span className="recommendation-tag">Data Analysis</span>
            <span className="recommendation-tag">Machine Learning</span>
            <span className="recommendation-tag">Communication</span>
          </div>
        </div>
        <button>View Details</button>
      </div>

      <div className="courses-grid">
        {recommendedCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="course-image"
            />
            <div className="course-content">
              <div className="course-tags">
                <span className="course-level">{course.level}</span>
                <span className="course-category">{course.category}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-progress">
                <div className="duration">
                  <FaClock />
                  {course.duration}
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="progress-info">
                  <span>{course.progress}% Complete</span>
                  <button className="continue-btn">
                    Continue
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}