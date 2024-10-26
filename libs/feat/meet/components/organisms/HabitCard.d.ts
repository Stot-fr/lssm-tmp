import React from "react";
interface Habit {
    id: number;
    minDuration: number;
    maxDuration: number;
    name: string;
    hours: string;
    days: string[];
}
interface HabitListProps {
    habits: Habit[];
}
declare const HabitCard: React.FC<HabitListProps>;
export default HabitCard;
