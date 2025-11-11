import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Header = ({ title, onBack }) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 24 }} />
    </View>
);
export default memo(Header)

const styles = StyleSheet.create({
     header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#855ccaff",
    paddingVertical: 15,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    elevation: 4,
  },
    backButton: {
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    backText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
})