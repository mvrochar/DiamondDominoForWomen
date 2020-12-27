import React from "react";
import { Image, StyleSheet } from "react-native";
import historyImage from "../images/history.jpg";
import { Container, Content, Card, CardItem, Text } from "native-base";

export default function VariationsArticle() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Image source={historyImage} style={styles.image} />
          </CardItem>
          <CardItem style={styles.item}>
            <Text style={styles.title}>History of Domino:</Text>
            <Text style={styles.date}>Wrote in 07/09/2020</Text>
            <Text style={styles.text}>
              The word "domino" comes from the Latin, but the game was
              originated in China between the years of 243 and 181 before
              Christ.
            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: 'OpenSans_600SemiBold',
    margin: 10,
  },
  date: {
    fontSize: 20,
    alignItems: "center",
    color: "cyan",
    fontFamily: 'OpenSans_400Regular',
    margin: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    margin: 10,
  },
  image: {
    height: 200,
    flex: 1,
  },
});
