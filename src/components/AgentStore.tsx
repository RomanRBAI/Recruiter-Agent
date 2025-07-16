import React, { useState } from 'react';
import { Search, Check } from 'lucide-react';
import { AgentCard } from './AgentCard';
import { useNavigate } from 'react-router-dom';
export const AgentStore = ({
  setActiveView
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();
  const handleRecruiterClick = () => {
    navigate('/store/recruiter');
  };
  return <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Agent Store</h1>
      <div className="flex gap-6">
        {/* Categories sidebar */}
        <div className="w-64 space-y-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="font-medium mb-3">Categories</h2>
            <div className="space-y-2">
              <button onClick={() => setActiveCategory('all')} className={`w-full text-left p-2 rounded-md ${activeCategory === 'all' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                All Agents
              </button>
              <button onClick={() => setActiveCategory('content')} className={`w-full text-left p-2 rounded-md ${activeCategory === 'content' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                Content
              </button>
              <button onClick={() => setActiveCategory('development')} className={`w-full text-left p-2 rounded-md ${activeCategory === 'development' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                Development
              </button>
              <button onClick={() => setActiveCategory('business')} className={`w-full text-left p-2 rounded-md ${activeCategory === 'business' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                Business
              </button>
              <button onClick={() => setActiveCategory('analytics')} className={`w-full text-left p-2 rounded-md ${activeCategory === 'analytics' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                Analytics
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="font-medium mb-3">Filter</h2>
            <div className="relative mb-3">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input type="text" placeholder="Search agents..." className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Popular only</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>4+ stars</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Low credit usage</span>
              </label>
            </div>
          </div>
        </div>
        {/* Agent cards */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <AgentCard icon="📝" name="Advanced Writing Assistant" rating={4.8} reviews={245} description="Professional writing help for articles, blogs, and social media content." features={['Grammar correction', 'Content optimization', 'Style suggestions', 'SEO assistance']} credits={2} popular={true} />
            <AgentCard icon="💻" name="Code Generator Pro" rating={4.6} reviews={189} description="Generate clean, efficient code in multiple languages with detailed explanations." features={['Multiple languages', 'Bug detection', 'Code optimization', 'Documentation generation']} credits={3} />
            <AgentCard icon="📊" name="Data Analyst" rating={4.5} reviews={156} description="Analyze and visualize data to extract meaningful insights for your business." features={['Data visualization', 'Trend identification', 'Statistical analysis', 'Report generation']} credits={4} />
            <AgentCard icon="🤖" name="Customer Service Bot" rating={4.7} reviews={203} description="Handle customer inquiries with a friendly, efficient AI assistant." features={['24/7 availability', 'FAQ handling', 'Multi-language support', 'Ticket creation']} credits={2} popular={true} />
            {activeCategory === 'business' || activeCategory === 'all' ? <AgentCard icon="👔" name="Recruiter Agent" rating={4.4} reviews={112} description="Manage candidate information and streamline your recruitment process." features={['Candidate database', 'Contact management', 'One-click calling', 'Company tracking']} credits={3} onClick={handleRecruiterClick} isNew={true} /> : null}
          </div>
        </div>
      </div>
    </div>;
};