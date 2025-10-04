import React, { useState, useEffect } from 'react';
import type { LogEntry } from '../types';
import { summarizeActivity } from '../services/geminiService';

interface SummaryCardProps {
  logs: LogEntry[];
}

const SummaryCard: React.FC<SummaryCardProps> = ({ logs }) => {
  const [summary, setSummary] = useState<React.ReactNode>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateSummary = async () => {
      setIsLoading(true);
      const result = await summarizeActivity(logs);
      // Format summary into bullet points for display
      const formattedResult = result
        .split('* ')
        .filter(item => item.trim() !== '')
        .map((item, index) => (
          <li key={index} className="mb-2 text-brand-secondary">{item.trim()}</li>
        ));
      // This is a bit of a hack to render the list
      // A better approach would be to ensure Gemini returns structured JSON
      setSummary(<ul>{formattedResult}</ul>);
      setIsLoading(false);
    };

    if (logs.length > 0) {
      generateSummary();
    } else {
      setSummary('Özetlenecek aktivite bulunamadı.');
      setIsLoading(false);
    }
  }, [logs]);

  return (
    <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
      <h3 className="font-semibold text-lg mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        Yapay Zeka Aktivite Özeti
      </h3>
      {isLoading ? (
        <div className="space-y-3 animate-pulse">
          <div className="h-4 bg-brand-border rounded w-3/4"></div>
          <div className="h-4 bg-brand-border rounded w-1/2"></div>
          <div className="h-4 bg-brand-border rounded w-5/6"></div>
        </div>
      ) : (
        <div className="text-sm">{summary}</div>
      )}
    </div>
  );
};

export default SummaryCard;
