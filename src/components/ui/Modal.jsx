const Modal = ({ title, onClose, children, footer, large }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/45 z-[999] flex items-center justify-center p-5"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={`bg-white border border-[#d0d0c8] w-full max-h-[90vh] overflow-y-auto shadow-lg ${large ? 'max-w-[780px]' : 'max-w-[600px]'}`}>
        <div className="flex justify-between items-center px-5 py-3.5 border-b border-[#d0d0c8] bg-[#f5f5f0] sticky top-0 z-10">
          <div className="font-bold text-[16px] text-[#1a2d4a]">{title}</div>
          <button 
            className="bg-none border-none text-[20px] cursor-pointer text-[#777] leading-none p-1 hover:text-[#1a1a1a]"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="p-5">{children}</div>
        {footer && (
          <div className="flex justify-end gap-2.5 px-5 py-3.5 border-t border-[#d0d0c8] bg-[#f5f5f0] sticky bottom-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
