import React from "react";
import { View, Text } from "react-native";
import styles from "../../style";
const NextDate = ({ habitDays }) => {
    const getNextDate = () => {
        const today = new Date();
        const currentDay = today.getDay();
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        for (let i = 1; i <= 7; i++) {
            const nextDayIndex = (currentDay + i) % 7;
            if (habitDays.includes(daysOfWeek[nextDayIndex])) {
                const nextDate = new Date(today);
                nextDate.setDate(today.getDate() + i);
                return nextDate.toLocaleDateString();
            }
        }
        return "Aucune date trouvée";
    };
    return (<View style={styles.container}>
            <Text style={styles.h3}>Next date :</Text>
            <Text>{getNextDate()}</Text>
        </View>);
};
export default NextDate;
