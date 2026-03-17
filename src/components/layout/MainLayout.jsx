import Sidebar from './Sidebar';

const MainLayout = ({ children, user, page, setPage, sosCount = 0, appCount = 0 }) => {
  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      <Sidebar 
        user={user} 
        page={page} 
        setPage={setPage} 
        sosCount={sosCount}
        appCount={appCount}
      />
      <div className="flex-1 bg-[#ededea] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
