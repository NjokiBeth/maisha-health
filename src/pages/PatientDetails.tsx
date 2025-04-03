import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { format } from 'date-fns';
import { Calendar, Clock, AlertTriangle } from 'lucide-react';

export default function PatientDetails() {
  const { id } = useParams();
  const { data: patient, isLoading } = useQuery(['patient', id], async () => {
    const res = await axios.get(`/api/patients/${id}`);
    return res.data;
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Patient Information
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">{patient.name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Phone number</dt>
              <dd className="mt-1 text-sm text-gray-900">{patient.phoneNumber}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Due date</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {format(new Date(patient.estimated_delivery), 'PPP')}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Next checkup</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {format(new Date(patient.checkup_dates[0]), 'PPP')}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Recent Alerts
            </h3>
          </div>
          <div className="border-t border-gray-200">
            {/* Add AlertsList component with patient filter */}
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Medical Advice
            </h3>
          </div>
          <div className="border-t border-gray-200">
            {/* Add AdviceList component */}
          </div>
        </div>
      </div>
    </div>
  );
}