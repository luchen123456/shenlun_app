import React, { useState } from 'react';
import { View } from './types';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { History } from './views/History';
import { Profile } from './views/Profile';
import { GradingEntry } from './views/GradingEntry';
import { PasteText } from './views/PasteText';
import { Report } from './views/Report';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  // Used to store previous view for back navigation logic if needed
  const [previousView, setPreviousView] = useState<View>('home');

  const handleNavigate = (view: View) => {
    setPreviousView(currentView);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    // Simple back logic: if in report or pasteText, go back to gradingEntry, else home
    if (currentView === 'pasteText' || currentView === 'report') {
        setCurrentView('gradingEntry');
    } else {
        setCurrentView('home');
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'history':
        return <History onNavigate={handleNavigate} />;
      case 'profile':
        return <Profile />;
      case 'gradingEntry':
        return <GradingEntry onNavigate={handleNavigate} />;
      case 'pasteText':
        return <PasteText onNavigate={handleNavigate} onBack={handleBack} />;
      case 'report':
        return <Report onBack={handleBack} />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {renderView()}
    </Layout>
  );
};

export default App;