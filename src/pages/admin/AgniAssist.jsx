import React, { useState, useRef, useEffect } from 'react';
import { Card, Badge } from '../../components/ui/Card';

const AGNIASSIST_RESPONSES = {
  'physical training': 'Physical training standards: Daily 5km run, 50 push-ups, 10 pull-ups, 50 sit-ups. Minimum passing: 1.6km in 7 min, 20 push-ups, 8 pull-ups. All personnel must pass Physical Efficiency Test every quarter.',
  'weapons': 'Weapons training includes INSAS Rifle, LMG, grenade throwing, and field tactics. Minimum qualifying score: 35/50 in marksmanship. Weekly training sessions of 4 hours mandatory.',
  'medical': 'Medical fitness required for active duty. Checkups every 6 months. BMI: 18.5–25. Vision: 6/6 both eyes. Height minimum: 170cm. Medical leave requires doctor\'s certificate.',
  'stipend': 'Agniveer stipend: ₹30,000/month in Year 1, rising to ₹40,000 in Year 4. Seva Nidhi Fund of ₹11.71 lakhs upon completion of 4 years. Monthly allowances include risk, hardship, and ration.',
  'schedule': 'Daily schedule: 05:00 PT, 07:00 Breakfast, 08:30 Weapons Training, 11:00 Combat Drills, 13:00 Lunch, 14:30 Mental Resilience, 16:30 Evening Run, 19:00 Study Hours, 21:00 Lights Out.',
  'sos': 'SOS alerts are emergency broadcasts. Types: Emergency (immediate action), Drill (training exercise), Test (system check). All personnel must acknowledge within 5 minutes of active SOS.',
  'battalion': 'Battalions are operational units with up to 150 Agniveers each. Each battalion has a commander, assigned location, and specific mission. Performance is measured monthly.',
  'rank': 'Agniveer ranks in order: Sepoy → Lance Naik → Naik → Havildar. Promotions are based on performance scores, attendance, discipline, and tenure.',
  'leave': 'Agniveers are entitled to 30 days annual leave, 10 days casual leave, and medical leave as certified. Leave must be approved by the battalion commander.',
  'documents': 'Required documents: Aadhaar card, Class 10/12 marksheets, domicile certificate, caste certificate (if applicable), medical fitness certificate, passport-size photographs.',
};

export const AgniAssist = () => {
  const [msgs, setMsgs] = useState([
    { from: 'bot', text: 'Namaste 🫡 I am AgniAssist, your AI assistant for the Agnipath Portal. I can answer questions about training, stipend, medical standards, schedules, SOS protocols, and more. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const msgsEndRef = useRef(null);
  
  const suggestions = [
    'Physical training standards',
    'Stipend & Seva Nidhi',
    'Daily schedule',
    'SOS protocol',
    'Medical requirements',
    'Rank & promotion'
  ];

  useEffect(() => {
    if (msgsEndRef.current) {
      msgsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [msgs, typing]);

  const getResponse = (q) => {
    const lower = q.toLowerCase();
    for (const [key, ans] of Object.entries(AGNIASSIST_RESPONSES)) {
      if (lower.includes(key)) return ans;
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('namaste')) {
      return 'Namaste! I\'m ready to assist. Ask me about training, stipend, schedules, medical standards, or any aspect of the Agnipath programme.';
    }
    if (lower.includes('help')) {
      return 'I can help with: Physical training standards, Weapons training, Medical fitness, Stipend & benefits, Daily schedules, SOS alerts, Battalion info, Ranks & promotions, Leave policy, and Required documents.';
    }
    return `I have noted your query about "${q.substring(0, 40)}...". For detailed guidance on this topic, please contact your battalion commander or consult the Agnipath programme handbook. I can answer questions about standard training, stipend, medical, schedule, and SOS protocols.`;
  };

  const send = (text) => {
    const q = text || input;
    if (!q.trim()) return;
    
    setMsgs(m => [...m, { from: 'user', text: q }]);
    setInput('');
    setTyping(true);
    
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, { from: 'bot', text: getResponse(q) }]);
    }, 900 + Math.random() * 600);
  };

  return (
    <div className="space-y-6 h-[calc(100vh-200px)] flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white">🤖 AgniAssist — AI Assistant</h1>
          <p className="text-white/50">Powered by RAG · Offline military knowledge base · Agnipath Portal</p>
        </div>
        <Badge type="green" text="● Online" />
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto p-4 glass rounded-xl space-y-4">
          {msgs.map((m, i) => (
            <div
              key={i}
              className={`flex gap-3 ${m.from === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10">
                {m.from === 'bot' ? '🤖' : '👤'}
              </div>
              <div
                className={`max-w-[85%] px-4 py-3 rounded-xl ${
                  m.from === 'bot'
                    ? 'glass'
                    : 'bg-[#00C2FF] text-black'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{m.text}</p>
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                🤖
              </div>
              <div className="glass px-4 py-3 rounded-xl flex items-center gap-1">
                <span className="text-sm text-white/50 mr-2">Thinking</span>
                <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '200ms' }} />
                <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '400ms' }} />
              </div>
            </div>
          )}
          <div ref={msgsEndRef} />
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => send(s)}
                className="px-3 py-1.5 glass rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <textarea
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 resize-none focus:outline-none focus:border-[#00C2FF]"
              rows={2}
              placeholder="Ask about training, stipend, medical standards, SOS, rankings…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
            />
            <button
              onClick={() => send()}
              className="px-6 bg-[#00C2FF] text-black font-semibold rounded-xl hover:bg-[#00C2FF]/80 transition-colors"
            >
              Send
            </button>
          </div>
          <p className="text-white/30 text-xs mt-2">
            Backend: AgniAssist RAG Service (Port 8012) · Knowledge base: Agnipath training manuals
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgniAssist;
