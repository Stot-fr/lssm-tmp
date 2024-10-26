import React from "react";
interface BodyCardProps {
    minDuration: number;
    maxDuration: number;
    name: string;
    hours: string;
    days: string[];
    onDelete: () => void;
}
declare const BodyCard: React.FC<BodyCardProps>;
export default BodyCard;
