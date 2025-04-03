import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const title = getPageTitle(location.pathname);

  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case '/':
      return 'Dashboard';
    case '/patients':
      return 'Patients';
    case '/alerts':
      return 'Alerts';
    default:
      if (pathname.startsWith('/patients/')) {
        return 'Patient Details';
      }
      return 'Maisha Health';
  }
}