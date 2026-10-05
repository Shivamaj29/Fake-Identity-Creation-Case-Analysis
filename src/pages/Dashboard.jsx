import React from 'react';
import { Activity, Users, AlertTriangle, Search } from 'lucide-react';
import { caseStudies } from '../data/mockData';

export default function Dashboard() {
  const stats = [
    { name: 'Total Cases Analyzed', value: '142', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
    { name: 'Fake Profiles Identified', value: '8,439', icon: Users, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
    { name: 'Active Threats', value: '12', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
    { name: 'Ongoing Investigations', value: '4', icon: Search, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-xl text-slate-600 mt-3 font-medium">Welcome to the Fake Identity Creation Case Analysis portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 transition-shadow hover:shadow-md">
              <div className={`p-4 rounded-xl border ${stat.bg} ${stat.border} ${stat.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-base text-slate-500 font-medium">{stat.name}</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Case Studies</h2>
          <div className="space-y-5">
            {caseStudies.map(study => (
              <div key={study.id} className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary-300 hover:shadow-sm transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{study.title}</h3>
                  <span className="text-sm px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 border border-primary-200 font-semibold">
                    {study.type}
                  </span>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Traces</h2>
          <ul className="space-y-4">
            {['AI-Generated Imagery', 'EXIF Data Anomalies', 'IP Geolocation Mismatch', 'Recycled Biographies', 'Bot-like Posting Patterns'].map((trace, i) => (
              <li key={i} className="flex items-center gap-4 text-lg text-slate-700 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="w-3 h-3 rounded-full bg-primary-500 shadow-sm"></div>
                {trace}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
