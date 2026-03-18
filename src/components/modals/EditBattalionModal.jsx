import React, { useState } from 'react';
import { Modal } from '../ui/Modal';

export const EditBattalionModal = ({ battalion, onSave, onClose }) => {
  const [form, setForm] = useState({ ...battalion });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Modal
      title={`Edit Battalion — ${battalion.name}`}
      onClose={onClose}
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
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/70 mb-2">Battalion Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Code</label>
            <input
              type="text"
              value={form.code}
              onChange={(e) => handleChange('code', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Commander</label>
            <input
              type="text"
              value={form.commander}
              onChange={(e) => handleChange('commander', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Commander Phone</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Location</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Capacity</label>
            <input
              type="number"
              value={form.capacity}
              onChange={(e) => handleChange('capacity', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-2">Mission</label>
          <input
            type="text"
            value={form.mission}
            onChange={(e) => handleChange('mission', e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditBattalionModal;
