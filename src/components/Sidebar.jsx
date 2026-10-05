import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Fingerprint, Route, ShieldAlert } from 'lucide-react';
import clsx from 'clsx';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Case Studies', path: '/cases', icon: Users },
    { name: 'Digital Traces', path: '/traces', icon: Fingerprint },
    { name: 'Methodology', path: '/methodology', icon: Route },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col h-screen sticky top-0 shadow-sm">
      <div className="h-20 flex items-center px-8 border-b border-slate-200">
        <ShieldAlert className="w-8 h-8 text-primary-600 mr-3" />
        <span className="text-slate-900 font-bold text-xl tracking-tight">IdentityGuard</span>
      </div>
      <nav className="flex-1 py-8 flex flex-col gap-3 px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-lg font-medium',
                  isActive
                    ? 'bg-primary-50 text-primary-700 shadow-sm border border-primary-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )
              }
            >
              <Icon className="w-6 h-6" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      <div className="p-6 border-t border-slate-200 bg-slate-50">
        <p className="text-sm text-slate-500 font-medium">Case Analysis Tool v1.0</p>
      </div>
    </aside>
  );
}
