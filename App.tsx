import React from "react";
import Routes from "./src/routes";
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
