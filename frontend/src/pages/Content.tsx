import React from 'react';

export const Content: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Content Management</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Content management interface will be implemented here.</p>
        <p className="text-sm text-gray-500 mt-2">Features: Content creation, moderation, publishing, analytics</p>
      </div>
    </div>
  );
};
