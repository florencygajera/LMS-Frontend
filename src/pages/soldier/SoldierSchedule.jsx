import React, { useState } from 'react';
import { Card, Badge } from '../../components/ui/Card';

export const SoldierSchedule = ({ battalion }) => {
  const [selectedDay, setSelectedDay] = useState(4); // Friday
  
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const scheduleData = [
    // Monday
    [
      { time: '05:00', activity: 'Morning Physical Training', location: 'Parade Ground', color: '#4a5e3a', done: true },
      { time: '07:00', activity: 'Breakfast & Rest', location: 'Mess Hall', color: '#b8941a', done: true },
      { time: '08:30', activity: 'Weapons Training', location: 'Range Area', color: '#c0392b', done: true },
      { time: '11:00', activity: 'Combat Drills', location: 'Obstacle Course', color: '#1a2d4a', done: true },
      { time: '13:00', activity: 'Lunch Break', location: 'Mess Hall', color: '#b8941a' },
      { time: '14:30', activity: 'Mental Resilience Class', location: 'Classroom Block A', color: '#1565c0' },
      { time: '16:30', activity: 'Evening Run (5 km)', location: 'Track', color: '#4a5e3a' },
      { time: '19:00', activity: 'Study Hours', location: 'Barrack', color: '#777' },
      { time: '21:00', activity: 'Lights Out', location: 'Barrack', color: '#444' }
    ],
    // Tuesday
    [
      { time: '05:00', activity: 'Morning Physical Training', location: 'Parade Ground', color: '#4a5e3a', done: true },
      { time: '07:00', activity: 'Breakfast & Rest', location: 'Mess Hall', color: '#b8941a', done: true },
      { time: '08:30', activity: 'Weapons Training', location: 'Range Area', color: '#c0392b', done: true },
      { time: '11:00', activity: 'Combat Drills', location: 'Obstacle Course', color: '#1a2d4a', done: true },
      { time: '13:00', activity: 'Lunch Break', location: 'Mess Hall', color: '#b8941a' },
      { time: '14:30', activity: 'Mental Resilience Class', location: 'Classroom Block A', color: '#1565c0' },
      { time: '16:30', activity: 'Evening Run (5 km)', location: 'Track', color: '#4a5e3a' },
      { time: '19:00', activity: 'Study Hours', location: 'Barrack', color: '#777' },
      { time: '21:00', activity: 'Lights Out', location: 'Barrack', color: '#444' }
    ],
    // Wednesday
    [
      { time: '05:00', activity: 'Morning Physical Training', location: 'Parade Ground', color: '#4a5e3a', done: true },
      { time: '07:00', activity: 'Breakfast & Rest', location: 'Mess Hall', color: '#b8941a', done: true },
      { time: '08:30', activity: 'Weapons Training', location: 'Range Area', color: '#c0392b', done: true },
      { time: '11:00', activity: 'Combat Drills', location: 'Obstacle Course', color: '#1a2d4a', done: true },
      { time: '13:00', activity: 'Lunch Break', location: 'Mess Hall', color: '#b8941a' },
      { time: '14:30', activity: 'Mental Resilience Class', location: 'Classroom Block A', color: '#1565c0' },
      { time: '16:30', activity: 'Evening Run (5 km)', location: 'Track', color: '#4a5e3a' },
      { time: '19:00', activity: 'Study Hours', location: 'Barrack', color: '#777' },
      { time: '21:00', activity: 'Lights Out', location: 'Barrack', color: '#444' }
    ],
    // Thursday
    [
      { time: '05:00', activity: 'Morning Physical Training', location: 'Parade Ground', color: '#4a5e3a', done: true },
      { time: '07:00', activity: 'Breakfast & Rest', location: 'Mess Hall', color: '#b8941a', done: true },
      { time: '08:30', activity: 'Weapons Training', location: 'Range Area', color: '#c0392b', done: true },
      { time: '11:00', activity: 'Combat Drills', location: 'Obstacle Course', color: '#1a2d4a', done: true },
      { time: '13:00', activity: 'Lunch Break', location: 'Mess Hall', color: '#b8941a' },
      { time: '14:30', activity: 'Mental Resilience Class', location: 'Classroom Block A', color: '#1565c0' },
      { time: '16:30', activity: 'Evening Run (5 km)', location: 'Track', color: '#4a5e3a' },
      { time: '19:00', activity: 'Study Hours', location: 'Barrack', color: '#777' },
      { time: '21:00', activity: 'Lights Out', location: 'Barrack', color: '#444' }
    ],
    // Friday (today)
    [
      { time: '05:00', activity: 'Morning Physical Training', location: 'Parade Ground', color: '#4a5e3a', done: true },
      { time: '07:00', activity: 'Breakfast & Rest', location: 'Mess Hall', color: '#b8941a', done: true },
      { time: '08:30', activity: 'Weapons Training', location: 'Range Area', color: '#c0392b', done: true },
      { time: '11:00', activity: 'Combat Drills', location: 'Obstacle Course', color: '#1a2d4a', active: true },
      { time: '13:00', activity: 'Lunch Break', location: 'Mess Hall', color: '#b8941a' },
      { time: '14:30', activity: 'Mental Resilience Class', location: 'Classroom Block A', color: '#1565c0' },
      { time: '16:30', activity: 'Evening Run (5 km)', location: 'Track', color: '#4a5e3a' },
      { time: '19:00', activity: 'Study Hours', location: 'Barrack', color: '#777' },
      { time: '21:00', activity: 'Lights Out', location: 'Barrack', color: '#444' }
    ],
    // Saturday
    [
      { time: '05:00', activity: 'Morning Physical Training', location: 'Parade Ground', color: '#4a5e3a' },
      { time: '07:00', activity: 'Breakfast & Rest', location: 'Mess Hall', color: '#b8941a' },
      { time: '08:30', activity: 'Weapons Training', location: 'Range Area', color: '#c0392b' },
      { time: '11:00', activity: 'Combat Drills', location: 'Obstacle Course', color: '#1a2d4a' },
      { time: '13:00', activity: 'Lunch Break', location: 'Mess Hall', color: '#b8941a' },
      { time: '14:30', activity: 'Weekend Brief', location: 'Parade Ground', color: '#1565c0' },
      { time: '16:30', activity: 'Sports & Recreation', location: 'Sports Complex', color: '#4a5e3a' },
      { time: '19:00', activity: 'Study Hours', location: 'Barrack', color: '#777' },
      { time: '21:00', activity: 'Lights Out', location: 'Barrack', color: '#444' }
    ],
    // Sunday
    [
      { time: '06:00', activity: 'Morning PT (Light)', location: 'Parade Ground', color: '#4a5e3a' },
      { time: '08:00', activity: 'Breakfast', location: 'Mess Hall', color: '#b8941a' },
      { time: '09:00', activity: 'Religious Services', location: 'Chapel/Mosque', color: '#1565c0' },
      { time: '11:00', activity: 'Free Time', location: 'Barrack', color: '#777' },
      { time: '13:00', activity: 'Lunch', location: 'Mess Hall', color: '#b8941a' },
      { time: '14:00', activity: 'Phone Call Home', location: 'Comm. Center', color: '#1565c0' },
      { time: '16:00', activity: 'Rest & Recreation', location: 'Barrack', color: '#777' },
      { time: '19:00', activity: 'Sunday Brief', location: 'Parade Ground', color: '#1565c0' },
      { time: '21:00', activity: 'Lights Out', location: 'Barrack', color: '#444' }
    ]
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Daily Schedule</h1>
        <p className="text-white/50">14 March 2025 · {battalion.name}</p>
      </div>

      {/* Day Selector */}
      <div className="flex gap-2 flex-wrap">
        {days.map((day, i) => (
          <button
            key={i}
            onClick={() => setSelectedDay(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedDay === i
                ? 'bg-[#00C2FF] text-black'
                : 'glass text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">{days[selectedDay]}ay Programme</h2>
          <Badge type="green" text="On Schedule" />
        </div>
        
        <div className="space-y-2">
          {scheduleData[selectedDay].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                item.active ? 'bg-[#FFB800]/10 border border-[#FFB800]/30' : 'hover:bg-white/5'
              }`}
            >
              <span className="font-mono text-sm text-white/50 w-12">{item.time}</span>
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{
                  borderColor: item.color,
                  backgroundColor: item.done ? item.color : item.active ? item.color : 'transparent'
                }}
              />
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  item.active ? 'text-[#FFB800]' : item.done ? 'text-white/70' : 'text-white'
                }`}>
                  {item.active && '▶ '}{item.activity}
                  {item.done && <span className="ml-2 text-[#00FF88] text-xs font-semibold">✓</span>}
                  {item.active && <Badge type="orange" text="In Progress" />}
                </p>
                <p className="text-xs text-white/50 mt-0.5">📍 {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SoldierSchedule;
