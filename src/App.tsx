import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { AgentStore } from './components/AgentStore';
import { RecruiterAgent } from './components/RecruiterAgent';
export function App() {
  const [activeView, setActiveView] = useState('store');
  return <Router>
      <div className="flex w-full min-h-screen bg-gray-50">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/store" />} />
            <Route path="/store" element={<AgentStore setActiveView={setActiveView} />} />
            <Route path="/store/recruiter" element={<RecruiterAgent />} />
            <Route path="/dashboard" element={<div className="p-6">Dashboard Content</div>} />
            <Route path="/settings" element={<div className="p-6">Settings Content</div>} />
            <Route path="/profile" element={<div className="p-6">Profile Content</div>} />
            <Route path="/usage" element={<div className="p-6">Usage Content</div>} />
          </Routes>
        </div>
      </div>
    </Router>;
}