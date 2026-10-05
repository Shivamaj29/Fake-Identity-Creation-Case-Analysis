import React, { useState } from 'react';
import { caseStudies } from '../data/mockData';
import { FileText, Calendar, Building2, User } from 'lucide-react';
import clsx from 'clsx';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  return (
    <div className="space-y-8 h-[calc(100vh-8rem)] flex flex-col">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Case Studies</h1>
        <p className="text-xl text-slate-600 mt-3 font-medium">In-depth analysis of notable fake identity creation instances.</p>
      </div>

      <div className="flex gap-8 flex-1 min-h-0">
        {/* Case List */}
        <div className="w-1/3 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-y-auto p-5 space-y-4">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedCase(study)}
              className={clsx(
                "w-full text-left p-5 rounded-xl border transition-all duration-200",
                selectedCase.id === study.id
                  ? "bg-primary-50 border-primary-300 shadow-sm ring-1 ring-primary-200"
                  : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              )}
            >
              <h3 className={clsx("text-lg font-bold", selectedCase.id === study.id ? "text-primary-800" : "text-slate-800")}>
                {study.title}
              </h3>
              <p className="text-sm text-slate-500 mt-2 font-medium">{study.platform}</p>
            </button>
          ))}
        </div>

        {/* Case Details */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 overflow-y-auto">
          {selectedCase ? (
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{selectedCase.title}</h2>
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {selectedCase.type}
                  </span>
                </div>
                <div className="flex items-center text-base font-medium text-slate-500 gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  {selectedCase.date}
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-lg text-slate-700 leading-relaxed shadow-inner">
                {selectedCase.description}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Fake Persona Profile</h4>
                  <div className="space-y-4 text-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <User className="w-5 h-5 text-slate-600" />
                      </div>
                      <span className="text-slate-800 font-semibold">{selectedCase.persona.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Building2 className="w-5 h-5 text-slate-600" />
                      </div>
                      <span className="text-slate-800 font-medium">{selectedCase.persona.jobTitle} at {selectedCase.persona.company}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Identified Traces</h4>
                  <ul className="space-y-3">
                    {selectedCase.traces.map((trace, idx) => (
                      <li key={idx} className="text-lg text-slate-700 flex items-start gap-3">
                        <span className="text-primary-600 mt-1 font-bold text-xl">•</span>
                        <span>{trace}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 inline-flex">
                 <span className="text-base font-semibold text-slate-600">Investigation Status:</span>
                 <span className={clsx("text-base font-bold px-3 py-1 rounded-md", 
                   selectedCase.status === 'Resolved' ? 'bg-green-100 text-green-700 border border-green-200' : 
                   selectedCase.status === 'Neutralized' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 
                   'bg-yellow-100 text-yellow-700 border border-yellow-200'
                 )}>
                   {selectedCase.status}
                 </span>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400">
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-20 text-slate-900" />
                <p className="text-xl font-medium">Select a case study to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
