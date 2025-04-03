import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Bell, LogOut } from 'lucide-react';
import clsx from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Patients', href: '/patients', icon: Users },
  { name: 'Alerts', href: '/alerts', icon: Bell },
];

export default function Sidebar() {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-indigo-700">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4 bg-indigo-800">
          <h1 className="text-xl font-bold text-white">Maisha Health</h1>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                'flex items-center px-4 py-2 text-sm font-medium rounded-md',
                location.pathname === item.href
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-600'
              )}
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-600 rounded-md"
          >
            <LogOut className="mr-3 h-6 w-6" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}