import React, { useState } from 'react';
import { Modal } from '../ui/Modal';

export const AppReviewModal = ({ app, onSave, onClose, adminName }) => {
  const [form, setForm] = useState({ ...app });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const statuses = ['Under Review', 'Verified', 'Pending Docs', 'Selected', 'Rejected'];

  return (
    <Modal
      title={`Review Application — ${app.name}`}
      onClose={onClose}
      size="lg"
      footer={
        <>
          <button onClick={onClose} className="px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors">
            Cancel
          </button>
          <button onClick={() => onSave({ ...form, verifiedBy: adminName })} className="px-4 py-2 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors">
            Save Changes
          </button>
        </>
      }
    >
      <div className="space-y-6">
        <div className="glass rounded-lg p-4 border-l-4 border-[#00C2FF]">
          <p className="text-sm text-white/70">
            Application ID: <strong>{app.id}</strong> · Submitted: {app.date}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/70 mb-2">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Date of Birth</label>
            <input
              type="date"
              value={form.dob}
              onChange={(e) => handleChange('dob', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">State</label>
            <input
              type="text"
              value={form.state}
              onChange={(e) => handleChange('state', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Education</label>
            <input
              type="text"
              value={form.education}
              onChange={(e) => handleChange('education', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Height (cm)</label>
            <input
              type="number"
              value={form.height}
              onChange={(e) => handleChange('height', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={form.weight}
              onChange={(e) => handleChange('weight', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Phone</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Force</label>
            <select
              value={form.force}
              onChange={(e) => handleChange('force', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            >
              <option>Army</option>
              <option>Navy</option>
              <option>Air Force</option>
              <option>Coast Guard</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Trade</label>
            <select
              value={form.trade}
              onChange={(e) => handleChange('trade', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            >
              <option>Agniveer GD</option>
              <option>Agniveer Tech</option>
              <option>Agniveer Tradesman</option>
              <option>Agniveer Clerk</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">Application Status</label>
          <select
            value={form.status}
            onChange={(e) => handleChange('status', e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
          >
            {statuses.map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">Reviewer Notes</label>
          <textarea
            rows={4}
            placeholder="Add notes, reasons for rejection, or additional comments..."
            value={form.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF] resize-none"
          />
        </div>
      </div>
    </Modal>
  );
};

export default AppReviewModal;
