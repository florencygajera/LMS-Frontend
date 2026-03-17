import { useState } from 'react';
import { GovStrip, SiteHeader } from './Header';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

// Main Layout Component
export const MainLayout = ({ 
  children, 
  page, 
  setPage, 
  user, 
  setUser, 
  sosAlerts = [],
  showSidebar = true 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Government Strip */}
      <GovStrip />
      
      {/* Site Header */}
      <SiteHeader onHome={() => setPage('home')} />
      
      {/* Navigation Bar */}
      <Navbar page={page} setPage={setPage} user={user} setUser={setUser} />
      
      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar */}
        {showSidebar && user && (
          <Sidebar 
            page={page} 
            setPage={setPage} 
            user={user} 
            sosAlerts={sosAlerts} 
          />
        )}
        
        {/* Main Content */}
        <main className={`flex-1 ${showSidebar && user ? '' : 'max-w-[1600px] mx-auto w-full'} p-6`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
