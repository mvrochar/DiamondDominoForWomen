import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Thumbnail,
  Left,
} from "native-base";
import { StyleSheet } from "react-native";

interface cardComponent {
  uri: number;
  title: string;
  date: string;
  redirect: any;
}

export default function ScrollCard({ uri, title, date, redirect }: cardComponent) {
  return (
    <Container>
      <Content>
        <Card >
          <CardItem button onPress={redirect}>
            <Left>
              <Thumbnail source={uri} style={{ height: 100, width: 100 }} />
              <Body>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date} note>
                  {date}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans_600SemiBold'
  },
  date: {
    fontSize: 14,
    color: "cyan",
    fontFamily: 'OpenSans_400Regular'
  },
});
