
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import Dashboard from './components/Dashboard';
import { getEmployees } from './services/mockData';
import type { Employee } from './types';

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const allEmployees = getEmployees();
    setEmployees(allEmployees);
    if (allEmployees.length > 0) {
      setSelectedEmployee(allEmployees[0]);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <EmployeeList 
          employees={employees} 
          selectedEmployeeId={selectedEmployee?.id}
          onSelectEmployee={setSelectedEmployee}
        />
        <main className="flex-1 p-6 overflow-y-auto">
          <Dashboard employee={selectedEmployee} />
        </main>
      </div>
    </div>
  );
};

export default App;
