import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface SystemHealthProps {
  health: 'healthy' | 'warning' | 'critical';
}

export const SystemHealth: React.FC<SystemHealthProps> = ({ health }) => {
  const getHealthConfig = () => {
    switch (health) {
      case 'healthy':
        return {
          icon: CheckCircle,
          color: 'text-green-600',
          bgColor: 'bg-green-100',
          status: 'All Systems Operational'
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100',
          status: 'Minor Issues Detected'
        };
      case 'critical':
        return {
          icon: XCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-100',
          status: 'Critical Issues Require Attention'
        };
    }
  };

  const config = getHealthConfig();
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
      <div className={`flex items-center p-4 rounded-lg ${config.bgColor}`}>
        <Icon className={`h-8 w-8 ${config.color} mr-3`} />
        <div>
          <p className={`font-medium ${config.color}`}>{config.status}</p>
          <p className="text-sm text-gray-600 mt-1">
            {health === 'healthy' && 'All services running normally'}
            {health === 'warning' && 'Some services experiencing delays'}
            {health === 'critical' && 'Multiple services require immediate attention'}
          </p>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Agent Response Time</span>
          <span className="font-medium">{health === 'healthy' ? '45ms' : health === 'warning' ? '120ms' : '350ms'}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Task Queue</span>
          <span className="font-medium">{health === 'healthy' ? '12 pending' : health === 'warning' ? '45 pending' : '120+ pending'}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Error Rate</span>
          <span className="font-medium">{health === 'healthy' ? '0.1%' : health === 'warning' ? '2.3%' : '8.7%'}</span>
        </div>
      </div>
    </div>
  );
};
