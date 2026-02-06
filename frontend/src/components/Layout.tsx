import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, CheckSquare, FileText, TrendingUp, Shield } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Agents', href: '/agents', icon: Users },
    { name: 'Tasks', href: '/tasks', icon: CheckSquare },
    { name: 'Content', href: '/content', icon: FileText },
    { name: 'Trends', href: '/trends', icon: TrendingUp },
    { name: 'Security', href: '/security', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Chimera</h1>
            <p className="text-sm text-gray-500 mt-1">Agent Management System</p>
          </div>
          
          <nav className="mt-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  {navigation.find(item => item.href === location.pathname)?.name || 'Dashboard'}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    System Status: <span className="text-green-600 font-medium">Operational</span>
                  </span>
                </div>
              </div>
            </div>
          </header>
          
          <main>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
