import { Employee, LogType, LogEntry, WorkHours } from '../types';

const employees: Employee[] = [
  { id: 1, name: 'Alice Johnson', position: 'Lider Geliştirici', avatarUrl: 'https://picsum.photos/seed/alice/100/100', isOnline: true },
  { id: 2, name: 'Bob Williams', position: 'UI/UX Tasarımcısı', avatarUrl: 'https://picsum.photos/seed/bob/100/100', isOnline: true },
  { id: 3, name: 'Charlie Brown', position: 'Proje Yöneticisi', avatarUrl: 'https://picsum.photos/seed/charlie/100/100', isOnline: false },
  { id: 4, name: 'Diana Miller', position: 'Kalite Güvence Mühendisi', avatarUrl: 'https://picsum.photos/seed/diana/100/100', isOnline: true },
];

const logData: { [key: number]: LogEntry[] } = {
  1: [
    { id: 'l101', timestamp: new Date(Date.now() - 2 * 60 * 1000), type: LogType.WEBSITE_VISIT, details: '15 dakika boyunca Stack Overflow ziyaret edildi.', target: 'stackoverflow.com' },
    { id: 'l102', timestamp: new Date(Date.now() - 10 * 60 * 1000), type: LogType.FILE_DOWNLOAD, details: 'Proje varlıkları indirildi.', target: 'project-assets.zip' },
    { id: 'l103', timestamp: new Date(Date.now() - 35 * 60 * 1000), type: LogType.APP_LAUNCH, details: 'Visual Studio Code açıldı.', target: 'VSCode' },
    { id: 'l104', timestamp: new Date(Date.now() - 60 * 60 * 1000), type: LogType.CLICK, details: '"Gönder" düğmesine tıklandı.', target: 'JIRA Ticket #123' },
    { id: 'l105', timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), type: LogType.WORK_SESSION_START, details: 'Çalışma oturumu başlatıldı.' },
  ],
  2: [
    { id: 'l201', timestamp: new Date(Date.now() - 5 * 60 * 1000), type: LogType.APP_LAUNCH, details: 'Figma açıldı.', target: 'Figma' },
    { id: 'l202', timestamp: new Date(Date.now() - 25 * 60 * 1000), type: LogType.WEBSITE_VISIT, details: 'İlham için Dribbble\'da geziniyor.', target: 'dribbble.com' },
    { id: 'l203', timestamp: new Date(Date.now() - 45 * 60 * 1000), type: LogType.FILE_DOWNLOAD, details: 'Yeni ikon seti indirildi.', target: 'feather-icons.svg' },
    { id: 'l204', timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), type: LogType.APP_LAUNCH, details: 'Adobe Photoshop açıldı.', target: 'Photoshop' },
  ],
  3: [
    { id: 'l301', timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), type: LogType.WORK_SESSION_END, details: 'Dün çalışma oturumu sonlandırıldı.' },
    { id: 'l302', timestamp: new Date(Date.now() - 32 * 60 * 60 * 1000), type: LogType.WEBSITE_VISIT, details: 'Asana\'da proje zaman çizelgesi kontrol edildi.', target: 'asana.com' },
    { id: 'l303', timestamp: new Date(Date.now() - 33 * 60 * 60 * 1000), type: LogType.APP_LAUNCH, details: 'Microsoft Outlook açıldı.', target: 'Outlook' },
  ],
  4: [
    { id: 'l401', timestamp: new Date(Date.now() - 15 * 60 * 1000), type: LogType.APP_LAUNCH, details: 'Cypress\'te testler çalıştırılıyor.', target: 'Cypress' },
    { id: 'l402', timestamp: new Date(Date.now() - 55 * 60 * 1000), type: LogType.WEBSITE_VISIT, details: 'JIRA\'da hatalar belgeleniyor.', target: 'jira.atlassian.com' },
    { id: 'l403', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), type: LogType.FILE_DOWNLOAD, details: 'Test senaryosu belirtimleri indirildi.', target: 'test-cases-v2.pdf' },
  ],
};

const workHoursData: { [key: number]: WorkHours[] } = {
  1: [
    { day: 'Pzt', hours: 8.5 }, { day: 'Sal', hours: 7.8 }, { day: 'Çar', hours: 9.1 },
    { day: 'Per', hours: 8.0 }, { day: 'Cum', hours: 7.5 }, { day: 'Cmt', hours: 0 }, { day: 'Paz', hours: 0 },
  ],
  2: [
    { day: 'Pzt', hours: 8.1 }, { day: 'Sal', hours: 8.5 }, { day: 'Çar', hours: 7.9 },
    { day: 'Per', hours: 8.2 }, { day: 'Cum', hours: 8.0 }, { day: 'Cmt', hours: 0 }, { day: 'Paz', hours: 0 },
  ],
  3: [
    { day: 'Pzt', hours: 9.0 }, { day: 'Sal', hours: 9.2 }, { day: 'Çar', hours: 8.8 },
    { day: 'Per', hours: 9.5 }, { day: 'Cum', hours: 6.0 }, { day: 'Cmt', hours: 0 }, { day: 'Paz', hours: 0 },
  ],
  4: [
    { day: 'Pzt', hours: 7.5 }, { day: 'Sal', hours: 8.0 }, { day: 'Çar', hours: 7.7 },
    { day: 'Per', hours: 8.1 }, { day: 'Cum', hours: 7.9 }, { day: 'Cmt', hours: 0 }, { day: 'Paz', hours: 0 },
  ],
};

export const getEmployees = (): Employee[] => employees;

export const getLogsForEmployee = (employeeId: number): LogEntry[] => {
  return logData[employeeId] || [];
};

export const getWorkHoursForEmployee = (employeeId: number): WorkHours[] => {
  return workHoursData[employeeId] || [];
};