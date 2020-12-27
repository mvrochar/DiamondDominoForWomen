import React from "react";
import { StyleSheet, Image, View, Linking } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Help"];
import { useNavigation } from "@react-navigation/native";
import dominoLogo from "../images/dominoLogo.jpg";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

export function SideBar() {
  const navigation = useNavigation();

  const handleOpenInstagram = () => {
    Linking.openURL("instagram://user?username=dominoforwomen").catch(() => {
      Linking.openURL("https://www.instagram.com/dominoforwomen/");
    });
  };

  return (
      <View style={styles.content}>
        <View style={styles.flexContainer}>
          <Image source={dominoLogo} style={styles.image} />
          <List
            dataArray={routes}
            keyExtractor={(index) => index.toString()}
            renderRow={(data) => {
              return (
                <ListItem button onPress={() => navigation.navigate(data)}>
                  <Text style={styles.text}>{data}</Text>
                </ListItem>
              );
            }}
          />
          <View style={styles.buttonsDiv}>
            <BorderlessButton onPress={handleOpenInstagram} style={styles.icon}>
              <Feather name="instagram" size={24} color="#FFF" />
            </BorderlessButton>
            <BorderlessButton onPress={navigation.goBack} style={styles.icon}>
              <Feather name="settings" size={24} color="#FFF" />
            </BorderlessButton>
          </View>
          <Text style={styles.footer}>&copy; Diamond Domino</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#000",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  buttonsDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    margin: 20,
    marginBottom: 290,
  },
  text: {
    color: "#FFF",
  },
  footer: {
    color: "#FFF",
    textAlign: "center",
  },
});
