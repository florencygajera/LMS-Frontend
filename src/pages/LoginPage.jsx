import { useState } from 'react';

// Login/Register Page with Dark Theme
export const LoginPage = ({ mode, setPage, setUser }) => {
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

  const destinations = {
    CANDIDATE: 'candidate',
    SOLDIER: 'soldier',
    ADMIN: 'admin',
    TRAINER: 'trainer',
    DOCTOR: 'doctor'
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="glass rounded-t-2xl p-6 text-center border-b border-white/10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00C2FF] to-[#00FFE5] flex items-center justify-center">
            <span className="text-3xl">🎖️</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {mode === 'login' ? 'Agniveer Portal Login' : 'New Registration - Agnipath 2025'}
          </div>
          <div className="text-sm text-white/50">
            Official Portal · Ministry of Defence · Government of India
          </div>
        </div>

        <div className="glass rounded-b-2xl p-6">
          <div className="mb-6">
            <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-3">
              Select Role
            </label>
            <div className="flex flex-wrap gap-2">
              {roles.map(r => (
                <button
                  key={r.key}
                  onClick={() => setRole(r.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    role === r.key
                      ? 'bg-gradient-to-r from-[#00C2FF] to-[#00FFE5] text-[#0B0F19]'
                      : 'glass text-white/60 hover:text-white hover:border-[#00C2FF]/30'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {mode === 'register' && (
            <div className="mb-4">
              <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                Full Name (as in Aadhaar)
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
              {mode === 'login' ? 'Username / Registration ID' : 'Email Address'}
            </label>
            <input
              type="text"
              placeholder={mode === 'login' ? 'Enter username' : 'Enter email'}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
            />
          </div>

          {mode === 'register' && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="10-digit mobile"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
                />
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
            />
          </div>

          {mode === 'register' && (
            <div className="mb-4">
              <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                State of Domicile
              </label>
              <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00C2FF]/50 transition-colors">
                <option>Select State / UT</option>
                {['Uttar Pradesh', 'Rajasthan', 'Punjab', 'Maharashtra', 'Bihar', 'Gujarat', 'Haryana', 'HP', 'WB', 'MP', 'Tamil Nadu', 'Kerala'].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-6 p-3 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/20">
            <div className="text-xs text-[#00C2FF]">
              <strong>Demo Mode:</strong> Select any role above and click {mode === 'login' ? 'Login' : 'Register'} to preview that portal.
            </div>
          </div>

          <button
            onClick={() => {
              setUser({ name: names[role], role });
              setPage(destinations[role]);
            }}
            className="w-full py-3 bg-gradient-to-r from-[#00C2FF] to-[#00FFE5] text-[#0B0F19] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00C2FF]/30 transition-all"
          >
            {mode === 'login' ? 'Login to Portal' : 'Create Account & Proceed'}
          </button>

          <div className="mt-4 text-center text-sm text-white/50">
            {mode === 'login' ? (
              <>
                No account?{' '}
                <button onClick={() => setPage('register')} className="text-[#00C2FF] hover:underline">
                  Register here
                </button>
              </>
            ) : (
              <>
                Already registered?{' '}
                <button onClick={() => setPage('login')} className="text-[#00C2FF] hover:underline">
                  Login here
                </button>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-white/30">
          🔒 Secure Connection · Ministry of Defence · Govt. of India
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
