import React from 'react';
import type { Employee } from '../types';

interface EmployeeListProps {
  employees: Employee[];
  selectedEmployeeId?: number | null;
  onSelectEmployee: (employee: Employee) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, selectedEmployeeId, onSelectEmployee }) => {
  return (
    <aside className="w-64 bg-brand-surface p-4 overflow-y-auto border-r border-brand-border">
      <h2 className="text-lg font-semibold mb-4 text-brand-secondary">Çalışanlar</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id} className="mb-2">
            <button
              onClick={() => onSelectEmployee(employee)}
              className={`w-full flex items-center p-3 rounded-lg text-left transition-colors duration-200 ${
                selectedEmployeeId === employee.id ? 'bg-brand-primary/20 text-brand-primary' : 'hover:bg-brand-border/50'
              }`}
            >
              <div className="relative">
                <img src={employee.avatarUrl} alt={employee.name} className="w-10 h-10 rounded-full mr-3" />
                <span className={`absolute bottom-0 right-3 block h-2.5 w-2.5 rounded-full ${employee.isOnline ? 'bg-brand-online' : 'bg-brand-offline'} ring-2 ring-brand-surface`}></span>
              </div>
              <div>
                <p className="font-semibold text-brand-text">{employee.name}</p>
                <p className="text-sm text-brand-secondary">{employee.position}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default EmployeeList;
