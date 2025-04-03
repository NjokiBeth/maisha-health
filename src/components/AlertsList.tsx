import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';

interface AlertsListProps {
  limit?: number;
}

export default function AlertsList({ limit }: AlertsListProps) {
  const { data: alerts, isLoading } = useQuery(['alerts', limit], async () => {
    const res = await axios.get(`/api/alerts${limit ? `?limit=${limit}` : ''}`);
    return res.data;
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {alerts?.map((alert: any) => (
        <div key={alert._id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <p className="font-medium text-gray-900">{alert.patient.name}</p>
            <p className="text-sm text-gray-500">{alert.message}</p>
            <p className="text-xs text-gray-400 mt-1">
              {formatDistanceToNow(new Date(alert.createdAt), { addSuffix: true })}
            </p>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(alert.status)}`}>
            {alert.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800';
    case 'resolved':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}