import React from 'react';
import { useQuery } from 'react-query';
import { Users, AlertTriangle, Calendar } from 'lucide-react';
import axios from 'axios';
import StatsCard from '../components/StatsCard';
import AlertsList from '../components/AlertsList';
import UpcomingCheckups from '../components/UpcomingCheckups';

export default function Dashboard() {
  const { data: stats } = useQuery('stats', async () => {
    const res = await axios.get('/api/stats');
    return res.data;
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Patients"
          value={stats?.totalPatients || 0}
          icon={Users}
          trend={+5}
        />
        <StatsCard
          title="Active Alerts"
          value={stats?.activeAlerts || 0}
          icon={AlertTriangle}
          trend={-2}
        />
        <StatsCard
          title="Upcoming Checkups"
          value={stats?.upcomingCheckups || 0}
          icon={Calendar}
          trend={+3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <AlertsList limit={5} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Upcoming Checkups</h2>
          <UpcomingCheckups limit={5} />
        </div>
      </div>
    </div>
  );
}