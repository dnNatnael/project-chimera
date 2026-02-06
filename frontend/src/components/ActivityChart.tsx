import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '00:00', tasks: 12, relevance: 0.75 },
  { time: '04:00', tasks: 8, relevance: 0.82 },
  { time: '08:00', tasks: 24, relevance: 0.88 },
  { time: '12:00', tasks: 32, relevance: 0.91 },
  { time: '16:00', tasks: 28, relevance: 0.86 },
  { time: '20:00', tasks: 18, relevance: 0.79 },
];

export const ActivityChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">24h Activity</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="tasks" 
            stroke="#3B82F6" 
            strokeWidth={2}
            name="Tasks Completed"
          />
          <Line 
            type="monotone" 
            dataKey="relevance" 
            stroke="#10B981" 
            strokeWidth={2}
            name="Avg Relevance"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
