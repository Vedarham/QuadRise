import React, { useState } from 'react';
import Dashboard from './components/Dashboard.js';
import LearningPath from './components/LearningPath.js';
import Goals from './components/Goals.js';
import Network from './components/Network.js';
import Counselors from './components/Counselors.js';
import Sidebar from './components/Sidebar.js';
import './styles/App.css';

function App() {
  const [currentView, setCurrentView] = useState('goals');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'learning-path':
        return <LearningPath />;
      case 'goals':
        return <Goals />;
      case 'network':
        return <Network />;
      case 'counselors':
        return <Counselors />;
      default:
        return <Goals />; 
    }
  };

  return (
    <div className="app-container">
      <Sidebar onNavigate={setCurrentView} currentView={currentView} />
      <div className="main-content">
        {renderView()}
      </div>
    </div>
  );
}

export default App; 