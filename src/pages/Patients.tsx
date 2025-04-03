import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';

export default function Patients() {
  const { data: patients, isLoading } = useQuery('patients', async () => {
    const res = await axios.get('/api/patients');
    return res.data;
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">All Patients</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Assign New Patient
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {patients?.map((patient: any) => (
            <li key={patient._id}>
              <Link to={`/patients/${patient._id}`} className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {patient.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Due Date: {format(new Date(patient.estimated_delivery), 'PPP')}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}