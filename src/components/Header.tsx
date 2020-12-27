import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#FFF" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingTop: 44,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "OpenSans_600SemiBold",
    color: "#FFF",
    fontSize: 20,
  },
});
