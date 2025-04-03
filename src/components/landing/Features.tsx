import React from 'react';
import { Heart, Calendar, Shield } from 'lucide-react';
import FeatureCard from '../features/FeatureCard';

const features = [
  {
    icon: Heart,
    title: 'Patient Monitoring',
    description: 'Track patient progress and vital information throughout their pregnancy journey.',
  },
  {
    icon: Calendar,
    title: 'Appointment Management',
    description: 'Schedule and manage checkups with automated reminders for both doctors and patients.',
  },
  {
    icon: Shield,
    title: 'Emergency Response',
    description: 'Quick response system for emergency situations with real-time notifications.',
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to provide excellent care
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}