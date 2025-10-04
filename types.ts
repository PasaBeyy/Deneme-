export enum LogType {
  APP_LAUNCH = 'Uygulama Başlatma',
  WEBSITE_VISIT = 'Web Sitesi Ziyareti',
  FILE_DOWNLOAD = 'Dosya İndirme',
  CLICK = 'Arayüz Tıklaması',
  WORK_SESSION_START = 'Çalışma Oturumu Başlangıcı',
  WORK_SESSION_END = 'Çalışma Oturumu Bitişi',
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  type: LogType;
  details: string;
  target?: string;
  duration?: number; // in minutes
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  avatarUrl: string;
  isOnline: boolean;
}

export interface WorkHours {
  day: string;
  hours: number;
}