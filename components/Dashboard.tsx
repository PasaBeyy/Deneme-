import React, { useState, useEffect } from 'react';
import type { Employee, LogEntry, WorkHours } from '../types';
import { getLogsForEmployee, getWorkHoursForEmployee } from '../services/mockData';
import ActivityFeed from './ActivityFeed';
import WorkHoursChart from './WorkHoursChart';
import SummaryCard from './SummaryCard';

interface DashboardProps {
  employee: Employee | null;
}

const Dashboard: React.FC<DashboardProps> = ({ employee }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [workHours, setWorkHours] = useState<WorkHours[]>([]);

  useEffect(() => {
    if (employee) {
      setLogs(getLogsForEmployee(employee.id));
      setWorkHours(getWorkHoursForEmployee(employee.id));
    }
  }, [employee]);

  if (!employee) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-brand-secondary text-xl">Aktivitesini görüntülemek için bir çalışan seçin.</p>
      </div>
    );
  }

  const totalHoursThisWeek = workHours.reduce((acc, day) => acc + day.hours, 0).toFixed(1);
  const recentDownloads = logs.filter(log => log.type === 'Dosya İndirme').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <img src={employee.avatarUrl} alt={employee.name} className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-3xl font-bold text-brand-text">{employee.name}</h2>
          <p className="text-brand-secondary">{employee.position}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SummaryCard logs={logs} />

        <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
          <h3 className="font-semibold text-lg mb-2">Haftalık Çalışma Saati</h3>
          <p className="text-4xl font-bold text-brand-primary">{totalHoursThisWeek}</p>
          <p className="text-brand-secondary">Bu hafta kaydedilen toplam saat</p>
        </div>

        <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
          <h3 className="font-semibold text-lg mb-2">Son İndirmeler</h3>
          <p className="text-4xl font-bold text-brand-primary">{recentDownloads}</p>
          <p className="text-brand-secondary">Bugün indirilen dosyalar</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className="xl:col-span-3 bg-brand-surface p-6 rounded-lg border border-brand-border">
          <h3 className="font-semibold text-lg mb-4">Bu Haftaki Çalışma Saatleri</h3>
          <WorkHoursChart data={workHours} />
        </div>
        <div className="xl:col-span-2 bg-brand-surface p-6 rounded-lg border border-brand-border">
          <h3 className="font-semibold text-lg mb-4">Canlı Aktivite Akışı</h3>
          <ActivityFeed logs={logs} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
