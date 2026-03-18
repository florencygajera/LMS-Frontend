import React, { useState } from 'react';
import { Modal } from '../ui/Modal';

export const EditSoldierModal = ({ soldier, onSave, onClose }) => {
  const [form, setForm] = useState({ ...soldier, scores: { ...soldier.scores } });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleScoreChange = (field, value) => {
    setForm(prev => ({
      ...prev,
      scores: { ...prev.scores, [field]: Math.min(100, Math.max(0, parseInt(value) || 0)) }
    }));
  };

  const handleEmergencyChange = (field, value) => {
    setForm(prev => ({
      ...prev,
      emergency: { ...prev.emergency, [field]: value }
    }));
  };

  const statuses = ['active', 'on_leave', 'inactive'];
  const scoreFields = [
    ['physical', 'Physical Fitness'],
    ['weapons', 'Weapons Handling'],
    ['mental', 'Mental Resilience'],
    ['combat', 'Combat Drills'],
    ['attendance', 'Attendance'],
    ['discipline', 'Discipline']
  ];

  return (
    <Modal
      title={`Edit Soldier — ${soldier.name}`}
      onClose={onClose}
      size="lg"
      footer={
        <>
          <button onClick={onClose} className="px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors">
            Cancel
          </button>
          <button onClick={() => onSave(form)} className="px-4 py-2 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors">
            Save Changes
          </button>
        </>
      }
    >
      <div className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            Personal Information
          </h3>
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
              <label className="block text-sm text-white/70 mb-2">Rank</label>
              <select
                value={form.rank}
                onChange={(e) => handleChange('rank', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              >
                <option>Sepoy</option>
                <option>Lance Naik</option>
                <option>Naik</option>
                <option>Havildar</option>
              </select>
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
              <label className="block text-sm text-white/70 mb-2">City</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => handleChange('city', e.target.value)}
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
              <label className="block text-sm text-white/70 mb-2">Blood Group</label>
              <select
                value={form.blood}
                onChange={(e) => handleChange('blood', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              >
                {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(b => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Service Status</label>
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
          </div>
          <div className="mt-4">
            <label className="block text-sm text-white/70 mb-2">Medical Status</label>
            <input
              type="text"
              value={form.medical}
              onChange={(e) => handleChange('medical', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
        </div>

        {/* Training Scores */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            Training Scores (0–100)
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {scoreFields.map(([key, label]) => (
              <div key={key}>
                <label className="block text-sm text-white/70 mb-2">{label}</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={form.scores[key]}
                  onChange={(e) => handleScoreChange(key, e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            Emergency Contact
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Name</label>
              <input
                type="text"
                value={form.emergency.name}
                onChange={(e) => handleEmergencyChange('name', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Phone</label>
              <input
                type="text"
                value={form.emergency.phone}
                onChange={(e) => handleEmergencyChange('phone', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Relation</label>
              <input
                type="text"
                value={form.emergency.relation}
                onChange={(e) => handleEmergencyChange('relation', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditSoldierModal;
