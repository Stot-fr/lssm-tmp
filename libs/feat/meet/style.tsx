import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", // Aligne les éléments horizontalement
        alignItems: "center", // Centre verticalement
    },
    h3: {
        fontSize: 15, // Taille de police similaire à h3
        fontWeight: "bold", // Gras
        marginRight: 5, // Espacement entre le texte et la date
    },
    label: {
        marginRight: 5, // Espacement entre les éléments
    },
});

export default styles;
