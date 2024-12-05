import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
interface ReportPageProps {
  className?: string;
}

export const Report: React.FC<ReportPageProps> = ({ className = '' }) => {
  return (
    <div className={`container mx-auto p-8 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 text-center">Ye rhe tumhare components</h2>
      <Comp1/>
      <Comp2/>
      <Comp3/>
</div>
  );
};