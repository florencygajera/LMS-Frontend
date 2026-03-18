import React, { useState } from 'react';
import { Modal } from '../ui/Modal';

export const SOSTriggerModal = ({ battalions, onSave, onClose, adminName }) => {
  const [form, setForm] = useState({ type: 'Emergency', battalionId: 'all', message: '' });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleTrigger = () => {
    if (!form.message.trim()) {
      alert('Please enter an alert message.');
      return;
    }

    const newId = 'SOS-' + String(Math.floor(Math.random() * 9000) + 1000);
    const bat = form.battalionId === 'all' ? null : parseInt(form.battalionId);
    const batName = form.battalionId === 'all' 
      ? 'All Battalions' 
      : battalions.find(b => b.id === parseInt(form.battalionId))?.name || '—';
    
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
      now.getMinutes().toString().padStart(2, '0') + ' hrs, ' + 
      now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    onSave({
      id: newId,
      type: form.type,
      battalionId: bat,
      battalionName: batName,
      message: form.message,
      triggeredAt: timeStr,
      triggeredBy: adminName,
      status: 'active',
      resolvedAt: ''
    });
  };

  return (
    <Modal
      title="🚨 Trigger New SOS Alert"
      onClose={onClose}
      footer={
        <>
          <button onClick={onClose} className="px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors">
            Cancel
          </button>
          <button onClick={handleTrigger} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
            Trigger Alert
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <div className="glass rounded-lg p-4 border-l-4 border-red-500">
          <p className="text-red-400 text-sm">
            Warning: This will immediately notify all personnel in the selected unit. Use only when authorised.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/70 mb-2">Alert Type</label>
            <select
              value={form.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500"
            >
              <option>Emergency</option>
              <option>Drill</option>
              <option>Test</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Target Unit</label>
            <select
              value={form.battalionId}
              onChange={(e) => handleChange('battalionId', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500"
            >
              <option value="all">All Battalions</option>
              {battalions.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">Alert Message</label>
          <textarea
            rows={4}
            placeholder="Describe the emergency or drill instructions..."
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-red-500 resize-none"
          />
        </div>
      </div>
    </Modal>
  );
};

export default SOSTriggerModal;
