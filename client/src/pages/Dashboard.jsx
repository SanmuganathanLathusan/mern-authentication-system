import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiUser, FiMail, FiCalendar, FiShield } from 'react-icons/fi';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Format date if available
  const joinDate = user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : 'Recently joined';

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-600 to-indigo-600 h-32 sm:h-40"></div>
          <div className="px-6 sm:px-10 pb-8 relative">
            <div className="relative -mt-16 sm:-mt-20 mb-4">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full p-2 shadow-lg">
                <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-primary-600">
                  <span className="text-4xl sm:text-6xl font-bold uppercase">
                    {user.name ? user.name.charAt(0) : 'U'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
              <p className="text-slate-500 font-medium flex items-center gap-2 mt-1">
                <FiMail className="w-4 h-4" /> {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
              <FiShield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Account Status</h3>
              <p className="text-lg font-semibold text-slate-900 mt-1 flex items-center gap-2">
                Active <span className="flex w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
              <FiCalendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Member Since</h3>
              <p className="text-lg font-semibold text-slate-900 mt-1">{joinDate}</p>
            </div>
          </div>
        </div>
        
        {/* User Raw Data (For debug/demo) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FiUser className="w-5 h-5 text-primary-600" /> User Profile Data
          </h3>
          <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm text-emerald-400 font-mono">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
