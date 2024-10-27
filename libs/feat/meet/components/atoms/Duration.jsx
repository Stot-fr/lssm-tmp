import React from "react";
import { View, Text } from "react-native";
import styles from "../../style";
const Duration = ({ minDuration, maxDuration }) => {
    return (<View style={styles.container}>
            <Text style={styles.h3}>Duration : </Text>
            <Text>
                {minDuration} - {maxDuration}
            </Text>
        </View>);
};
export default Duration;
