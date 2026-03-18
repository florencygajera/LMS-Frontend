import React, { useState, useEffect } from 'react';
import { MainLayout } from './components/layout';
import { 
  LandingPage, LoginPage, AboutPage, RecruitmentPage, ResultsPage, 
  EligibilityPage, PhysicalStandardsPage, DocumentsRequiredPage, 
  SalaryBenefitsPage, FAQPage, ContactPage,
  AdminDashboard, AdminBattalions, BattalionDetail, SoldierDetail, 
  AdminAllSoldiers, AdminRankings, AdminApplications, AdminSOS, 
  AgniAssist, MLInsights, AuditLog, SoldierDashboard, SoldierTraining, 
  SoldierSchedule, SoldierMedical, SoldierEquipment, SoldierStipend, 
  SoldierInsights, SoldierDocs, CandidateApplication, CandidateStatus, 
  CandidateAdmitCard, TrainerDashboard, TrainerUpload, DoctorDashboard 
} from './pages';
import { EditSoldierModal, EditBattalionModal, AppReviewModal, SOSTriggerModal } from './components/modals';
import { useAppData } from './context/AppDataContext';

function App() {
  const { soldiers, battalions, applications, sosAlerts, setSoldiers, setBattalions, setApplications, setSosAlerts } = useAppData();
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  
  // Modal states
  const [editSoldier, setEditSoldier] = useState(null);
  const [editBattalion, setEditBattalion] = useState(null);
  const [reviewApp, setReviewApp] = useState(null);
  const [showSosTrigger, setShowSosTrigger] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');

  // Get current soldier and battalion for soldier portal
  const currentSoldier = soldiers[0] || null;
  const currentBattalion = battalions.find(b => b.id === currentSoldier?.battalionId) || battalions[0] || null;

  // Show saved message
  const showSaved = (msg) => {
    setSavedMsg(msg);
    setTimeout(() => setSavedMsg(''), 3000);
  };

  // Handlers
  const saveSoldier = (updated) => {
    setSoldiers(prev => prev.map(s => s.id === updated.id ? updated : s));
    setEditSoldier(null);
    showSaved('Soldier details updated successfully.');
  };

  const saveBattalion = (updated) => {
    setBattalions(prev => prev.map(b => b.id === updated.id ? updated : b));
    setEditBattalion(null);
    showSaved('Battalion details updated successfully.');
  };

  const saveApplication = (updated) => {
    setApplications(prev => prev.map(a => a.id === updated.id ? updated : a));
    setReviewApp(null);
    showSaved('Application updated successfully.');
  };

  const triggerSOS = (alert) => {
    setSosAlerts(prev => [alert, ...prev]);
    setShowSosTrigger(false);
    showSaved(`SOS Alert ${alert.id} triggered successfully.`);
  };

  const resolveSOS = (id) => {
    const now = new Date();
    const t = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ' hrs, ' + now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    setSosAlerts(prev => prev.map(s => s.id === id ? { ...s, status: 'resolved', resolvedAt: t } : s));
    showSaved('SOS Alert resolved.');
  };

  // Admin pages
  const adminPages = ['admin', 'admin-battalions', 'admin-soldiers', 'admin-rankings', 'admin-applications', 'admin-sos', 'admin-agniassist', 'admin-ml', 'admin-audit'];
  const isAdmin = adminPages.includes(page) || page.startsWith('bat_') || page.startsWith('sol_');

  // Public pages that should show header/navbar but no sidebar
  const publicPages = ['home', 'about', 'recruitment', 'results', 'eligibility', 'physical-standards', 'documents-required', 'salary-benefits', 'faq', 'contact', 'login', 'register'];
  const isPublicPage = publicPages.includes(page);

  // Render content based on page
  const renderContent = () => {
    // Standalone hero landing page (without app chrome)
    if (!user && page === 'home') {
      return <LandingPage onNavigate={setPage} />;
    }

    // For logged in users, use MainLayout with sidebar
    if (user) {
      return (
        <MainLayout 
          page={page} 
          setPage={setPage} 
          user={user} 
          setUser={(u) => { setUser(u); if (!u) setPage('home'); }}
          sosAlerts={sosAlerts}
          showSidebar={true}
        >
          {renderPageContent()}
        </MainLayout>
      );
    }

    // For public pages, use MainLayout without sidebar
    if (isPublicPage) {
      return (
        <MainLayout 
          page={page} 
          setPage={setPage} 
          user={user} 
          setUser={(u) => { setUser(u); if (!u) setPage('home'); }}
          showSidebar={false}
        >
          {renderPageContent()}
        </MainLayout>
      );
    }

    // Default fallback
    return renderPageContent();
  };

  // Render the actual page content
  const renderPageContent = () => {
    // Public pages
    if (page === 'home') {
      return <LandingPage onNavigate={setPage} />;
    }

    if (page === 'about') {
      return <AboutPage onNavigate={setPage} />;
    }

    if (page === 'recruitment') {
      return <RecruitmentPage onNavigate={setPage} />;
    }

    if (page === 'results') {
      return <ResultsPage onNavigate={setPage} />;
    }

    if (page === 'eligibility') {
      return <EligibilityPage onNavigate={setPage} />;
    }

    if (page === 'physical-standards') {
      return <PhysicalStandardsPage onNavigate={setPage} />;
    }

    if (page === 'documents-required') {
      return <DocumentsRequiredPage onNavigate={setPage} />;
    }

    if (page === 'salary-benefits') {
      return <SalaryBenefitsPage onNavigate={setPage} />;
    }

    if (page === 'faq') {
      return <FAQPage onNavigate={setPage} />;
    }

    if (page === 'contact') {
      return <ContactPage onNavigate={setPage} />;
    }

    if (page === 'login' || page === 'register') {
      return (
        <LoginPage 
          mode={page} 
          onLogin={(userData) => {
            setUser(userData);
            setPage(userData.role.toLowerCase());
          }}
          onSwitchMode={() => setPage(page === 'login' ? 'register' : 'login')}
        />
      );
    }

    // Admin pages
    if (isAdmin && user?.role === 'ADMIN') {
      const adminProps = {
        page, setPage, user, soldiers, battalions, applications, sosAlerts,
        setSoldiers, setBattalions, setApplications, setSosAlerts,
        onEditSoldier: setEditSoldier, onEditBattalion: setEditBattalion,
        onReviewApp: setReviewApp, onTriggerSOS: () => setShowSosTrigger(true),
        onResolveSOS: resolveSOS
      };

      if (page === 'admin') return <AdminDashboard {...adminProps} />;
      if (page === 'admin-battalions') return <AdminBattalions {...adminProps} />;
      if (page.startsWith('bat_')) return <BattalionDetail batId={parseInt(page.split('_')[1])} {...adminProps} />;
      if (page === 'admin-soldiers') return <AdminAllSoldiers {...adminProps} />;
      if (page.startsWith('sol_')) return <SoldierDetail solId={parseInt(page.split('_')[1])} {...adminProps} />;
      if (page === 'admin-rankings') return <AdminRankings {...adminProps} />;
      if (page === 'admin-applications') return <AdminApplications {...adminProps} />;
      if (page === 'admin-sos') return <AdminSOS {...adminProps} />;
      if (page === 'admin-agniassist') return <AgniAssist />;
      if (page === 'admin-ml') return <MLInsights soldiers={soldiers} battalions={battalions} />;
      if (page === 'admin-audit') return <AuditLog />;
    }

    // Soldier pages
    if (user?.role === 'SOLDIER') {
      const soldierProps = { soldier: currentSoldier, battalion: currentBattalion, allSoldiers: soldiers };

      if (page === 'soldier') return <SoldierDashboard {...soldierProps} />;
      if (page === 'training') return <SoldierTraining {...soldierProps} />;
      if (page === 'schedule') return <SoldierSchedule {...soldierProps} />;
      if (page === 'medical') return <SoldierMedical {...soldierProps} />;
      if (page === 'equipment') return <SoldierEquipment {...soldierProps} />;
      if (page === 'stipend') return <SoldierStipend {...soldierProps} />;
      if (page === 'soldier-ai') return <AgniAssist />;
      if (page === 'soldier-insights') return <SoldierInsights {...soldierProps} />;
      if (page === 'soldier-docs') return <SoldierDocs {...soldierProps} />;
    }

    // Candidate pages
    if (user?.role === 'CANDIDATE') {
      if (page === 'candidate') return <CandidateApplication />;
      if (page === 'status') return <CandidateStatus />;
      if (page === 'admitcard') return <CandidateAdmitCard />;
    }

    // Trainer pages
    if (user?.role === 'TRAINER') {
      const trainerProps = { soldiers, battalion: currentBattalion };
      if (page === 'trainer') return <TrainerDashboard {...trainerProps} />;
      if (page === 'upload') return <TrainerUpload />;
    }

    // Doctor pages
    if (user?.role === 'DOCTOR') {
      return <DoctorDashboard />;
    }

    // Default to landing page
    return <LandingPage onNavigate={setPage} />;
  };

  // Show modals
  const renderModals = () => (
    <>
      {editSoldier && (
        <EditSoldierModal
          soldier={editSoldier}
          onSave={saveSoldier}
          onClose={() => setEditSoldier(null)}
        />
      )}
      {editBattalion && (
        <EditBattalionModal
          battalion={editBattalion}
          onSave={saveBattalion}
          onClose={() => setEditBattalion(null)}
        />
      )}
      {reviewApp && (
        <AppReviewModal
          app={reviewApp}
          onSave={saveApplication}
          onClose={() => setReviewApp(null)}
          adminName={user?.name}
        />
      )}
      {showSosTrigger && (
        <SOSTriggerModal
          battalions={battalions}
          onSave={triggerSOS}
          onClose={() => setShowSosTrigger(false)}
          adminName={user?.name}
        />
      )}
    </>
  );

  return (
    <div className="min-h-screen">
      {renderContent()}
      {renderModals()}
      {savedMsg && (
        <div className="fixed bottom-4 right-4 bg-[#00FF88] text-black px-6 py-3 rounded-lg font-semibold shadow-lg z-50">
          ✓ {savedMsg}
        </div>
      )}
    </div>
  );
}

export default App;
