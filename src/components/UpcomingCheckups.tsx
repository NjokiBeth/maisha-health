import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { format } from 'date-fns';
import { LoadingSpinner } from './ui/LoadingSpinner';

interface Checkup {
  _id: string;
  patient: {
    name: string;
  };
  date: string;
}

interface UpcomingCheckupsProps {
  limit?: number;
}

export default function UpcomingCheckups({ limit }: UpcomingCheckupsProps) {
  const { data: checkups, isLoading } = useQuery(['checkups', limit], async () => {
    const res = await axios.get(`/api/checkups${limit ? `?limit=${limit}` : ''}`);
    return res.data;
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="space-y-4">
      {checkups?.map((checkup: Checkup) => (
        <div key={checkup._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{checkup.patient.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(checkup.date), 'PPP')}
            </p>
          </div>
          <span className="px-3 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full">
            {format(new Date(checkup.date), 'p')}
          </span>
        </div>
      ))}
    </div>
  );
}