import React from 'react';
import { ArrowLeft, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
export const RecruiterAgent = () => {
  // Mock data for the user table
  const users = [{
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    phone: '+1 (555) 123-4567',
    company: 'Tech Innovations Inc.'
  }, {
    id: 2,
    firstName: 'Sarah',
    lastName: 'Johnson',
    phone: '+1 (555) 987-6543',
    company: 'Global Solutions Ltd.'
  }, {
    id: 3,
    firstName: 'Michael',
    lastName: 'Williams',
    phone: '+1 (555) 456-7890',
    company: 'Future Systems'
  }, {
    id: 4,
    firstName: 'Emily',
    lastName: 'Brown',
    phone: '+1 (555) 234-5678',
    company: 'Creative Designs Co.'
  }, {
    id: 5,
    firstName: 'David',
    lastName: 'Jones',
    phone: '+1 (555) 876-5432',
    company: 'Data Analytics Group'
  }, {
    id: 6,
    firstName: 'Jessica',
    lastName: 'Miller',
    phone: '+1 (555) 345-6789',
    company: 'Smart Solutions Inc.'
  }, {
    id: 7,
    firstName: 'Daniel',
    lastName: 'Davis',
    phone: '+1 (555) 654-3210',
    company: 'Innovative Tech Corp'
  }, {
    id: 8,
    firstName: 'Lisa',
    lastName: 'Garcia',
    phone: '+1 (555) 789-0123',
    company: 'Strategic Partners LLC'
  }];
  return <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <Link to="/store" className="flex items-center text-blue-600 hover:underline">
          <ArrowLeft size={16} className="mr-1" />
          Back to Agent Store
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">👔</div>
          <h1 className="text-2xl font-bold">Recruiter Agent</h1>
        </div>
        <p className="text-gray-600 mb-6">
          Manage your candidate database efficiently with the Recruiter Agent.
          Keep track of potential candidates, their contact information, and
          current employers.
        </p>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Candidate Database</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left border-b">First Name</th>
                  <th className="py-3 px-4 text-left border-b">Last Name</th>
                  <th className="py-3 px-4 text-left border-b">Phone Number</th>
                  <th className="py-3 px-4 text-left border-b">Company</th>
                  <th className="py-3 px-4 text-left border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => <tr key={user.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{user.firstName}</td>
                    <td className="py-3 px-4 border-b">{user.lastName}</td>
                    <td className="py-3 px-4 border-b">{user.phone}</td>
                    <td className="py-3 px-4 border-b">{user.company}</td>
                    <td className="py-3 px-4 border-b">
                      <button className="flex items-center text-blue-600 hover:text-blue-800">
                        <PhoneCall size={16} className="mr-1" />
                        Call
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
            <span>Showing {users.length} candidates</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Export Data
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add New Candidate
            </button>
          </div>
        </div>
      </div>
    </div>;
};