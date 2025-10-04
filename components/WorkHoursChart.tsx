import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { WorkHours } from '../types';

interface WorkHoursChartProps {
  data: WorkHours[];
}

const WorkHoursChart: React.FC<WorkHoursChartProps> = ({ data }) => {
  const todayStr = new Date().toLocaleString('tr-TR', {  weekday: 'short' });
  const today = todayStr.endsWith('.') ? todayStr.slice(0, -1) : todayStr;

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
          <XAxis dataKey="day" stroke="#a0aec0" />
          <YAxis stroke="#a0aec0" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#2d3748', 
              border: '1px solid #4a5568',
              borderRadius: '0.5rem'
            }} 
            labelStyle={{ color: '#e2e8f0' }}
            itemStyle={{ color: '#4299e1' }}
          />
          <Bar dataKey="hours" name="Çalışılan Saat" unit="h">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.day === today ? '#4299e1' : '#a0aec0'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkHoursChart;
