import React from "react";
import { View, Text } from "react-native";
import styles from "../../style";
const Repeat = ({ days }) => {
    return (<View style={styles.container}>
            <Text style={styles.h3}>Repeat days: </Text>
            {days.length === 7 ? (<Text style={styles.label}>Everyday</Text>) : (days.map((day, index) => (<Text key={index} style={styles.label}>
                        {day}
                    </Text>)))}
        </View>);
};
export default Repeat;