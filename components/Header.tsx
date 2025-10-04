import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-surface border-b border-brand-border p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h1 className="text-xl font-bold text-brand-text">Çalışan Aktivite Monitörü</h1>
      </div>
    </header>
  );
};

export default Header;
