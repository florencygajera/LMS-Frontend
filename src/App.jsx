import { useState, useEffect } from 'react';
import { GovStrip, SiteHeader, Navbar, Ticker, MainLayout } from './components/layout';
import { StatCard, Panel, ScoreBar, Badge, Alert, Button } from './components/ui';
import { Modal } from './components/ui';
import { Input, Select, Textarea, FormRow } from './components/ui';
import { Table } from './components/ui';
import { useAuth } from './context/AuthContext';
import { useAppData, overall, grade, fillCls, scoreColor, getInsights, INIT_BATTALIONS, INIT_SOLDIERS, INIT_APPLICATIONS, INIT_SOS } from './context/AppDataContext';

// Landing Page Component
const LandingPage = ({ setPage }) => {
  const notices = [
    { t: 'Agnipath Recruitment Rally 2025 — Online applications open till 31 March 2025', d: '10 Mar 2025', isNew: true },
    { t: 'Physical Fitness Test date for Batch 2025-A — 15 April 2025', d: '08 Mar 2025', isNew: true },
    { t: 'March stipend disbursed for all active Agniveers', d: '28 Feb 2025', isNew: false },
    { t: 'New training module: Advanced Weapons Handling from April 2025', d: '25 Feb 2025', isNew: false },
  ];
  const features = [
    { ic: '📋', t: 'Online Application', d: 'Apply for Agnipath recruitment digitally.' },
    { ic: '🎫', t: 'Admit Card', d: 'Download hall ticket post verification.' },
    { ic: '💪', t: 'Training Tracking', d: 'Track physical, weapons, mental performance.' },
    { ic: '📊', t: 'Performance Analytics', d: 'Scores, rankings, and improvement plans.' },
    { ic: '🏥', t: 'Medical Records', d: 'Secure health history.' },
    { ic: '💰', t: 'Stipend Portal', d: 'Monthly pay slips and fund tracking.' },
  ];

  return (
    <>
      <Ticker />
      <div className="bg-[#344228] text-white py-12">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex items-center gap-10 flex-wrap">
            <div className="flex-1 min-w-[280px]">
              <div className="text-[11px] tracking-[3px] uppercase text-white/60 mb-2.5 flex items-center gap-2">
                <div className="w-5 h-0.5 bg-[#c8601a]" />Indian Army — Agnipath Scheme
              </div>
              <h1 className="font-serif text-[36px] font-bold leading-[1.2] mb-2.5">
                Agniveer<br />
                <span style={{ color: '#c8601a' }}>Official Portal</span><br />Agnipath Scheme 2025
              </h1>
              <p className="text-[15px] text-white/75 max-w-[520px] leading-relaxed mb-6">
                Complete digital platform managing Agnipath scheme — recruitment, training, medical, performance analytics, and stipend for all serving Agniveers.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <Button variant="saffron" onClick={() => setPage('register')}>Apply Now</Button>
                <Button variant="out" onClick={() => setPage('login')} className="text-white border-white/30 hover:bg-white/10">Login to Portal</Button>
              </div>
            </div>
            <div className="w-[190px] h-[190px] rounded-full border border-white/15 flex items-center justify-center flex-shrink-0">
              <div className="w-[150px] h-[150px] rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center">
                <div className="text-[44px]">🛡️</div>
                <div className="font-serif text-[13px] font-bold">Indian Army</div>
                <div className="text-[10px] text-white/50 tracking-[2px] uppercase">Service Before Self</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a2d4a] text-white py-4.5 border-t-[3px] border-[#c8601a]">
        <div className="max-w-[1300px] mx-auto px-4 flex justify-around gap-5 flex-wrap">
          {[{ n: '46,000+', l: 'Applications' },{ n: '8,400+', l: 'Active Agniveers' },{ n: '4', l: 'Force Types' },{ n: '124', l: 'Training Centres' },{ n: '91%', l: 'Pass Rate 2024' }].map((s, i, arr) => (
            <React.Fragment key={i}>
              <div className="text-center"><div className="font-serif text-[26px] font-bold text-[#c8601a]">{s.n}</div><div className="text-[11px] text-white/60 tracking-wider uppercase mt-0.5">{s.l}</div></div>
              {i < arr.length - 1 && <div className="w-px bg-white/10" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="py-11 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-9">
          <div>
            <div className="text-[11px] tracking-[3px] text-[#c8601a] font-semibold uppercase mb-1">Official Notices</div>
            <div className="font-serif text-[22px] font-bold text-[#344228] border-l-[3px] border-[#c8601a] pl-2.5 mb-4">Announcements</div>
            {notices.map((n, i) => (
              <div key={i} className="flex gap-2.5 py-2 border-b border-[#eaeae5]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c8601a] mt-1.5 flex-shrink-0" />
                <div><div className="text-[13px] text-[#444] cursor-pointer">{n.t}{n.isNew && <span className="text-[10px] font-bold bg-[#c0392b] text-white px-1 ml-1">NEW</span>}</div><div className="text-[11px] text-[#777] mt-0.5">{n.d}</div></div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-[11px] tracking-[3px] text-[#c8601a] font-semibold uppercase mb-1">Platform Features</div>
            <div className="font-serif text-[22px] font-bold text-[#344228] border-l-[3px] border-[#c8601a] pl-2.5 mb-4">What You Can Do</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="bg-[#f5f5f0] border border-[#d0d0c8] border-t-[3px] border-t-[#4a5e3a] p-3.5">
                  <div className="text-[22px] mb-1.5">{f.ic}</div>
                  <div className="font-bold text-[14px] text-[#1a2d4a] mb-1">{f.t}</div>
                  <div className="text-[12px] text-[#777]">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a2d4a] text-white py-7">
        <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center flex-wrap gap-4">
          <div><div className="font-serif text-[20px] font-bold">Ready to serve the nation?</div><div className="text-[14px] text-white/70 mt-1">Agnipath Batch 2025 open. Last date: 31 March 2025.</div></div>
          <Button variant="saffron" onClick={() => setPage('register')}>Start Application</Button>
        </div>
      </div>
      <div className="bg-[#344228] text-white/80 py-7">
        <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div><div className="font-serif text-[15px] font-bold text-white mb-2">Agniveer — Agnipath</div><div className="text-[12px] text-white/60">Official portal of the Indian Army.</div></div>
          <div><div className="text-[13px] font-bold text-white mb-2">Quick Links</div>{['Home', 'About', 'Apply', 'Results'].map(l => <div key={l} className="text-[12px] text-white/60 mb-1 cursor-pointer">{l}</div>)}</div>
          <div><div className="text-[13px] font-bold text-white mb-2">Information</div>{['Eligibility', 'Standards', 'Documents', 'Salary'].map(l => <div key={l} className="text-[12px] text-white/60 mb-1 cursor-pointer">{l}</div>)}</div>
          <div><div className="text-[13px] font-bold text-white mb-2">Support</div>{['Help Desk', 'Contact', 'Grievance', 'RTI'].map(l => <div key={l} className="text-[12px] text-white/60 mb-1 cursor-pointer">{l}</div>)}</div>
        </div>
      </div>
    </>
  );
};

// Login Page Component
const LoginPage = ({ mode, setPage }) => {
  const [role, setRole] = useState('CANDIDATE');
  const { login } = useAuth();
  const roles = [{ k: 'CANDIDATE', l: 'Candidate' },{ k: 'SOLDIER', l: 'Soldier' },{ k: 'ADMIN', l: 'Admin' },{ k: 'TRAINER', l: 'Trainer' },{ k: 'DOCTOR', l: 'Doctor' }];
  const names = { CANDIDATE: 'Aryan Sharma', SOLDIER: 'Rajveer Singh Chauhan', ADMIN: 'Maj. Ankit Verma', TRAINER: 'Cpt. Pradeep Kumar', DOCTOR: 'Dr. Sunita Rao' };
  const dests = { CANDIDATE: 'candidate', SOLDIER: 'soldier', ADMIN: 'admin', TRAINER: 'trainer', DOCTOR: 'doctor' };

  const handleLogin = async () => {
    const result = await login({ role, name: names[role] });
    if (result.success) setPage(dests[role]);
  };

  return (
    <div className="bg-[#f5f5f0] min-h-[calc(100vh-116px)] py-10">
      <div className="max-w-[500px] mx-auto px-4">
        <div className="bg-[#344228] text-white px-5 py-3.5">
          <div className="font-serif text-[18px] font-bold">{mode === 'login' ? 'Agniveer Portal Login' : 'New Registration — Agnipath 2025'}</div>
          <div className="text-[12px] text-white/70 mt-0.5">Official Portal · Ministry of Defence</div>
        </div>
        <div className="bg-white border border-[#d0d0c8] p-5.5">
          <div className="mb-4">
            <div className="text-[11px] font-bold text-[#444] uppercase mb-2">Select Role</div>
            <div className="flex gap-1.5 flex-wrap">
              {roles.map(r => (
                <button key={r.k} onClick={() => setRole(r.k)} className={`px-3.5 py-1.5 text-[13px] cursor-pointer border font-inherit ${role === r.k ? 'border-[#4a5e3a] bg-[#4a5e3a] text-white font-semibold' : 'border-[#d0d0c8] bg-white text-[#444]'}`}>{r.l}</button>
              ))}
            </div>
          </div>
          {mode === 'register' && <div className="mb-3.5"><label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">Full Name</label><input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px]" placeholder="Enter full name" /></div>}
          <div className="mb-3.5"><label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">{mode === 'login' ? 'Username' : 'Email'}</label><input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px]" placeholder={mode === 'login' ? 'Enter username' : 'Enter email'} /></div>}
          {mode === 'register' && <div className="grid grid-cols-2 gap-3.5 mb-3.5"><div><label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">Mobile</label><input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px]" placeholder="10-digit" /></div><div><label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">DOB</label><input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px]" type="date" /></div></div>}
          <div className="mb-3.5"><label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">Password</label><input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px]" type="password" placeholder="Enter password" /></div>}
          <div className="bg-[#e3f2fd] text-[#0d47a1] text-[13px] px-3.5 py-2 mb-3"><strong>Demo Mode:</strong> Select any role and click {mode === 'login' ? 'Login' : 'Register'}</div>
          <button className="w-full px-4 py-2.5 text-[14px] font-semibold bg-[#4a5e3a] text-white hover:bg-[#344228] border-none cursor-pointer" onClick={handleLogin}>{mode === 'login' ? 'Login to Portal' : 'Create Account'}</button>
          <div className="text-center mt-3 text-[13px] text-[#777]">{mode === 'login' ? <>No account? <button className="text-[#1565c0] bg-none border-none cursor-pointer p-0 underline" onClick={() => setPage('register')}>Register here</button></> : <>Already? <button className="text-[#1565c0] bg-none border-none cursor-pointer p-0 underline" onClick={() => setPage('login')}>Login</button></>}</div>
        </div>
      </div>
    </div>
  );
};

// Admin Dashboard
const AdminDashboard = ({ page, setPage, user, soldiers, battalions, applications, sosAlerts, updateSoldier, updateApplication, addSOSAlert, resolveSOS }) => {
  const [editSoldier, setEditSoldier] = useState(null);
  const [reviewApp, setReviewApp] = useState(null);
  const [showSosTrigger, setShowSosTrigger] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');

  const showSaved = (msg) => { setSavedMsg(msg); setTimeout(() => setSavedMsg(''), 3000); };
  const avg = (fn) => Math.round(soldiers.reduce((a, s) => a + fn(s), 0) / soldiers.length * 10) / 10;
  const activeSOS = sosAlerts.filter(s => s.status === 'active');
  const pendingApps = applications.filter(a => a.status === 'Under Review').length;
  const appCount = applications.filter(a => a.status === 'Under Review').length;
  const sosCount = sosAlerts.filter(s => s.status === 'active').length;

  const saveSoldier = (updated) => { updateSoldier(updated.id, updated); setEditSoldier(null); showSaved('Soldier details updated.'); };
  const saveApplication = (updated) => { updateApplication(updated.id, updated); setReviewApp(null); showSaved('Application updated.'); };
  const triggerSOS = (alert) => { addSOSAlert(alert); setShowSosTrigger(false); showSaved(`SOS Alert ${alert.id} triggered.`); };

  const isBatPage = page.startsWith('bat_');
  const isSolPage = page.startsWith('sol_');

  // SOS Trigger Modal
  const SOSTriggerModal = () => {
    const [form, setForm] = useState({ type: 'Emergency', battalionId: 'all', message: '' });
    const newId = 'SOS-' + String(Math.floor(Math.random() * 9000) + 1000);
    return (
      <Modal title="🚨 Trigger New SOS Alert" onClose={() => setShowSosTrigger(false)}
        footer={<><Button variant="out" onClick={() => setShowSosTrigger(false)}>Cancel</Button><Button variant="red" onClick={() => { if (!form.message.trim()) return alert('Please enter message'); const bat = form.battalionId === 'all' ? null : parseInt(form.battalionId); const batName = form.battalionId === 'all' ? 'All Battalions' : battalions.find(b => b.id === parseInt(form.battalionId))?.name || '—'; const now = new Date(); const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ' hrs, ' + now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); triggerSOS({ id: newId, type: form.type, battalionId: bat, battalionName: batName, message: form.message, triggeredAt: timeStr, triggeredBy: user.name, status: 'active', resolvedAt: '' }); }}>Trigger Alert</Button></>}>
        <Alert variant="danger">Warning: This will immediately notify all personnel.</Alert>
        <FormRow cols={2}>
          <Select label="Alert Type" value={form.type} onChange={(v) => setForm({ ...form, type: v })} options={['Emergency', 'Drill', 'Test']} />
          <Select label="Target Unit" value={form.battalionId} onChange={(v) => setForm({ ...form, battalionId: v })} options={[{ value: 'all', label: 'All Battalions' }, ...battalions.map(b => ({ value: b.id, label: b.name }))]} />
        </FormRow>
        <Textarea label="Alert Message" value={form.message} onChange={(v) => setForm({ ...form, message: v })} placeholder="Describe the emergency..." rows={4} />
      </Modal>
    );
  };

  // Application Review Modal
  const AppReviewModal = ({ app }) => {
    const [form, setForm] = useState({ ...app });
    const statuses = ['Under Review', 'Verified', 'Pending Docs', 'Selected', 'Rejected'];
    return (
      <Modal title={`Review Application — ${app.name}`} onClose={() => setReviewApp(null)} large
        footer={<><Button variant="out" onClick={() => setReviewApp(null)}>Cancel</Button><Button variant="primary" onClick={() => saveApplication({ ...form, verifiedBy: user.name })}>Save Changes</Button></>}>
        <Alert variant="info">Application ID: <strong>{app.id}</strong> · Submitted: {app.date}</Alert>
        <FormRow cols={2}>
          <Input label="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label="Date of Birth" type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
          <Input label="State" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
          <Input label="Education" value={form.education} onChange={(e) => setForm({ ...form, education: e.target.value })} />
          <Input label="Height (cm)" type="number" value={form.height} onChange={(e) => setForm({ ...form, height: e.target.value })} />
          <Input label="Weight (kg)" type="number" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} />
        </FormRow>
        <Select label="Application Status" value={form.status} onChange={(v) => setForm({ ...form, status: v })} options={statuses} />
        <Textarea label="Reviewer Notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Add notes..." rows={4} />
      </Modal>
    );
  };

  // Soldier Detail Modal
  const EditSoldierModal = ({ soldier }) => {
    const [form, setForm] = useState({ ...soldier, scores: { ...soldier.scores } });
    return (
      <Modal title={`Edit Soldier — ${soldier.name}`} onClose={() => setEditSoldier(null)} large
        footer={<><Button variant="out" onClick={() => setEditSoldier(null)}>Cancel</Button><Button variant="primary" onClick={() => saveSoldier(form)}>Save Changes</Button></>}>
        <div className="font-bold text-[13px] text-[#1a2d4a] border-b border-[#d0d0c8] pb-2 mb-3">Personal Information</div>
        <FormRow cols={2}>
          <Input label="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Select label="Rank" value={form.rank} onChange={(v) => setForm({ ...form, rank: v })} options={['Sepoy', 'Lance Naik', 'Naik', 'Havildar']} />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Input label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </FormRow>
        <div className="font-bold text-[13px] text-[#1a2d4a] border-b border-[#d0d0c8] pb-2 mb-3 mt-4">Training Scores</div>
        <FormRow cols={3}>
          <Input label="Physical" type="number" value={form.scores.physical} onChange={(e) => setForm({ ...form, scores: { ...form.scores, physical: parseInt(e.target.value) || 0 } })} />
          <Input label="Weapons" type="number" value={form.scores.weapons} onChange={(e) => setForm({ ...form, scores: { ...form.scores, weapons: parseInt(e.target.value) || 0 } })} />
          <Input label="Mental" type="number" value={form.scores.mental} onChange={(e) => setForm({ ...form, scores: { ...form.scores, mental: parseInt(e.target.value) || 0 } })} />
          <Input label="Combat" type="number" value={form.scores.combat} onChange={(e) => setForm({ ...form, scores: { ...form.scores, combat: parseInt(e.target.value) || 0 } })} />
          <Input label="Attendance" type="number" value={form.scores.attendance} onChange={(e) => setForm({ ...form, scores: { ...form.scores, attendance: parseInt(e.target.value) || 0 } })} />
          <Input label="Discipline" type="number" value={form.scores.discipline} onChange={(e) => setForm({ ...form, scores: { ...form.scores, discipline: parseInt(e.target.value) || 0 } })} />
        </FormRow>
      </Modal>
    );
  };

  const renderPage = () => {
    // Admin Overview
    if (page === 'admin') {
      return (
        <div className="p-5">
          {savedMsg && <Alert variant="success" className="m-0 mb-3">{savedMsg}</Alert>}
          
          {/* Active SOS */}
          {activeSOS.map(s => (
            <div key={s.id} className="bg-[#fdecea] border border-[#ffcdd2] border-l-[4px] border-l-[#c0392b] p-3 flex items-center gap-3 mb-4">
              <span className="text-[18px]">🚨</span>
