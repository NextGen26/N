
import React, { useState } from 'react';
import { UserRole, UserProfile } from './types';
import { MOCK_STUDENT, MOCK_PARENT } from './constants';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AssignmentList from './components/AssignmentList';
import GradesView from './components/GradesView';
import AdvisorChat from './components/AdvisorChat';
import WeeklyFocus from './components/WeeklyFocus';
import LaunchGuide from './components/LaunchGuide';
import NextGenBank from './components/NovaBank'; // Renamed conceptually in file usage

type TabType = 'dashboard' | 'assignments' | 'grades' | 'advisor' | 'focus' | 'launch' | 'bank';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserProfile>(MOCK_STUDENT);
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const toggleUser = () => {
    setCurrentUser(prev => prev.role === UserRole.STUDENT ? MOCK_PARENT : MOCK_STUDENT);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard user={currentUser} />;
      case 'assignments': return <AssignmentList user={currentUser} />;
      case 'grades': return <GradesView user={currentUser} />;
      case 'advisor': return <AdvisorChat user={currentUser} />;
      case 'focus': return <WeeklyFocus user={currentUser} />;
      case 'launch': return <LaunchGuide />;
      case 'bank': return <NextGenBank user={currentUser} />;
      default: return <Dashboard user={currentUser} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        user={currentUser} 
        toggleUser={toggleUser} 
      />
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              {activeTab === 'dashboard' ? 'NextGen Overview' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace(/([A-Z])/g, ' $1')}
            </h1>
            <p className="text-slate-500 font-medium">Welcome to NextGen Enrichment Center, {currentUser.name}</p>
          </header>
          <div className="animate-in fade-in duration-500">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
