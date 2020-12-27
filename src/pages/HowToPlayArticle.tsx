import React from "react";
import { Image, StyleSheet } from "react-native";
import playingImage from "../images/playing.jpg";
import { Container, Content, Card, CardItem, Text } from "native-base";

export default function VariationsArticle() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Image source={playingImage} style={styles.image} />
          </CardItem>
          <CardItem style={styles.item}>
            <Text style={styles.title}>How to Play:</Text>
            <Text style={styles.date}>Wrote in 05/09/2020</Text>
            <Text style={styles.text}>
              Description: The game has four participants, who form two pairs,
              and must sit in alternate positions. Players - 4. Pieces - 28
              pieces with sides ranging from 0 to 6. Distribution - 7 pieces for
              each participant. Objective - make 50 points. Definitions: Domino
              piece - is a piece made up of two ends, each with a number
              (examples of pieces: 2-5, 6-6, 0-1). Fit piece - when a piece is
              placed next to another that has at least one number in common
              (example: 2-5 fits with 5-6). Game ends - these are the free
              pieces of the tip, whose sides are open so that other pieces can
              be fitted. Passing the turn - when the player has no piece that
              fits either end. Game locked - when no player has a piece that
              fits on either end. Lock the game - when a player plays a piece
              that causes the game to lock. Beat the game - when one of the
              players manages to run out of pieces in his hand, having fitted
              all of them. The Domino Game: The pieces are "shuffled" on the
              table, and each player takes 7 pieces to play. The player who
              starts the game is the one with the piece 6-6. He starts the game
              by placing this piece in the center of the table. From there, play
              counterclockwise. Each player must try to fit some of his pieces
              to the pieces at the end of the game, one at a time. When a player
              manages to fit a piece, the turn is passed to the next player. If
              the player has no piece that fits anywhere, he must pass the turn,
              without playing any piece. The game can end in two circumstances:
              when a player manages to beat the game, or when the game is
              locked. The first player this time will be the player to the right
              of the first player from the previous game. Score: If any player
              has beaten the game, his team takes all points from the pieces
              that are in the hands of the opponents. If the game is locked, all
              points obtained by each pair are counted. The pair with the fewest
              points is the winner, and takes all points from the opposing pair.
              If there is a tie in this point count, the pair that locked the
              game loses, and the winning pair takes all the points from this
              pair. The points of the winning pair are accumulated, and the game
              ends when one of the pairs reaches the 50 point mark. Point value:
              The point value of each piece corresponds to the sum of the values
              ​​of the two ends of the piece. Thus, the 0-0 piece is worth 0
              points, the 3-4 piece is worth 7 points, the 6-6 piece is worth 12
              points, and so on.
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
