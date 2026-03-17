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
