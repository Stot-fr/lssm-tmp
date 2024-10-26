import React from "react";
import { View, Text } from "react-native";
import styles from "../../style";

interface IdealTimeProps {
    hours: string;
}

const IdealTime: React.FC<IdealTimeProps> = ({ hours }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h3}>Ideal time: </Text>
            <Text>{hours}</Text>
        </View>
    );
};

export default IdealTime;
