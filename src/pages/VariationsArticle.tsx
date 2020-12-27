import React from "react";
import { Image, StyleSheet } from "react-native";
import cactusImage from "../images/cactus.jpg";
import { Container, Content, Card, CardItem, Text } from "native-base";

export default function VariationsArticle() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Image source={cactusImage} style={styles.image} />
          </CardItem>
          <CardItem style={styles.item}>
            <Text style={styles.title}>Other Variation (Mexican Domino):</Text>
            <Text style={styles.date}>Wrote in 08/09/2020</Text>
            <Text style={styles.text}>
              The main and most notable variation of the tradicional domino
              game, probably is the Mexican Domino, that is also known because
              Hollywood stars use to play it in the break between the scenes.
              Unlike the traditional domino that has up to six points, the
              largest pieces of the Mexican have 12 to 15, forming carts from 24
              to 30. In the center of the game, along with the largest cart, a
              black base divides up to eight rows of stones. Each player plays
              in his row forming his train. Up to two “Mexicans” can be opened,
              which are side games that everyone can play. The "Mexicans" are
              formed by the stones of the time, that is, stones that have the
              number of the "loofah" or "cart" that is in the center of the
              black piece. Only two can be opened per match.
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
