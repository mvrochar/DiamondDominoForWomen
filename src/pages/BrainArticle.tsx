import React from "react";
import { Image, StyleSheet } from "react-native";
import brainImage from "../images/brain.jpg";
import { Container, Content, Card, CardItem, Text } from "native-base";

export default function VariationsArticle() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Image source={brainImage} style={styles.image} />
          </CardItem>
          <CardItem style={styles.item}>
            <Text style={styles.title}>
              Why Domino Is Good For The Brain Health:
            </Text>
            <Text style={styles.date}>Wrote in 05/09/2020</Text>
            <Text style={styles.text}>
              The domino game is good for the brain health, because improves the
              concentration, the memory and the attention. All these things in
              combination help to in the future, preventing deases like
              alzheimer.
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
