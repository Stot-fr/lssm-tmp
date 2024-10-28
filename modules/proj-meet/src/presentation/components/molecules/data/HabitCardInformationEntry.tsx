import React from 'react';

type HabitCardInformationEntryProps = {
  name: string;
  children: React.ReactNode;
};

export const HabitCardInformationEntry: React.FC<HabitCardInformationEntryProps> = ({ name, children }) => {
  return (
    <div className="habit-card-info-entry">
      <strong>{name}:</strong> {children}
    </div>
  );
};