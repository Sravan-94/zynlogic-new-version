import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="/zynlogic-logo.svg" 
        alt="Zynlogic" 
        className="h-8 mr-2" 
      />
      <span className="text-2xl font-semibold tracking-tight">
        Zynlogic
      </span>
    </div>
  );
}
