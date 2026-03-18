import React, { useState } from 'react';

export const LoginPage = ({ mode = 'login', onLogin, onSwitchMode, onClose }) => {
  const [role, setRole] = useState('CANDIDATE');
  
  const roles = [
    { key: 'CANDIDATE', label: 'Candidate' },
    { key: 'SOLDIER', label: 'Soldier' },
    { key: 'ADMIN', label: 'Admin' },
    { key: 'TRAINER', label: 'Trainer' },
    { key: 'DOCTOR', label: 'Doctor' }
  ];

  const names = {
    CANDIDATE: 'Aryan Sharma',
    SOLDIER: 'Rajveer Singh Chauhan',
    ADMIN: 'Maj. Ankit Verma',
    TRAINER: 'Cpt. Pradeep Kumar',
    DOCTOR: 'Dr. Sunita Rao'
  };

  const dests = {
    CANDIDATE: 'candidate',
    SOLDIER: 'soldier',
    ADMIN: 'admin',
    TRAINER: 'trainer',
    DOCTOR: 'doctor'
  };

  const handleLogin = () => {
    onLogin({ name: names[role], role });
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-[#1a3a5c] p-6 rounded-t-xl">
          <h1 className="text-xl font-bold text-white">
            {mode === 'login' ? 'Agniveer Portal Login' : 'New Registration — Agnipath 2025'}
          </h1>
          <p className="text-xs text-white/70 mt-1">
            Official Portal · Ministry of Defence · Government of India
          </p>
        </div>

        {/* Form */}
        <div className="glass p-6 rounded-b-xl">
          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm text-white/70 mb-3">Select Role</label>
            <div className="flex flex-wrap gap-2">
              {roles.map(r => (
                <button
                  key={r.key}
                  onClick={() => setRole(r.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    role === r.key
                      ? 'bg-[#00C2FF] text-black'
                      : 'glass text-white/70 hover:text-white'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {mode === 'register' && (
            <div className="mb-4">
              <label className="block text-sm text-white/70 mb-2">Full Name (as in Aadhaar)</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm text-white/70 mb-2">
              {mode === 'login' ? 'Username / Registration ID' : 'Email Address'}
            </label>
            <input
              type="text"
              placeholder={mode === 'login' ? 'Enter username' : 'Enter email'}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
            />
          </div>

          {mode === 'register' && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Mobile Number</label>
                <input
                  type="text"
                  placeholder="10-digit mobile"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]"
                />
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm text-white/70 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]"
            />
          </div>

          {mode === 'register' && (
            <div className="mb-4">
              <label className="block text-sm text-white/70 mb-2">State of Domicile</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00C2FF]">
                <option>Select State / UT</option>
                {['Uttar Pradesh', 'Rajasthan', 'Punjab', 'Maharashtra', 'Bihar', 'Gujarat', 'Haryana', 'HP', 'WB', 'MP', 'Tamil Nadu', 'Kerala'].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          <div className="glass rounded-lg p-3 mb-4 border-l-4 border-[#00C2FF]">
            <p className="text-sm text-white/70">
              <strong>Demo Mode:</strong> Select any role above and click {mode === 'login' ? 'Login' : 'Register'} to preview that portal.
            </p>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 bg-[#00C2FF] text-black font-semibold rounded-lg hover:bg-[#00C2FF]/80 transition-colors"
          >
            {mode === 'login' ? 'Login to Portal' : 'Create Account & Proceed'}
          </button>

          <p className="text-center text-sm text-white/50 mt-4">
            {mode === 'login' ? (
              <>No account? <button onClick={onSwitchMode} className="text-[#00C2FF] hover:underline">Register here</button></>
            ) : (
              <>Already registered? <button onClick={onSwitchMode} className="text-[#00C2FF] hover:underline">Login here</button></>
            )}
          </p>
        </div>

        <p className="text-center text-xs text-white/30 mt-4">
          🔒 Secure Connection · Ministry of Defence · Govt. of India
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
