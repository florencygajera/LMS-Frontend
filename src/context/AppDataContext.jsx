import { createContext, useContext, useState } from 'react';

const AppDataContext = createContext(null);

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};

// Initial data from HTML prototype
export const INIT_BATTALIONS = [
  { id: 1, code: 'RR-1', name: '1st Rajputana Rifles', location: 'Jaipur, Rajasthan', commander: 'Col. R.K. Verma', phone: '9876543210', established: '1775', mission: 'Border Security & Counter-Terrorism', capacity: 150, color: '#4a5e3a' },
  { id: 2, code: 'PARA-1', name: '1st Parachute Regiment', location: 'Agra, Uttar Pradesh', commander: 'Col. S.P. Mehta', phone: '9876543211', established: '1945', mission: 'Airborne Assault & Special Operations', capacity: 150, color: '#1a2d4a' },
  { id: 3, code: 'BEN-2', name: '2nd Bengal Regiment', location: 'Kolkata, West Bengal', commander: 'Col. D.K. Roy', phone: '9876543212', established: '1758', mission: 'Mountain Warfare & Amphibious Ops', capacity: 150, color: '#8b4513' },
  { id: 4, code: 'MAR-4', name: '4th Maratha Light Infantry', location: 'Pune, Maharashtra', commander: 'Col. V.B. Patil', phone: '9876543213', established: '1768', mission: 'Light Infantry & Rapid Deployment', capacity: 150, color: '#6b3a7d' },
];

export const INIT_SOLDIERS = [
  { id: 101, battalionId: 1, soldierId: 'AGN-2024-0101', name: 'Rajveer Singh Chauhan', rank: 'Sepoy', dob: '2003-04-12', gender: 'Male', blood: 'B+', phone: '9876501001', email: 'rajveer@army.in', state: 'Rajasthan', city: 'Jodhpur', joining: '2024-01-15', status: 'active', medical: 'Fit', scores: { physical: 91, weapons: 88, mental: 78, combat: 89, attendance: 96, discipline: 92 }, equipment: ['INSAS Rifle', 'Combat Uniform', 'Tactical Backpack', 'Ballistic Helmet'], events: ['Won 200m Sprint — Batch Rally 2024', 'Best Shooter Award — March 2025'], emergency: { name: 'Ratan Singh', phone: '9876501002', relation: 'Father' } },
  { id: 102, battalionId: 1, soldierId: 'AGN-2024-0102', name: 'Priya Sharma', rank: 'Sepoy', dob: '2002-08-22', gender: 'Female', blood: 'A+', phone: '9876501003', email: 'priya.sharma@army.in', state: 'Rajasthan', city: 'Jaipur', joining: '2024-01-15', status: 'active', medical: 'Fit', scores: { physical: 85, weapons: 72, mental: 94, combat: 80, attendance: 98, discipline: 95 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: ['Top Mental Resilience — Batch 2024', 'Academic Excellence Award'], emergency: { name: 'Meena Sharma', phone: '9876501004', relation: 'Mother' } },
  { id: 103, battalionId: 1, soldierId: 'AGN-2024-0103', name: 'Arjun Mehra', rank: 'Lance Naik', dob: '2001-11-05', gender: 'Male', blood: 'O+', phone: '9876501005', email: 'arjun.mehra@army.in', state: 'Punjab', city: 'Amritsar', joining: '2024-01-15', status: 'active', medical: 'Fit', scores: { physical: 96, weapons: 94, mental: 88, combat: 95, attendance: 100, discipline: 97 }, equipment: ['INSAS Rifle', 'Combat Uniform', 'Tactical Backpack', 'Ballistic Helmet', 'Night Vision Goggles'], events: ['Battalion Champion — Physical 2024', 'All India #1 — March 2025'], emergency: { name: 'Gurpreet Mehra', phone: '9876501006', relation: 'Father' } },
  { id: 104, battalionId: 1, soldierId: 'AGN-2024-0104', name: 'Sunil Kumar', rank: 'Sepoy', dob: '2003-02-18', gender: 'Male', blood: 'AB+', phone: '9876501007', email: 'sunil.k@army.in', state: 'Haryana', city: 'Rohtak', joining: '2024-01-15', status: 'active', medical: 'Fit (Ankle — Recovered)', scores: { physical: 68, weapons: 72, mental: 65, combat: 70, attendance: 82, discipline: 75 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: [], emergency: { name: 'Ram Kumar', phone: '9876501008', relation: 'Father' } },
  { id: 105, battalionId: 1, soldierId: 'AGN-2024-0105', name: 'Kavita Rajput', rank: 'Sepoy', dob: '2002-06-30', gender: 'Female', blood: 'B-', phone: '9876501009', email: 'kavita.r@army.in', state: 'UP', city: 'Lucknow', joining: '2024-01-15', status: 'on_leave', medical: 'Fit', scores: { physical: 78, weapons: 74, mental: 82, combat: 76, attendance: 88, discipline: 85 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: ['Best Female Recruit — Batch 2024'], emergency: { name: 'Sunita Rajput', phone: '9876501010', relation: 'Mother' } },
  { id: 106, battalionId: 1, soldierId: 'AGN-2024-0106', name: 'Mahesh Choudhary', rank: 'Sepoy', dob: '2003-09-14', gender: 'Male', blood: 'O-', phone: '9876501011', email: 'mahesh.c@army.in', state: 'Rajasthan', city: 'Bikaner', joining: '2024-01-15', status: 'active', medical: 'Fit', scores: { physical: 82, weapons: 91, mental: 70, combat: 84, attendance: 91, discipline: 88 }, equipment: ['INSAS Rifle', 'Combat Uniform', 'Tactical Backpack'], events: ['Best Shooter — Jan 2025'], emergency: { name: 'Ramesh Choudhary', phone: '9876501012', relation: 'Father' } },
  { id: 201, battalionId: 2, soldierId: 'AGN-2024-0201', name: 'Vikram Nair', rank: 'Sepoy', dob: '2002-03-25', gender: 'Male', blood: 'A+', phone: '9876502001', email: 'vikram.n@army.in', state: 'Kerala', city: 'Thiruvananthapuram', joining: '2024-02-01', status: 'active', medical: 'Fit', scores: { physical: 94, weapons: 88, mental: 86, combat: 93, attendance: 97, discipline: 94 }, equipment: ['INSAS Rifle', 'Para Suit', 'Combat Uniform', 'Tactical Backpack'], events: ['Jump Certified — Mar 2024', 'Best Para Recruit — 2024'], emergency: { name: 'Suresh Nair', phone: '9876502002', relation: 'Father' } },
  { id: 202, battalionId: 2, soldierId: 'AGN-2024-0202', name: 'Ananya Krishnan', rank: 'Sepoy', dob: '2003-07-11', gender: 'Female', blood: 'B+', phone: '9876502003', email: 'ananya.k@army.in', state: 'Tamil Nadu', city: 'Chennai', joining: '2024-02-01', status: 'active', medical: 'Fit', scores: { physical: 80, weapons: 75, mental: 91, combat: 78, attendance: 95, discipline: 96 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: ['Top Academic Score — 2024'], emergency: { name: 'Kavitha Krishnan', phone: '9876502004', relation: 'Mother' } },
  { id: 203, battalionId: 2, soldierId: 'AGN-2024-0203', name: 'Rohit Sharma', rank: 'Sepoy', dob: '2002-12-01', gender: 'Male', blood: 'O+', phone: '9876502005', email: 'rohit.s@army.in', state: 'MP', city: 'Bhopal', joining: '2024-02-01', status: 'active', medical: 'Under Observation (Knee)', scores: { physical: 75, weapons: 69, mental: 72, combat: 71, attendance: 79, discipline: 74 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: [], emergency: { name: 'Mahesh Sharma', phone: '9876502006', relation: 'Father' } },
  { id: 204, battalionId: 2, soldierId: 'AGN-2024-0204', name: 'Deepak Yadav', rank: 'Sepoy', dob: '2003-05-19', gender: 'Male', blood: 'A-', phone: '9876502007', email: 'deepak.y@army.in', state: 'Bihar', city: 'Patna', joining: '2024-02-01', status: 'active', medical: 'Fit', scores: { physical: 88, weapons: 82, mental: 79, combat: 86, attendance: 93, discipline: 90 }, equipment: ['INSAS Rifle', 'Para Suit', 'Combat Uniform'], events: ['Jump Certified — Apr 2024'], emergency: { name: 'Sanjay Yadav', phone: '9876502008', relation: 'Father' } },
  { id: 301, battalionId: 3, soldierId: 'AGN-2024-0301', name: 'Sourav Das', rank: 'Sepoy', dob: '2002-01-14', gender: 'Male', blood: 'B+', phone: '9876503001', email: 'sourav.d@army.in', state: 'WB', city: 'Kolkata', joining: '2024-02-15', status: 'active', medical: 'Fit', scores: { physical: 86, weapons: 80, mental: 83, combat: 85, attendance: 94, discipline: 88 }, equipment: ['INSAS Rifle', 'Combat Uniform', 'Tactical Backpack'], events: ['Best Combat Drill — Mar 2025'], emergency: { name: 'Tapan Das', phone: '9876503002', relation: 'Father' } },
  { id: 302, battalionId: 3, soldierId: 'AGN-2024-0302', name: 'Rekha Bose', rank: 'Sepoy', dob: '2003-04-20', gender: 'Female', blood: 'O+', phone: '9876503003', email: 'rekha.b@army.in', state: 'WB', city: 'Howrah', joining: '2024-02-15', status: 'active', medical: 'Fit', scores: { physical: 79, weapons: 71, mental: 90, combat: 75, attendance: 96, discipline: 94 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: ['Best Academic — 2024'], emergency: { name: 'Mina Bose', phone: '9876503004', relation: 'Mother' } },
  { id: 303, battalionId: 3, soldierId: 'AGN-2024-0303', name: 'Amit Ghosh', rank: 'Sepoy', dob: '2002-09-02', gender: 'Male', blood: 'A+', phone: '9876503005', email: 'amit.g@army.in', state: 'WB', city: 'Durgapur', joining: '2024-02-15', status: 'active', medical: 'Fit', scores: { physical: 72, weapons: 65, mental: 68, combat: 69, attendance: 80, discipline: 72 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: [], emergency: { name: 'Suresh Ghosh', phone: '9876503006', relation: 'Father' } },
  { id: 304, battalionId: 3, soldierId: 'AGN-2024-0304', name: 'Ranjit Singh', rank: 'Lance Naik', dob: '2001-07-25', gender: 'Male', blood: 'B+', phone: '9876503007', email: 'ranjit.s@army.in', state: 'Punjab', city: 'Ludhiana', joining: '2024-02-15', status: 'active', medical: 'Fit', scores: { physical: 90, weapons: 92, mental: 84, combat: 91, attendance: 98, discipline: 95 }, equipment: ['INSAS Rifle', 'Combat Uniform', 'Ballistic Helmet'], events: ['Best Shooter — Feb 2025'], emergency: { name: 'Gurjant Singh', phone: '9876503008', relation: 'Father' } },
  { id: 401, battalionId: 4, soldierId: 'AGN-2024-0401', name: 'Suresh Patil', rank: 'Sepoy', dob: '2002-06-18', gender: 'Male', blood: 'O+', phone: '9876504001', email: 'suresh.p@army.in', state: 'Maharashtra', city: 'Pune', joining: '2024-03-01', status: 'active', medical: 'Fit', scores: { physical: 83, weapons: 79, mental: 76, combat: 81, attendance: 89, discipline: 86 }, equipment: ['INSAS Rifle', 'Combat Uniform', 'Tactical Backpack'], events: ['Sprint Champion — 2024'], emergency: { name: 'Ganesh Patil', phone: '9876504002', relation: 'Father' } },
  { id: 402, battalionId: 4, soldierId: 'AGN-2024-0402', name: 'Rohini Jadhav', rank: 'Sepoy', dob: '2003-11-09', gender: 'Female', blood: 'A+', phone: '9876504003', email: 'rohini.j@army.in', state: 'Maharashtra', city: 'Nashik', joining: '2024-03-01', status: 'active', medical: 'Fit', scores: { physical: 76, weapons: 68, mental: 86, combat: 72, attendance: 91, discipline: 90 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: ['Best Mental Resilience — 2024'], emergency: { name: 'Sunita Jadhav', phone: '9876504004', relation: 'Mother' } },
  { id: 403, battalionId: 4, soldierId: 'AGN-2024-0403', name: 'Santosh More', rank: 'Sepoy', dob: '2002-03-14', gender: 'Male', blood: 'B-', phone: '9876504005', email: 'santosh.m@army.in', state: 'Maharashtra', city: 'Aurangabad', joining: '2024-03-01', status: 'active', medical: 'Under Observation (Back)', scores: { physical: 70, weapons: 66, mental: 62, combat: 68, attendance: 78, discipline: 70 }, equipment: ['INSAS Rifle', 'Combat Uniform'], events: [], emergency: { name: 'Bhimrao More', phone: '9876504006', relation: 'Father' } },
  { id: 404, battalionId: 4, soldierId: 'AGN-2024-0404', name: 'Vijay Deshmukh', rank: 'Sepoy', dob: '2001-08-30', gender: 'Male', blood: 'A-', phone: '9876504007', email: 'vijay.d@army.in', state: 'Maharashtra', city: 'Nagpur', joining: '2024-03-01', status: 'active', medical: 'Fit', scores: { physical: 88, weapons: 85, mental: 82, combat: 87, attendance: 95, discipline: 92 }, equipment: ['INSAS Rifle', 'Combat Uniform', 'Ballistic Helmet'], events: ['Best All-Rounder — 2024'], emergency: { name: 'Prakash Deshmukh', phone: '9876504008', relation: 'Father' } },
];

export const INIT_APPLICATIONS = [
  { id: 'APP-2025-001', name: 'Aryan Kumar Sharma', dob: '2003-05-14', state: 'Rajasthan', education: '12th Pass', height: 172, weight: 65, phone: '9898989891', email: 'aryan@email.com', force: 'Army', trade: 'Agniveer GD', status: 'Under Review', date: '12 Mar 2025', notes: '', verifiedBy: '' },
  { id: 'APP-2025-002', name: 'Priya Kumari Singh', dob: '2002-11-22', state: 'Bihar', education: '12th Pass', height: 162, weight: 55, phone: '9898989892', email: 'priya@email.com', force: 'Army', trade: 'Agniveer GD', status: 'Verified', date: '10 Mar 2025', notes: 'All documents verified. Eligible.', verifiedBy: 'Maj. Ankit Verma' },
  { id: 'APP-2025-003', name: 'Karan Deep Singh', dob: '2004-02-08', state: 'Punjab', education: '12th Pass', height: 175, weight: 68, phone: '9898989893', email: 'karan@email.com', force: 'Army', trade: 'Agniveer Tech', status: 'Pending Docs', date: '09 Mar 2025', notes: 'Awaiting education certificate.', verifiedBy: '' },
  { id: 'APP-2025-004', name: 'Meena Devi', dob: '2003-07-30', state: 'HP', education: '10th Pass', height: 158, weight: 50, phone: '9898989894', email: 'meena@email.com', force: 'Army', trade: 'Agniveer GD', status: 'Rejected', date: '08 Mar 2025', notes: 'Education qualification not meeting minimum criteria for applied trade.', verifiedBy: 'Maj. Ankit Verma' },
  { id: 'APP-2025-005', name: 'Rohan Joshi', dob: '2004-01-15', state: 'Gujarat', education: '12th Pass', height: 170, weight: 63, phone: '9898989895', email: 'rohan@email.com', force: 'Army', trade: 'Agniveer GD', status: 'Selected', date: '07 Mar 2025', notes: 'All checks passed. Eligible for training.', verifiedBy: 'Maj. Ankit Verma' },
  { id: 'APP-2025-006', name: 'Sneha Gupta', dob: '2002-09-03', state: 'UP', education: '12th Pass', height: 160, weight: 53, phone: '9898989896', email: 'sneha@email.com', force: 'Army', trade: 'Agniveer GD', status: 'Under Review', date: '06 Mar 2025', notes: '', verifiedBy: '' },
  { id: 'APP-2025-007', name: 'Ajay Thakur', dob: '2003-12-20', state: 'HP', education: 'ITI', height: 174, weight: 70, phone: '9898989897', email: 'ajay@email.com', force: 'Army', trade: 'Agniveer Tech', status: 'Under Review', date: '05 Mar 2025', notes: '', verifiedBy: '' },
];

export const INIT_SOS = [
  { id: 'SOS-0037', type: 'Drill', battalionId: 1, battalionName: '1st Rajputana Rifles', message: 'Emergency response drill — all units report to designated stations immediately.', triggeredAt: '14:32 hrs, 14 Mar 2025', triggeredBy: 'Maj. Ankit Verma', status: 'active', resolvedAt: '' },
  { id: 'SOS-0036', type: 'Test', battalionId: null, battalionName: 'All Battalions', message: 'System test alert. No action required.', triggeredAt: '09:00 hrs, 10 Mar 2025', triggeredBy: 'Maj. Ankit Verma', status: 'resolved', resolvedAt: '09:45 hrs, 10 Mar 2025' },
  { id: 'SOS-0035', type: 'Drill', battalionId: 2, battalionName: '1st Parachute Regiment', message: 'Fire drill. Evacuate to parade ground immediately.', triggeredAt: '16:00 hrs, 05 Mar 2025', triggeredBy: 'Col. S.P. Mehta', status: 'resolved', resolvedAt: '16:30 hrs, 05 Mar 2025' },
];

// Utility functions
export const overall = (scores) => Math.round((scores.physical + scores.weapons + scores.mental + scores.combat + scores.attendance + scores.discipline) / 6 * 10) / 10;

export const grade = (v) => v >= 90 ? { l: 'Outstanding', c: 'bg' } : v >= 80 ? { l: 'Good', c: 'bb' } : v >= 70 ? { l: 'Average', c: 'bo' } : { l: 'Needs Improvement', c: 'br' };

export const fillCls = (v) => v >= 85 ? 'sf-g' : v >= 70 ? 'sf-o' : 'sf-r';

export const scoreColor = (v) => v >= 85 ? '#2e7d32' : v >= 70 ? '#e65100' : '#c0392b';

export const getInsights = (scores) => {
  const cats = [
    { key: 'physical', label: 'Physical Fitness', tips: { low: 'Daily 5km run, stamina drills, strength training. Target: +5 points/month.', mid: 'Maintain PT. Add sprint intervals 3×/week.', high: 'Excellent — lead PT sessions to mentor peers.' } },
    { key: 'weapons', label: 'Weapons Handling', tips: { low: 'Increase range practice to daily. Focus on accuracy over speed. Use dry-fire drills.', mid: 'Add moving target practice. Improve reload speed.', high: 'Excellent — consider advanced marksmanship.' } },
    { key: 'mental', label: 'Mental Resilience', tips: { low: 'Weekly counseling sessions. Meditation 20 min/day. Stress-inoculation training.', mid: 'Continue resilience workshops. Group problem-solving.', high: 'Excellent — assist trainer in resilience sessions.' } },
    { key: 'combat', label: 'Combat Drills', tips: { low: 'Extra obstacle course 3×/week. Buddy training recommended.', mid: 'Complex scenario drills. Improve decision speed.', high: 'Excellent — ready for advanced tactical training.' } },
    { key: 'attendance', label: 'Attendance', tips: { low: 'Critical. Counseling recommended. Review health issues.', mid: 'Minor gaps — ensure all absences are justified.', high: 'Perfect — exemplary discipline.' } },
    { key: 'discipline', label: 'Discipline', tips: { low: 'Conduct counseling. Review Military Discipline Code.', mid: 'Good conduct. Focus on punctuality.', high: 'Exemplary — recommend for leadership roles.' } },
  ];
  const strengths = [], warnings = [], improvements = [];
  cats.forEach(c => {
    const v = scores[c.key];
    if (v >= 85) strengths.push({ label: c.label, score: v, tip: c.tips.high });
    else if (v >= 70) warnings.push({ label: c.label, score: v, tip: c.tips.mid });
    else improvements.push({ label: c.label, score: v, tip: c.tips.low });
  });
  return { strengths, warnings, improvements };
};

export const AppDataProvider = ({ children }) => {
  const [soldiers, setSoldiers] = useState(INIT_SOLDIERS);
  const [battalions, setBattalions] = useState(INIT_BATTALIONS);
  const [applications, setApplications] = useState(INIT_APPLICATIONS);
  const [sosAlerts, setSosAlerts] = useState(INIT_SOS);

  const updateSoldier = (id, data) => {
    setSoldiers(prev => prev.map(s => s.id === id ? { ...s, ...data } : s));
  };

  const updateBattalion = (id, data) => {
    setBattalions(prev => prev.map(b => b.id === id ? { ...b, ...data } : b));
  };

  const updateApplication = (id, data) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, ...data } : a));
  };

  const addSOSAlert = (alert) => {
    setSosAlerts(prev => [alert, ...prev]);
  };

  const resolveSOS = (id) => {
    const now = new Date();
    const t = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ' hrs, ' + now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    setSosAlerts(prev => prev.map(s => s.id === id ? { ...s, status: 'resolved', resolvedAt: t } : s));
  };

  const value = {
    soldiers,
    battalions,
    applications,
    sosAlerts,
    updateSoldier,
    updateBattalion,
    updateApplication,
    addSOSAlert,
    resolveSOS,
  };

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataContext;
