import React, { useState, useEffect } from 'react';
import { GovStrip, SiteHeader, Navbar, Ticker, MainLayout } from './components/layout';
import { StatCard, Panel, ScoreBar, Badge, Alert, Button } from './components/ui';
import { Modal } from './components/ui';
import { Input, Select, Textarea, FormRow } from './components/ui';
import { Table } from './components/ui';
import { useAuth } from './context/AuthContext';
import { useAppData, overall, grade, fillCls, scoreColor, getInsights } from './context/AppDataContext';

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
    <React.Fragment>
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
    </React.Fragment>
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
          {mode === 'register' && (
            <div className="mb-3.5">
              <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">Full Name</label>
              <input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none" placeholder="Enter full name" />
            </div>
          )}
          <div className="mb-3.5">
            <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">{mode === 'login' ? 'Username' : 'Email'}</label>
            <input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none" placeholder={mode === 'login' ? 'Enter username' : 'Enter email'} />
          </div>
          {mode === 'register' && (
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">Mobile</label>
                <input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none" placeholder="10-digit" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">DOB</label>
                <input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none" type="date" />
              </div>
            </div>
          )}
          <div className="mb-3.5">
            <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase">Password</label>
            <input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none" type="password" placeholder="Enter password" />
          </div>
          <div className="bg-[#e3f2fd] text-[#0d47a1] text-[13px] px-3.5 py-2 mb-3"><strong>Demo Mode:</strong> Select any role and click {mode === 'login' ? 'Login' : 'Register'}</div>
          <button className="w-full px-4 py-2.5 text-[14px] font-semibold bg-[#4a5e3a] text-white hover:bg-[#344228] border-none cursor-pointer" onClick={handleLogin}>{mode === 'login' ? 'Login to Portal' : 'Create Account'}</button>
          <div className="text-center mt-3 text-[13px] text-[#777]">
            {mode === 'login' ? (
              <>No account? <button className="text-[#1565c0] bg-none border-none cursor-pointer p-0 underline" onClick={() => setPage('register')}>Register here</button></>
            ) : (
              <>Already? <button className="text-[#1565c0] bg-none border-none cursor-pointer p-0 underline" onClick={() => setPage('login')}>Login</button></>
            )}
          </div>
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
  const triggerSOS = (alert) => { addSOSAlert(alert); setShowSosTrigger(false); showSaved(`SOS Alert triggered.`); };

  const isBatPage = page.startsWith('bat_');
  const isSolPage = page.startsWith('sol_');

  // SOS Trigger Modal
  const SOSTriggerModal = () => {
    const [form, setForm] = useState({ type: 'Emergency', battalionId: 'all', message: '' });
    const newId = 'SOS-' + String(Math.floor(Math.random() * 9000) + 1000);
    return (
      <Modal title="Trigger New SOS Alert" onClose={() => setShowSosTrigger(false)}
        footer={<><Button variant="out" onClick={() => setShowSosTrigger(false)}>Cancel</Button><Button variant="red" onClick={() => { if (!form.message.trim()) return alert('Please enter message'); const batName = form.battalionId === 'all' ? 'All Battalions' : battalions.find(b => b.id === parseInt(form.battalionId))?.name || '—'; const now = new Date(); const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ' hrs, ' + now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); triggerSOS({ id: newId, type: form.type, battalionId: form.battalionId === 'all' ? null : parseInt(form.battalionId), battalionName: batName, message: form.message, triggeredAt: timeStr, triggeredBy: user.name, status: 'active', resolvedAt: '' }); }}>Trigger Alert</Button></>}>
        <Alert variant="danger">Warning: This will immediately notify all personnel.</Alert>
        <FormRow cols={2}>
          <Select label="Alert Type" value={form.type} onChange={(v) => setForm({ ...form, type: v })} options={['Emergency', 'Drill', 'Test']} />
          <Select label="Target Unit" value={form.battalionId} onChange={(v) => setForm({ ...form, battalionId: v })} options={[{ value: 'all', label: 'All Battalions' }, ...battalions.map(b => ({ value: b.id, label: b.name }))]} />
        </FormRow>
        <Textarea label="Alert Message" value={form.message} onChange={(v) => setForm({ ...form, message: v.target.value })} placeholder="Describe the emergency..." rows={4} />
      </Modal>
    );
  };

  // Application Review Modal
  const AppReviewModal = ({ app }) => {
    const [form, setForm] = useState({ ...app });
    const statuses = ['Under Review', 'Verified', 'Pending Docs', 'Selected', 'Rejected'];
    return (
      <Modal title={`Review Application - ${app.name}`} onClose={() => setReviewApp(null)} large
        footer={<><Button variant="out" onClick={() => setReviewApp(null)}>Cancel</Button><Button variant="primary" onClick={() => saveApplication({ ...form, verifiedBy: user.name })}>Save Changes</Button></>}>
        <Alert variant="info">Application ID: <strong>{app.id}</strong> - Submitted: {app.date}</Alert>
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
      <Modal title={`Edit Soldier - ${soldier.name}`} onClose={() => setEditSoldier(null)} large
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
              <div className="flex-1"><div className="font-bold text-[#c62828] text-[14px]">Active SOS - {s.id} - {s.type} - {s.battalionName}</div><div className="text-[12px] text-[#c62828]">{s.message} - {s.triggeredAt}</div></div>
              <Button variant="red" size="sm" onClick={() => setPage('admin-sos')}>Manage</Button>
            </div>
          ))}

          <div className="flex justify-between items-center mb-3.5">
            <div><div className="font-serif text-[21px] font-bold text-[#1a2d4a]">Command Overview</div><div className="text-[13px] text-[#777]">Agnipath Scheme - Real-time Dashboard</div></div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4.5">
            <StatCard label="Total Agniveers" value={soldiers.length} meta="Across all battalions" />
            <StatCard label="Active Duty" value={soldiers.filter(s => s.status === 'active').length} variant="saffron" valueColor="v-saffron" meta={`${soldiers.filter(s => s.status === 'on_leave').length} on leave`} />
            <StatCard label="Avg. Performance" value={avg(s => overall(s.scores))} variant="green" valueColor="v-green" meta="Out of 100" />
            <StatCard label="Active Battalions" value={battalions.length} variant="navy" />
            <StatCard label="Pending Apps" value={pendingApps} variant="red" valueColor="v-red" meta="Need review" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Battalion Performance */}
            <Panel title="Battalion Performance" subtitle={<Button variant="out" size="sm" onClick={() => setPage('admin-battalions')}>View All</Button>}>
              {battalions.map(b => {
                const bsoldiers = soldiers.filter(s => s.battalionId === b.id);
                const sc = bsoldiers.length ? Math.round(bsoldiers.reduce((a, s) => a + overall(s.scores), 0) / bsoldiers.length * 10) / 10 : 0;
                return (
                  <div key={b.id} className="mb-3 cursor-pointer p-2.5 bg-[#f5f5f0] border border-[#d0d0c8] border-l-[4px]" style={{ borderLeftColor: b.color }} onClick={() => setPage(`bat_${b.id}`)}>
                    <div className="flex justify-between items-center mb-1">
                      <div><div className="font-bold text-[13px] text-[#1a2d4a]">{b.name}</div><div className="text-[11px] text-[#777]">{b.code} - {bsoldiers.length} Soldiers - {b.location}</div></div>
                      <div className="text-right"><div className="text-[20px] font-bold" style={{ color: scoreColor(sc), fontFamily: 'Noto Serif, serif', lineHeight: 1 }}>{sc}</div><Badge variant={grade(sc).c}>{grade(sc).l}</Badge></div>
                    </div>
                    <div className="h-2 bg-[#eaeae5] rounded"><div className={`h-full rounded ${fillCls(sc)}`} style={{ width: `${sc}%` }} /></div>
                  </div>
                );
              })}
            </Panel>

            {/* Top Performers */}
            <div>
              <Panel title="Top 5 Performers" subtitle="This month">
                <Table
                  columns={[
                    { header: '#', accessor: 'rank', render: (r, i) => i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}` },
                    { header: 'Soldier', accessor: 'name', render: (r) => <span className="font-semibold">{r.name}</span> },
                    { header: 'Battalion', accessor: 'battalionId', render: (r) => battalions.find(b => b.id === r.battalionId)?.code },
                    { header: 'Score', accessor: 'score', render: (r) => <span className="font-bold" style={{ color: scoreColor(overall(r.scores)) }}>{overall(r.scores)}</span> }
                  ]}
                  data={[...soldiers].sort((a, b) => overall(b.scores) - overall(a.scores)).slice(0, 5)}
                  onRowClick={(s) => setPage(`sol_${s.id}`)}
                />
              </Panel>

              <Panel title="Needs Attention" subtitle="Score < 75">
                {[...soldiers].filter(s => overall(s.scores) < 75).sort((a, b) => overall(a.scores) - overall(b.scores)).slice(0, 5).map((s, i) => {
                  const ins = getInsights(s.scores);
                  return (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-[#eaeae5] last:border-0 cursor-pointer" onClick={() => setPage(`sol_${s.id}`)}>
                      <span className="font-semibold">{s.name}</span>
                      <span className="text-[#777]">{battalions.find(b => b.id === s.battalionId)?.code}</span>
                      <span className="font-bold text-[#c0392b]">{overall(s.scores)}</span>
                      <Badge variant="br">{ins.improvements[0]?.label || '—'}</Badge>
                    </div>
                  );
                })}
              </Panel>
            </div>
          </div>
        </div>
      );
    }

    // Admin Battalions Page
    if (page === 'admin-battalions') {
      return (
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <div><div className="font-serif text-[21px] font-bold text-[#1a2d4a]">All Battalions</div><div className="text-[13px] text-[#777]">Click any battalion to view soldiers</div></div>
            <Button variant="primary">+ Create Battalion</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {battalions.map(b => {
              const bsoldiers = soldiers.filter(s => s.battalionId === b.id);
              const sc = bsoldiers.length ? Math.round(bsoldiers.reduce((a, s) => a + overall(s.scores), 0) / bsoldiers.length * 10) / 10 : 0;
              return (
                <div key={b.id} className="bg-white border border-[#d0d0c8] p-4 border-l-[4px] cursor-pointer hover:shadow-md transition-shadow" style={{ borderLeftColor: b.color }} onClick={() => setPage(`bat_${b.id}`)}>
                  <div className="flex justify-between items-start mb-2">
                    <div><div className="font-serif text-[17px] font-bold text-[#1a2d4a]">{b.name}</div><div className="text-[11px] text-[#777] mt-0.5">{b.code} - {b.location}</div><div className="text-[12px] text-[#444] mt-0.5">Cmd: {b.commander}</div></div>
                    <div className="text-right"><div className="text-[24px] font-bold" style={{ color: scoreColor(sc), fontFamily: 'Noto Serif, serif', lineHeight: 1 }}>{sc}</div><Badge variant={grade(sc).c}>{grade(sc).l}</Badge></div>
                  </div>
                  <div className="flex gap-4 mb-3">
                    {[{ l: 'Total', v: bsoldiers.length }, { l: 'Active', v: bsoldiers.filter(s => s.status === 'active').length }, { l: 'On Leave', v: bsoldiers.filter(s => s.status === 'on_leave').length }, { l: 'Score ≥85', v: bsoldiers.filter(s => overall(s.scores) >= 85).length }].map((item, i) => (
                      <div key={i} className="text-center"><div className="font-serif text-[18px] font-bold text-[#1a2d4a]">{item.v}</div><div className="text-[10px] text-[#777] uppercase tracking-wide">{item.l}</div></div>
                    ))}
                  </div>
                  <div className="flex gap-2"><Button variant="navy" size="sm" className="flex-1" onClick={(e) => { e.stopPropagation(); setPage(`bat_${b.id}`); }}>View Soldiers</Button><Button variant="out" size="sm" onClick={(e) => e.stopPropagation()}>Edit</Button></div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Admin Applications Page
    if (page === 'admin-applications') {
      const [filter, setFilter] = useState('all');
      const filtered = filter === 'all' ? applications : applications.filter(a => a.status === filter);
      const statBadge = { 'Under Review': 'bb', 'Verified': 'bg', 'Pending Docs': 'bo', 'Rejected': 'br', 'Selected': 'bg' };
      return (
        <div className="p-5">
          <div className="flex justify-between items-center mb-3.5">
            <div><div className="font-serif text-[21px] font-bold text-[#1a2d4a]">Recruitment Applications</div><div className="text-[13px] text-[#777]">Review, verify, and update applications</div></div>
          </div>
          <div className="flex gap-1.5 flex-wrap mb-3.5">
            {[{ v: 'all', l: `All (${applications.length})` }, { v: 'Under Review', l: `Under Review (${applications.filter(a => a.status === 'Under Review').length})` }, { v: 'Verified', l: `Verified (${applications.filter(a => a.status === 'Verified').length})` }, { v: 'Selected', l: `Selected (${applications.filter(a => a.status === 'Selected').length})` }, { v: 'Rejected', l: `Rejected (${applications.filter(a => a.status === 'Rejected').length})` }].map(f => (
              <Button key={f.v} variant={filter === f.v ? 'navy' : 'out-navy'} size="sm" onClick={() => setFilter(f.v)}>{f.l}</Button>
            ))}
          </div>
          <Panel>
            <Table
              columns={[
                { header: 'App. ID', accessor: 'id', render: (r) => <span className="font-mono text-[12px]">{r.id}</span> },
                { header: 'Name', accessor: 'name', render: (r) => <span className="font-semibold">{r.name}</span> },
                { header: 'State', accessor: 'state' },
                { header: 'Education', accessor: 'education' },
                { header: 'Trade', accessor: 'trade' },
                { header: 'Applied On', accessor: 'date', render: (r) => <span className="text-[#777]">{r.date}</span> },
                { header: 'Status', accessor: 'status', render: (r) => <Badge variant={statBadge[r.status]}>{r.status}</Badge> },
                { header: 'Action', accessor: 'action', render: () => <Button variant="primary" size="sm">Review</Button> }
              ]}
              data={filtered}
              onRowClick={(a) => setReviewApp(a)}
            />
          </Panel>
        </div>
      );
    }

    // Admin SOS Page
    if (page === 'admin-sos') {
      const active = sosAlerts.filter(s => s.status === 'active');
      return (
        <div className="p-5">
          <div className="flex justify-between items-center mb-3.5">
            <div><div className="font-serif text-[21px] font-bold text-[#1a2d4a]">SOS Alert Management</div><div className="text-[13px] text-[#777]">Emergency broadcast and response system</div></div>
            <Button variant="red" onClick={() => setShowSosTrigger(true)}>Trigger New Alert</Button>
          </div>
          {active.length === 0 && <Alert variant="success">No active SOS alerts at this time.</Alert>}
          {active.map(s => (
            <div key={s.id} className="bg-[#fdecea] border border-[#ffcdd2] border-l-[4px] border-l-[#c0392b] p-3 flex items-center gap-3 mb-4">
              <span className="text-[20px]">🚨</span>
              <div className="flex-1"><div className="font-bold text-[#c62828]">{s.id} - {s.type} Alert - {s.battalionName}</div><div className="text-[12px] text-[#c62828]">{s.message}</div><div className="text-[11px] text-[#c62828]">Triggered: {s.triggeredAt} - By: {s.triggeredBy}</div></div>
              <Button variant="primary" size="sm" onClick={() => resolveSOS(s.id)}>Mark Resolved</Button>
            </div>
          ))}
          <Panel title="Alert History" subtitle={`${sosAlerts.length} total alerts`}>
            <Table
              columns={[
                { header: 'Alert ID', accessor: 'id', render: (r) => <span className="font-mono font-bold">{r.id}</span> },
                { header: 'Type', accessor: 'type', render: (r) => <Badge variant="bgy">{r.type}</Badge> },
                { header: 'Target', accessor: 'battalionName' },
                { header: 'Message', accessor: 'message', render: (r) => <span className="text-[12px] text-[#444] max-w-[200px] truncate block">{r.message}</span> },
                { header: 'Status', accessor: 'status', render: (r) => <Badge variant={r.status === 'active' ? 'br' : 'bg'}>{r.status}</Badge> }
              ]}
              data={sosAlerts}
            />
          </Panel>
        </div>
      );
    }

    // Soldier Detail Page
    if (isSolPage) {
      const solId = parseInt(page.split('_')[1]);
      const s = soldiers.find(x => x.id === solId);
      const bat = s ? battalions.find(b => b.id === s.battalionId) : null;
      const [tab, setTab] = useState('overview');
      if (!s || !bat) return <div className="p-5"><Alert variant="danger">Soldier not found.</Alert></div>;
      const sc = overall(s.scores);
      const ins = getInsights(s.scores);
      const allRanked = [...soldiers].sort((a, b) => overall(b.scores) - overall(a.scores));
      const globalRank = allRanked.findIndex(x => x.id === s.id) + 1;
      return (
        <div className="p-5">
          <div className="flex gap-3 text-[12px] text-[#777] mb-1.5">
            <span className="text-[#1565c0] cursor-pointer" onClick={() => setPage('admin')}>Dashboard</span>
            <span>-</span>
            <span className="text-[#1565c0] cursor-pointer" onClick={() => setPage('admin-battalions')}>Battalions</span>
            <span>-</span>
            <span className="text-[#1565c0] cursor-pointer" onClick={() => setPage(`bat_${bat.id}`)}>{bat.name}</span>
            <span>-</span>
            <span>{s.name}</span>
          </div>
          <Panel className="mb-4">
            <div className="flex gap-4 items-start flex-wrap">
              <div className="w-[70px] h-[70px] bg-[#f5f5f0] border-2 border-[#d0d0c8] rounded-full flex items-center justify-center text-[28px] flex-shrink-0">👤</div>
              <div className="flex-1">
                <div className="font-serif text-[20px] font-bold text-[#1a2d4a]">{s.name}</div>
                <div className="flex gap-1.5 flex-wrap mt-1.5">
                  <Badge variant={s.status === 'active' ? 'bg' : s.status === 'on_leave' ? 'bo' : 'bgy'}>{s.status === 'active' ? 'Active' : s.status === 'on_leave' ? 'On Leave' : 'Inactive'}</Badge>
                  <Badge variant="bb">{s.rank}</Badge>
                  <Badge variant="bgy">{s.blood}</Badge>
                  <Badge variant="bgold">{bat.name}</Badge>
                </div>
                <div className="flex gap-4 mt-2 text-[12px] text-[#777] flex-wrap">
                  <span>{s.soldierId}</span>
                  <span>DOJ: {new Date(s.joining).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span>{s.city}, {s.state}</span>
                  <span>{s.phone}</span>
                </div>
              </div>
              <div className="text-center px-4 border-l border-[#d0d0c8] flex-shrink-0">
                <div className="text-[38px] font-bold" style={{ color: scoreColor(sc), fontFamily: 'Noto Serif, serif', lineHeight: 1 }}>{sc}</div>
                <div className="text-[11px] text-[#777] uppercase tracking-wider mt-0.5">Overall Score</div>
                <Badge variant={grade(sc).c} className="mt-1.5 inline-block">{grade(sc).l}</Badge>
                <div className="text-[12px] text-[#777] mt-1.5">Global: <strong className="text-[#1a2d4a]">#{globalRank}</strong></div>
              </div>
              <Button variant="out" size="sm" className="self-start" onClick={() => setEditSoldier(s)}>Edit Details</Button>
            </div>
          </Panel>
          <div className="flex gap-2 mb-4 border-b-2 border-[#d0d0c8]">
            {['overview', 'scores', 'personal', 'equipment'].map(t => (
              <button key={t} className={`px-4 py-2 text-[13px] cursor-pointer border-none bg-none border-b-[2px] -mb-px transition-colors ${tab === t ? 'text-[#344228] border-b-[#4a5e3a] font-semibold' : 'text-[#777] border-b-transparent hover:text-[#1a2d4a]'}`} onClick={() => setTab(t)}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>
          {tab === 'overview' && (
            <React.Fragment>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-[#f1f8e9] border border-[#c8e6c9] border-l-[4px] border-l-[#2e7d32] p-3.5">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-[#2e7d32] mb-2">Strengths ({ins.strengths.length})</div>
                  {ins.strengths.map((it, i) => <div key={i} className="text-[12px] mb-1"><strong>{it.label}</strong> - <span className="text-[#2e7d32] font-bold">{it.score}</span></div>)}
                </div>
                <div className="bg-[#fff8f0] border border-[#ffe0b2] border-l-[4px] border-l-[#c8601a] p-3.5">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-[#c8601a] mb-2">Monitor ({ins.warnings.length})</div>
                  {ins.warnings.map((it, i) => <div key={i} className="text-[12px] mb-1"><strong>{it.label}</strong> - <span className="text-[#c8601a] font-bold">{it.score}</span></div>)}
                </div>
                <div className="bg-[#e8f4fd] border border-[#bbdefb] border-l-[4px] border-l-[#1565c0] p-3.5">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-[#1565c0] mb-2">Improve ({ins.improvements.length})</div>
                  {ins.improvements.map((it, i) => <div key={i} className="text-[12px] mb-1"><strong>{it.label}</strong> - <span className="text-[#c0392b] font-bold">{it.score}</span></div>)}
                </div>
              </div>
              <Panel title="Performance Breakdown">
                {['physical', 'weapons', 'mental', 'combat', 'attendance', 'discipline'].map(k => (
                  <ScoreBar key={k} label={k.charAt(0).toUpperCase() + k.slice(1)} value={s.scores[k]} />
                ))}
              </Panel>
            </React.Fragment>
          )}
          {tab === 'scores' && (
            <Panel title="Complete Score Card">
              <Table
                columns={[
                  { header: 'Category', accessor: 'label', render: (r) => <span className="font-semibold">{r.label}</span> },
                  { header: 'Score', accessor: 'score', render: (r) => <span className="font-bold" style={{ color: scoreColor(r.score) }}>{r.score}/100</span> },
                  { header: 'Grade', accessor: 'score', render: (r) => <Badge variant={grade(r.score).c}>{grade(r.score).l}</Badge> }
                ]}
                data={[
                  { label: 'Physical Fitness', score: s.scores.physical },
                  { label: 'Weapons Handling', score: s.scores.weapons },
                  { label: 'Mental Resilience', score: s.scores.mental },
                  { label: 'Combat Drills', score: s.scores.combat },
                  { label: 'Attendance', score: s.scores.attendance },
                  { label: 'Discipline', score: s.scores.discipline }
                ]}
              />
            </Panel>
          )}
          {tab === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Panel title="Personal Information">
                {[['Full Name', s.name], ['Date of Birth', new Date(s.dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })], ['Gender', s.gender], ['Blood Group', s.blood], ['State', s.state], ['City', s.city], ['Phone', s.phone], ['Email', s.email]].map(([l, v], i) => (
                  <div key={i} className="flex py-2 border-b border-[#eaeae5]"><div className="w-[160px] text-[11px] font-bold uppercase text-[#777]">{l}</div><div className="flex-1 text-[13px]">{v}</div></div>
                ))}
              </Panel>
              <Panel title="Service Details">
                {[['Soldier ID', s.soldierId], ['Rank', s.rank], ['Battalion', bat.name], ['Date of Joining', new Date(s.joining).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })], ['Service Status', s.status], ['Medical Fitness', s.medical]].map(([l, v], i) => (
                  <div key={i} className="flex py-2 border-b border-[#eaeae5]"><div className="w-[160px] text-[11px] font-bold uppercase text-[#777]">{l}</div><div className="flex-1 text-[13px]">{v}</div></div>
                ))}
              </Panel>
            </div>
          )}
          {tab === 'equipment' && (
            <Panel title="Equipment and Arms Issued">
              <Table
                columns={[
                  { header: '#', accessor: 'index', render: (r, i) => i + 1 },
                  { header: 'Item Name', accessor: 'item', render: (r) => <span className="font-medium">{r.item}</span> },
                  { header: 'Type', accessor: 'type', render: (r) => <Badge variant="bb">{r.type}</Badge> }
                ]}
                data={s.equipment.map((eq, i) => ({ item: eq, type: eq.includes('Rifle') || eq.includes('Goggles') ? 'Weapon' : eq.includes('Uniform') || eq.includes('Boots') || eq.includes('Helmet') ? 'Uniform' : 'Gear' }))}
              />
            </Panel>
          )}
        </div>
      );
    }

    return (
      <div className="p-5">
        <Alert variant="info">Welcome to Admin Portal. Select a section from the sidebar.</Alert>
      </div>
    );
  };

  return (
    <React.Fragment>
      {editSoldier && <EditSoldierModal soldier={editSoldier} />}
      {reviewApp && <AppReviewModal app={reviewApp} />}
      {showSosTrigger && <SOSTriggerModal />}
      <MainLayout user={user} page={page} setPage={setPage} sosCount={sosCount} appCount={appCount}>
        {renderPage()}
      </MainLayout>
    </React.Fragment>
  );
};

// Soldier Dashboard
const SoldierDashboard = ({ page, setPage, user, soldiers, battalions }) => {
  const s = soldiers.find(x => x.id === 101) || soldiers[0];
  const bat = s ? battalions.find(b => b.id === s.battalionId) : null;
  if (!s || !bat) return <div className="p-5"><Alert variant="danger">No soldier data found.</Alert></div>;
  const sc = overall(s.scores);
  const ins = getInsights(s.scores);
  const ranked = [...soldiers].sort((a, b) => overall(b.scores) - overall(a.scores));
  const globalRank = ranked.findIndex(x => x.id === s.id) + 1;

  const renderPage = () => {
    if (page === 'soldier') {
      return (
        <div className="p-5">
          <div className="font-serif text-[21px] font-bold text-[#1a2d4a]">Welcome, {s.name.split(' ')[0]}</div>
          <div className="text-[13px] text-[#777] mb-3.5">Friday, 14 March 2025 - {bat.name}</div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4.5">
            <StatCard label="Overall Score" value={sc} variant="saffron" valueColor="v-saffron" meta={<Badge variant={grade(sc).c}>{grade(sc).l}</Badge>} />
            <StatCard label="Global Rank" value={`#${globalRank}`} meta="All Agniveers" />
            <StatCard label="Battalion Rank" value={`#${ranked.filter(x => x.battalionId === s.battalionId).findIndex(x => x.id === s.id) + 1}`} meta={bat.name} />
            <StatCard label="Attendance" value={`${s.scores.attendance}%`} variant="green" valueColor="v-green" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Panel title="My Scores - March 2025">
              {['physical', 'weapons', 'mental', 'combat', 'attendance', 'discipline'].map(k => (
                <ScoreBar key={k} label={k.charAt(0).toUpperCase() + k.slice(1)} value={s.scores[k]} />
              ))}
            </Panel>
            <div>
              <Panel title="Strengths">
                {ins.strengths.length === 0 ? <div className="text-[12px] text-[#777]">No category above 85 yet.</div> : ins.strengths.map((it, i) => (
                  <div key={i} className="flex gap-2 py-1.5 border-b border-[#eaeae5] last:border-0"><span>✅</span><div><div className="text-[13px] font-semibold text-[#2e7d32]">{it.label} - {it.score}</div><div className="text-[11px] text-[#777]">{it.tip}</div></div></div>
                ))}
              </Panel>
              <Panel title="Areas to Improve">
                {ins.improvements.length === 0 ? <div className="text-[12px] text-[#2e7d32] font-semibold">No critical weaknesses!</div> : ins.improvements.map((it, i) => (
                  <div key={i} className="flex gap-2 py-1.5 border-b border-[#eaeae5] last:border-0"><span>🔧</span><div><div className="text-[13px] font-semibold text-[#c0392b]">{it.label} - {it.score}</div><div className="text-[11px] text-[#777]">{it.tip}</div></div></div>
                ))}
              </Panel>
            </div>
          </div>
        </div>
      );
    }

    if (page === 'training') return <div className="p-5"><div className="font-serif text-[21px] font-bold mb-3">Training Records</div><Panel><div className="text-[#777]">Training history and records will appear here.</div></Panel></div>;
    if (page === 'schedule') return <div className="p-5"><div className="font-serif text-[21px] font-bold mb-3">Daily Schedule</div><Panel><div className="text-[#777]">Daily schedule will appear here.</div></Panel></div>;
    if (page === 'medical') return <div className="p-5"><div className="font-serif text-[21px] font-bold mb-3">Medical Records</div><Panel><div className="text-[#777]">Medical records will appear here.</div></Panel></div>;
    if (page === 'equipment') return <div className="p-5"><div className="font-serif text-[21px] font-bold mb-3">Equipment and Arms</div><Panel><div className="text-[#777]">Equipment list will appear here.</div></Panel></div>;
    if (page === 'stipend') return <div className="p-5"><div className="font-serif text-[21px] font-bold mb-3">Stipend Records</div><Panel><div className="text-[#777]">Stipend and pay history will appear here.</div></Panel></div>;
    if (page === 'soldier-ai' || page === 'soldier-insights') return <div className="p-5"><div className="font-serif text-[21px] font-bold mb-3">AI Insights</div><Panel><div className="text-[#777]">AI-powered insights and recommendations will appear here.</div></Panel></div>;

    return <div className="p-5"><Alert variant="info">Welcome to Soldier Portal.</Alert></div>;
  };

  return (
    <MainLayout user={{ ...user, soldierId: s.soldierId }} page={page} setPage={setPage}>
      {renderPage()}
    </MainLayout>
  );
};

// Candidate Portal
const CandidatePortal = ({ page, setPage, user }) => {
  const renderPage = () => {
    if (page === 'candidate' || page === 'status') {
      return (
        <div className="p-5">
          <div className="font-serif text-[21px] font-bold text-[#1a2d4a]">Application Status</div>
          <div className="text-[13px] text-[#777] mb-4">Track your recruitment journey</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <StatCard label="Registration ID" value="AGN-2025-84721" />
            <StatCard label="Stage" value="2 of 6" variant="saffron" />
            <StatCard label="Force" value="Indian Army" />
            <StatCard label="Trade" value="Agniveer GD" />
          </div>
          <Panel title="Recruitment Progress">
            {[{ l: 'Application Submitted', st: 'done' },{ l: 'Document Verification', st: 'cur' },{ l: 'Eligibility Screening', st: 'pend' },{ l: 'Physical Fitness Test', st: 'pend' },{ l: 'Written Examination', st: 'pend' }].map((item, i, arr) => (
              <div key={i} className="flex gap-3 pb-4 last:pb-0">
                <div className="flex flex-col items-center w-[18px] flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full border-2 ${item.st === 'done' ? 'bg-[#4a5e3a] border-[#4a5e3a]' : item.st === 'cur' ? 'bg-[#c8601a] border-[#c8601a]' : 'border-[#d0d0c8] bg-white'}`} />
                  {i < arr.length - 1 && <div className={`w-px flex-1 ${item.st === 'done' ? 'bg-[#4a5e3a]' : 'bg-[#d0d0c8]'}`} />}
                </div>
                <div><div className="text-[14px] font-semibold" style={{ color: item.st === 'done' ? '#2e7d32' : item.st === 'cur' ? '#c8601a' : '#777' }}>{item.l}</div></div>
              </div>
            ))}
          </Panel>
        </div>
      );
    }
    if (page === 'admitcard') {
      return (
        <div className="p-5">
          <div className="font-serif text-[21px] font-bold mb-3">Admit Card</div>
          <Alert variant="warn">Admit card available after document verification.</Alert>
          <div className="border border-[#d0d0c8] bg-white max-w-[720px]">
            <div className="h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
            <div className="bg-[#344228] text-white p-4 flex items-center gap-4">
              <span className="text-[30px]">🛡️</span>
              <div><div className="font-serif text-[18px] font-bold">Agniveer Hall Ticket - Agnipath 2025</div><div className="text-[11px] text-white/70">Indian Army - Ministry of Defence</div></div>
            </div>
            <div className="p-5">
              <div className="flex gap-6">
                <div className="w-[88px] h-[108px] bg-[#eaeae5] border border-[#d0d0c8] flex items-center justify-center text-[32px]">👤</div>
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="py-1 border-b border-dashed border-[#eaeae5]"><div className="text-[10px] font-bold uppercase text-[#777]">Candidate Name</div><div className="text-[14px] font-medium">ARYAN KUMAR SHARMA</div></div>
                  <div className="py-1 border-b border-dashed border-[#eaeae5]"><div className="text-[10px] font-bold uppercase text-[#777]">Registration No.</div><div className="text-[14px] font-medium font-mono text-[#c8601a]">AGN-APP-2025-84721</div></div>
                  <div className="py-1 border-b border-dashed border-[#eaeae5]"><div className="text-[10px] font-bold uppercase text-[#777]">Exam Date</div><div className="text-[14px] font-medium">02 May 2025</div></div>
                  <div className="py-1 border-b border-dashed border-[#eaeae5]"><div className="text-[10px] font-bold uppercase text-[#777]">Exam Centre</div><div className="text-[14px] font-medium">Kendriya Vidyalaya No. 1, Jaipur</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4"><Button variant="primary">Download PDF</Button><Button variant="out">Print</Button></div>
        </div>
      );
    }
    return <div className="p-5"><Alert variant="info">Welcome to Candidate Portal.</Alert></div>;
  };

  return (
    <MainLayout user={user} page={page} setPage={setPage}>
      {renderPage()}
    </MainLayout>
  );
};

// Main App Component
function App() {
  const [page, setPage] = useState('home');
  const { user, logout } = useAuth();
  const { soldiers, battalions, applications, sosAlerts, updateSoldier, updateApplication, addSOSAlert, resolveSOS } = useAppData();

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const adminPages = ['admin', 'admin-battalions', 'admin-soldiers', 'admin-rankings', 'admin-applications', 'admin-sos', 'admin-agniassist', 'admin-ml', 'admin-audit'];
  const isAdmin = adminPages.includes(page) || page.startsWith('bat_') || page.startsWith('sol_');

  const handleLogout = () => { logout(); setPage('home'); };

  const render = () => {
    // Public pages
    if (!user) {
      if (page === 'home' || page === 'about' || page === 'recruitment' || page === 'results') return <LandingPage setPage={setPage} />;
      if (page === 'login') return <LoginPage mode="login" setPage={setPage} />;
      if (page === 'register') return <LoginPage mode="register" setPage={setPage} />;
      return <LandingPage setPage={setPage} />;
    }

    // Role-based pages
    switch (user.role) {
      case 'ADMIN':
        if (isAdmin || page.startsWith('bat_') || page.startsWith('sol_')) {
          return <AdminDashboard page={page} setPage={setPage} user={user} soldiers={soldiers} battalions={battalions} applications={applications} sosAlerts={sosAlerts} updateSoldier={updateSoldier} updateApplication={updateApplication} addSOSAlert={addSOSAlert} resolveSOS={resolveSOS} />;
        }
        return <AdminDashboard page="admin" setPage={setPage} user={user} soldiers={soldiers} battalions={battalions} applications={applications} sosAlerts={sosAlerts} updateSoldier={updateSoldier} updateApplication={updateApplication} addSOSAlert={addSOSAlert} resolveSOS={resolveSOS} />;
      
      case 'SOLDIER':
        return <SoldierDashboard page={page} setPage={setPage} user={user} soldiers={soldiers} battalions={battalions} />;
      
      case 'CANDIDATE':
        return <CandidatePortal page={page} setPage={setPage} user={user} />;
      
      case 'TRAINER':
        return <SoldierDashboard page={page} setPage={setPage} user={user} soldiers={soldiers} battalions={battalions} />;

      case 'DOCTOR':
        return <SoldierDashboard page={page} setPage={setPage} user={user} soldiers={soldiers} battalions={battalions} />;

      default:
        // Default to SoldierDashboard for unknown roles
        if (user.role === 'TRAINER' || user.role === 'DOCTOR') {
          return <SoldierDashboard page={page} setPage={setPage} user={user} soldiers={soldiers} battalions={battalions} />;
        }
        return <LandingPage setPage={setPage} />;
    }
  };

  return (
    <React.Fragment>
      <GovStrip />
      <SiteHeader onHome={() => setPage('home')} />
      <Navbar page={page} setPage={setPage} user={user} onLogout={handleLogout} />
      {render()}
    </React.Fragment>
  );
}

export default App;
