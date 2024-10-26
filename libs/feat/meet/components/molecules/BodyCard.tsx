import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Duration from "../atoms/Duration";
import NameHabits from "../atoms/NameHabits";
import IdealTime from "../atoms/IdealTime";
import Repeat from "../atoms/Repeat";
import NextDate from "../atoms/NextDate";
import ChangeHabit from "../atoms/ChangeHabit";

interface BodyCardProps {
    minDuration: number; // Durée minimale
    maxDuration: number; // Durée maximale
    name: string; // Nom de l'habitude
    hours: string; // Heures idéales
    days: string[]; // Jours de la semaine
    onDelete: () => void; // Fonction pour supprimer l'habit
}

const BodyCard: React.FC<BodyCardProps> = ({
    minDuration,
    maxDuration,
    name,
    hours,
    days,
    onDelete,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View>
            <NameHabits name={name} />
            <Duration minDuration={minDuration} maxDuration={maxDuration} />
            <IdealTime hours={hours} />
            <Repeat days={days} />
            <NextDate habitDays={days} />
            <Button title="Supprimer l'habit" onPress={onDelete} />
            <Button title="Modifier l'habit" onPress={() => setIsOpen(true)} />
            <ChangeHabit isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </View>
    );
};

export default BodyCard;
