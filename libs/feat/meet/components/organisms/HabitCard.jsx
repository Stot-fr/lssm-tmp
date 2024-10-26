import React from "react";
import { View } from "react-native";
import BodyCard from "../molecules/BodyCard";
import { Card } from "@/ui-kit/ui/card";
const HabitCard = ({ habits }) => {
    const [habitList, setHabitList] = React.useState(habits);
    const handleDelete = (id) => {
        setHabitList((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
    };
    return (<View>
            {habitList.map((habit) => (<Card size="md" variant="outline" className="m-3" key={habit.id}>
                    <BodyCard minDuration={habit.minDuration} maxDuration={habit.maxDuration} name={habit.name} hours={habit.hours} days={habit.days} onDelete={() => handleDelete(habit.id)}/>
                </Card>))}
        </View>);
};
export default HabitCard;
