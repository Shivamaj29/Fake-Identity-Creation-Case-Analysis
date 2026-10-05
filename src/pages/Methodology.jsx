import React from 'react';
import { methodologies } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';

export default function Methodology() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Investigation Methodology</h1>
        <p className="text-xl text-slate-600 mt-4 font-medium">Standardized workflow for identifying and analyzing fake identities.</p>
      </div>

      <div className="relative border-l-4 border-slate-200 ml-4 md:ml-8 space-y-16 pb-12">
        {methodologies.map((step) => (
          <div key={step.step} className="relative pl-10 md:pl-16">
            <div className="absolute -left-[24px] bg-white p-1 rounded-full border-4 border-primary-500 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-black text-lg">
                {step.step}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:border-primary-300 transition-colors hover:shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium">{step.description}</p>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key Actions</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg text-slate-700 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
