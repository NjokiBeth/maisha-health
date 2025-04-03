import React from 'react';
import { LucideIcon } from 'lucide-react';
import { formatNumber } from '../utils/format';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: number;
}

export default function StatsCard({ title, value, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
          <Icon className="h-6 w-6" />
        </div>
        <div className="ml-5">
          <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {formatNumber(value)}
          </p>
        </div>
      </div>
      {trend !== undefined && (
        <div className="mt-4">
          <span className={`text-sm ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
          <span className="text-sm text-gray-500"> from last month</span>
        </div>
      )}
    </div>
  );
}