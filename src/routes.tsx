import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "./pages/HomePage";
import VariationsArticle from "./pages/VariationsArticle";
import HistoryArticle from "./pages/HistoryArticle";
import HowToPlayArticle from "./pages/HowToPlayArticle";
import BrainArticle from "./pages/BrainArticle";
import Help from "./pages/Help";
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import { SideBar } from "./components/SideBar";
import { LocalizationPage } from "./pages/LocalizationPage";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#000",
          },
        }}
      >
        <Screen
          name="Home"
          component={HomePage}
          options={{
            header: () => <HomeHeader />,
          }}
        />
        <Screen
          name="VariationsArticle"
          component={VariationsArticle}
          options={{
            header: () => <Header title="Other Variations" />,
          }}
        />
        <Screen
          name="HistoryArticle"
          component={HistoryArticle}
          options={{
            header: () => <Header title="History of Domino" />,
          }}
        />
        <Screen
          name="HowToPlayArticle"
          component={HowToPlayArticle}
          options={{
            header: () => <Header title="How to Play" />,
          }}
        />
        <Screen
          name="BrainArticle"
          component={BrainArticle}
          options={{
            header: () => (
              <Header title="Why Domino is Good For The Brain Health" />
            ),
          }}
        />
        <Screen
          name="SideBar"
          component={SideBar}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="Help"
          component={Help}
          options={{
            header: () => <Header title="Get Help From The Police" />,
          }}
        />
        <Screen
          name="LocalizationPage"
          component={LocalizationPage}
          options={{
            header: () => <Header title="Get Help From The Police" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
