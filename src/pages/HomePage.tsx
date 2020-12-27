import React from "react";
import { Linking } from "react-native";
import ScrollCard from "../components/ScrollCard";
import cactusImage from "../images/cactus.jpg";
import brainImage from "../images/brain.jpg";
import dominoImage from "../images/domino.jpg";
import historyImage from "../images/history.jpg";
import playingImage from "../images/playing.jpg";
import { useNavigation } from "@react-navigation/native";

export function HomePage() {
  const navigation = useNavigation();

  return (
    <>
      <ScrollCard
        uri={cactusImage}
        title={`Other variations \n(mexican domino):`}
        date="08/09/2020"
        redirect={() => navigation.navigate("VariationsArticle")}
      />
      <ScrollCard
        uri={historyImage}
        title={`History of \ndomino:`}
        date="07/09/2020"
        redirect={() => navigation.navigate("HistoryArticle")}
      />
      <ScrollCard
        uri={playingImage}
        title={`How to play:`}
        date="05/09/2020"
        redirect={() => navigation.navigate("HowToPlayArticle")}
      />
      <ScrollCard
        uri={brainImage}
        title={`Why domino is \ngood for the brain \nhealth:`}
        date="05/09/2020"
        redirect={() => navigation.navigate("BrainArticle")}
      />
      <ScrollCard
        uri={dominoImage}
        title={`Play domino:`}
        date="03/09/2020"
        redirect={() =>
          Linking.openURL("http://www.onlinedominogames.com/").catch((err) => {
            console.log(`ERROR ${err}`);
            navigation.navigate("Home");
          })
        }
      />
    </>
  );
}
