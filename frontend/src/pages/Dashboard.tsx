import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Activity, Users, TrendingUp, AlertCircle, Clock, DollarSign } from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { ActivityChart } from '../components/ActivityChart';
import { RecentTasks } from '../components/RecentTasks';
import { SystemHealth } from '../components/SystemHealth';

interface DashboardMetrics {
  totalAgents: number;
  activeAgents: number;
  tasksCompleted: number;
  avgRelevanceScore: number;
  totalTransactions: number;
  systemHealth: 'healthy' | 'warning' | 'critical';
}

const fetchDashboardMetrics = async (): Promise<DashboardMetrics> => {
  // Mock API call - replace with actual endpoint
  return {
    totalAgents: 12,
    activeAgents: 8,
    tasksCompleted: 156,
    avgRelevanceScore: 0.82,
    totalTransactions: 24.5,
    systemHealth: 'healthy'
  };
};

export const Dashboard: React.FC = () => {
  const { data: metrics, isLoading, error } = useQuery({
    queryKey: ['dashboard-metrics'],
    queryFn: fetchDashboardMetrics,
  });

  if (isLoading) return <div className="p-6">Loading dashboard...</div>;
  if (error) return <div className="p-6 text-red-500">Error loading dashboard</div>;

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Project Chimera Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Agents"
          value={metrics?.totalAgents || 0}
          icon={Users}
          change={{ value: 2, type: 'increase' }}
          description="Active AI agents in system"
        />
        <MetricCard
          title="Active Now"
          value={metrics?.activeAgents || 0}
          icon={Activity}
          change={{ value: 1, type: 'increase' }}
          description="Currently processing tasks"
        />
        <MetricCard
          title="Tasks Completed"
          value={metrics?.tasksCompleted || 0}
          icon={TrendingUp}
          change={{ value: 15, type: 'increase' }}
          description="Last 24 hours"
        />
        <MetricCard
          title="Avg Relevance"
          value={(metrics?.avgRelevanceScore || 0).toFixed(2)}
          icon={AlertCircle}
          change={{ value: 0.05, type: 'increase' }}
          description="Content relevance score"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />
        <RecentTasks />
      </div>

      {/* System Health and Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SystemHealth health={metrics?.systemHealth || 'healthy'} />
        <MetricCard
          title="Total Transactions"
          value={`$${metrics?.totalTransactions || 0}`}
          icon={DollarSign}
          change={{ value: 3.2, type: 'increase' }}
          description="Crypto transactions volume"
        />
      </div>
    </div>
  );
};
