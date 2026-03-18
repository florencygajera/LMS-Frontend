import React from 'react';

export const LandingPage = ({ onNavigate }) => {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About Agnipath' },
    { key: 'recruitment', label: 'Recruitment' },
    { key: 'results', label: 'Results' },
  ];

  const stats = [
    { number: '46,000+', label: 'Applications' },
    { number: '8,400+', label: 'Active Agniveers' },
    { number: '4', label: 'Force Types' },
    { number: '124', label: 'Training Centres' },
    { number: '91%', label: 'Pass Rate 2024' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#13110f] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/163443/soldiers-army-obstacle-course-attack-163443.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

      <header className="relative z-20">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#d94f10] text-xl font-bold shadow-lg">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3L5 6v6c0 5 3 8 7 9 4-1 7-4 7-9V6l-7-3z" />
                <path d="M12 6v12" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Agniveer</h1>
              <p className="text-xs text-white/85 md:text-sm">
                Agnipath Scheme · Indian Army · Ministry of Defence
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-semibold text-white/95 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className="transition-colors hover:text-[#ffd28b]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => onNavigate('login')}
              className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#1d1d1d] transition-colors hover:bg-white/90"
            >
              Login to Portal
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="rounded-md bg-[#d94f10] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#bf430d]"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-4 pb-52 pt-16 text-center md:pb-44">
        <h2 className="max-w-[920px] text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
          Agniveer Official Portal Agnipath Scheme 2025
        </h2>

        <p className="mt-6 max-w-4xl text-lg text-white/95 md:text-3xl">
          Complete digital platform managing Agnipath scheme - recruitment, training, medical,
          performance analytics, and stipend for all serving Agniveers.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('login')}
            className="rounded-md bg-white px-7 py-3 text-lg font-semibold text-[#1f1f1f] transition-colors hover:bg-white/90"
          >
            Login to Portal
          </button>
          <button
            onClick={() => onNavigate('register')}
            className="rounded-md bg-[#d94f10] px-7 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#bf430d]"
          >
            Apply Now
          </button>
        </div>
      </main>

      <section className="absolute bottom-6 left-0 z-20 w-full px-4 md:bottom-8 md:px-8">
        <div className="mx-auto grid w-full max-w-[1220px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/20 bg-black/35 px-6 py-7 text-center shadow-2xl backdrop-blur-md"
            >
              <div className="text-4xl font-extrabold text-[#ffc72c]">{stat.number}</div>
              <div className="mt-2 text-2xl text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
