import React from 'react';

interface RecentTask {
  id: string;
  title: string;
  agent: string;
  status: 'completed' | 'in_progress' | 'pending';
  timestamp: string;
}

const mockTasks: RecentTask[] = [
  { id: '1', title: 'Generate trending content', agent: 'Agent Alpha', status: 'completed', timestamp: '2 min ago' },
  { id: '2', title: 'Analyze market trends', agent: 'Agent Beta', status: 'in_progress', timestamp: '5 min ago' },
  { id: '3', title: 'Publish to social media', agent: 'Agent Gamma', status: 'pending', timestamp: '10 min ago' },
];

export const RecentTasks: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Tasks</h3>
      <div className="space-y-3">
        {mockTasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">{task.title}</p>
              <p className="text-sm text-gray-500">{task.agent} • {task.timestamp}</p>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
              {task.status.replace('_', ' ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
