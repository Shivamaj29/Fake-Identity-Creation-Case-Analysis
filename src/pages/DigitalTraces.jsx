import React from 'react';
import { Camera, MapPin, Clock, MessageSquare, Terminal } from 'lucide-react';

export default function DigitalTraces() {
  const traces = [
    {
      title: 'Image Forensics & GAN Artifacts',
      icon: Camera,
      description: 'AI-generated faces often have mismatched earrings, asymmetrical glasses, or blurred backgrounds. Reverse image searching can reveal stock photos.',
      example: 'Examining the "pupil alignment" which is often perfectly centered in GAN-generated images.'
    },
    {
      title: 'EXIF & Metadata Analysis',
      icon: Terminal,
      description: 'Images uploaded to certain platforms retain EXIF data showing the original capture device, time, and occasionally GPS coordinates.',
      example: 'A profile claiming to be in London uploads a photo with GPS coordinates tracing back to a server farm in another country.'
    },
    {
      title: 'Geolocation Mismatches',
      icon: MapPin,
      description: 'Analyzing IP addresses from email headers or clicked canary links to verify physical location claims.',
      example: 'Login times and IP blocks do not match the persona\'s stated timezone.'
    },
    {
      title: 'Behavioral & Temporal Anomalies',
      icon: Clock,
      description: 'Bots or farmed accounts often post at inhuman frequencies or at times inconsistent with their local timezone.',
      example: 'Posting 500 tweets a day exactly at 5-minute intervals.'
    },
    {
      title: 'Linguistic & Stylometric Analysis',
      icon: MessageSquare,
      description: 'Using NLP to detect copied-and-pasted scam scripts, translation software artifacts, or inconsistent language proficiency.',
      example: 'Sudden shift from broken English to highly formal, template-based requests for money.'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Digital Traces Analyzer</h1>
        <p className="text-xl text-slate-600 mt-3 font-medium">Key forensic indicators used to identify inauthentic profiles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {traces.map((trace, idx) => {
          const Icon = trace.icon;
          return (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary-50 text-primary-600 border border-primary-100">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{trace.title}</h3>
              </div>
              <p className="text-lg text-slate-600 mb-6 flex-1 leading-relaxed">
                {trace.description}
              </p>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-inner">
                <span className="text-sm font-bold text-primary-700 uppercase tracking-widest block mb-2">Example Indicator</span>
                <p className="text-base text-slate-700 italic font-medium">"{trace.example}"</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
