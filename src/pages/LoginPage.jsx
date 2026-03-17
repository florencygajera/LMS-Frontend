import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = ({ mode, setPage }) => {
  const [role, setRole] = useState('CANDIDATE');
  const { login } = useAuth();

  const roles = [
    { k: 'CANDIDATE', l: 'Candidate' },
    { k: 'SOLDIER', l: 'Soldier' },
    { k: 'ADMIN', l: 'Admin' },
    { k: 'TRAINER', l: 'Trainer' },
    { k: 'DOCTOR', l: 'Doctor' }
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

  const handleLogin = async () => {
    const result = await login({ role, name: names[role] });
    if (result.success) {
      setPage(dests[role]);
    }
  };

  return (
    <div className="bg-[#f5f5f0] min-h-[calc(100vh-116px)] py-10">
      <div className="max-w-[500px] mx-auto px-4">
        <div className="bg-[#344228] text-white px-5 py-3.5">
          <div className="font-serif text-[18px] font-bold">
            {mode === 'login' ? 'Agniveer Portal Login' : 'New Registration — Agnipath 2025'}
          </div>
          <div className="text-[12px] text-white/70 mt-0.5">Official Portal · Ministry of Defence · Government of India</div>
        </div>
        
        <div className="bg-white border border-[#d0d0c8] p-5.5">
          {/* Role Selection */}
          <div className="mb-4">
            <div className="text-[11px] font-bold text-[#444] uppercase mb-2">Select Role</div>
            <div className="flex gap-1.5 flex-wrap">
              {roles.map(r => (
                <button
                  key={r.k}
                  onClick={() => setRole(r.k)}
                  className={`px-3.5 py-1.5 text-[13px] cursor-pointer border font-inherit transition-all ${
                    role === r.k
                      ? 'border-[#4a5e3a] bg-[#4a5e3a] text-white font-semibold'
                      : 'border-[#d0d0c8] bg-white text-[#444] hover:border-[#4a5e3a]'
                  }`}
                >
                  {r.l}
                </button>
              ))}
            </div>
          </div>

          {mode === 'register' && (
            <div className="mb-3.5">
              <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">Full Name (as in Aadhaar)</label>
              <input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none focus:border-[#4a5e3a]" placeholder="Enter full name" />
            </div>
          )}

          <div className="mb-3.5">
            <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">
              {mode === 'login' ? 'Username / Registration ID' : 'Email Address'}
            </label>
            <input 
              className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none focus:border-[#4a5e3a]" 
              placeholder={mode === 'login' ? 'Enter username' : 'Enter email'} 
            />
          </div>

          {mode === 'register' && (
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">Mobile Number</label>
                <input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none focus:border-[#4a5e3a]" placeholder="10-digit mobile" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">Date of Birth</label>
                <input className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none focus:border-[#4a5e3a]" type="date" />
              </div>
            </div>
          )}

          <div className="mb-3.5">
            <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">Password</label>
            <input 
              className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none focus:border-[#4a5e3a]" 
              type="password" 
              placeholder="Enter password" 
            />
          </div>

          {mode === 'register' && (
            <div className="mb-3.5">
              <label className="block text-[11px] font-bold text-[#444] mb-1 uppercase tracking-[0.5px]">State of Domicile</label>
              <select className="w-full px-3 py-2 border border-[#d0d0c8] text-[13px] outline-none focus:border-[#4a5e3a]">
                <option>Select State / UT</option>
                {['Uttar Pradesh', 'Rajasthan', 'Punjab', 'Maharashtra', 'Bihar', 'Gujarat', 'Haryana', 'HP', 'WB', 'MP', 'Tamil Nadu', 'Kerala'].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          <div className="bg-[#e3f2fd] text-[#0d47a1] text-[13px] px-3.5 py-2 mb-3">
            <strong>Demo Mode:</strong> Select any role above and click {mode === 'login' ? 'Login' : 'Register'} to preview that portal.
          </div>

          <button 
            className="w-full px-4 py-2.5 text-[14px] font-semibold bg-[#4a5e3a] text-white hover:bg-[#344228] border-none cursor-pointer flex justify-center items-center gap-1.5"
            onClick={handleLogin}
          >
            {mode === 'login' ? 'Login to Portal' : 'Create Account & Proceed'}
          </button>

          <div className="text-center mt-3 text-[13px] text-[#777]">
            {mode === 'login' ? (
              <>No account? <button className="text-[#1565c0] bg-none border-none cursor-pointer p-0 underline" onClick={() => setPage('register')}>Register here</button></>
            ) : (
              <>Already registered? <button className="text-[#1565c0] bg-none border-none cursor-pointer p-0 underline" onClick={() => setPage('login')}>Login here</button></>
            )}
          </div>
        </div>

        <div className="text-center mt-2.5 text-[11px] text-[#777]">🔒 Secure Connection · Ministry of Defence · Govt. of India</div>
      </div>
    </div>
  );
};

export default LoginPage;
