import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const SearchBar = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        <Text style={styles.icon}>🔍</Text>
        <TextInput
          placeholder={placeholder || "Search..."}
          placeholderTextColor="#888"
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 12,
    marginVertical: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  icon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 10,
    color: "#333",
  },
});
