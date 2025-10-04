import React from 'react';
import { LogEntry, LogType } from '../types';

interface ActivityFeedProps {
  logs: LogEntry[];
}

const LogIcon: React.FC<{ type: LogType }> = ({ type }) => {
  const iconClasses = "w-6 h-6 mr-4 text-brand-secondary";
  switch (type) {
    case LogType.APP_LAUNCH:
      return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
    case LogType.WEBSITE_VISIT:
      return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9h18" /></svg>;
    case LogType.FILE_DOWNLOAD:
      return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;
    case LogType.CLICK:
        return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>;
    default:
      return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
  }
};

const ActivityFeed: React.FC<ActivityFeedProps> = ({ logs }) => {
  return (
    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
      {logs.map(log => (
        <div key={log.id} className="flex items-start">
          <LogIcon type={log.type} />
          <div className="flex-1">
            <p className="text-sm text-brand-text">
              <span className="font-semibold">{log.type}</span>: {log.target}
            </p>
            <p className="text-xs text-brand-secondary">{log.details}</p>
            <p className="text-xs text-brand-secondary/70 mt-1">{log.timestamp.toLocaleTimeString('tr-TR')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
