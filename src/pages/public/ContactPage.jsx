import React from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const ContactPage = ({ onNavigate }) => {
  const contacts = [
    { type: 'Helpline (Toll Free)', value: '1800-115-558', available: '24/7' },
    { type: 'Email', value: 'support@agnipath.gov.in', available: '24-48 hrs response' },
    { type: 'WhatsApp', value: '+91-9876543210', available: '9 AM - 6 PM' }
  ];

  const offices = [
    { city: 'Delhi HQ', address: 'Army HQ, South Block, Raisina Hill', phone: '+91-11-23018989' },
    { city: 'Pune', address: 'Army Training Command, Koregaon Park', phone: '+91-20-26126111' },
    { city: 'Lucknow', address: 'Central Command, Cantt Area', phone: '+91-522-2481100' },
    { city: 'Jammu', address: 'Northern Command, Udhampur', phone: '+91-191-2560100' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Contact Us</h1>
        <p className="text-white/50">Get in touch with our support team</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {contacts.map((c, i) => (
          <div key={i} className="glass rounded-xl p-6 text-center">
            <p className="text-xs text-white/50 uppercase tracking-wider mb-2">{c.type}</p>
            <p className="text-xl font-bold text-white">{c.value}</p>
            <p className="text-sm text-[#00C2FF] mt-2">{c.available}</p>
          </div>
        ))}
      </div>

      <Card title="Send us a Message">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Subject</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]">
              <option>General Query</option>
              <option>Application Status</option>
              <option>Technical Issue</option>
              <option>Grievance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF] resize-none"
            />
          </div>
          <button className="w-full py-3 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors">
            Send Message
          </button>
        </div>
      </Card>

      <Card title="Regional Offices">
        <div className="grid md:grid-cols-2 gap-4">
          {offices.map((o, i) => (
            <div key={i} className="glass rounded-lg p-4">
              <p className="font-bold text-white">{o.city}</p>
              <p className="text-sm text-white/60 mt-1">{o.address}</p>
              <p className="text-sm text-[#00C2FF] mt-2">{o.phone}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
