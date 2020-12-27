import React, { useEffect } from "react";
import { View, StyleSheet, Linking, Text } from "react-native";
import { Container, Icon, Content, Button } from "native-base";
import MapView, { Marker } from "react-native-maps";
import mapMarker from "../images/mapMarker.svg";
import * as Font from "expo-font";

interface Params {
  route: {
    params: {
      id: number;
      name: string;
      latitude: number;
      longitude: number;
      phone: string;
      website: string;
      address: string;
    };
  };
}

export function LocalizationPage(props: Params) {
  const {
    phone,
    name,
    latitude,
    longitude,
    website,
    address,
  } = props.route.params;

  const handleOpenGoogleMapRoutes = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    );
  };

  const handleOpenPoliceDepartmentWebsite = () => {
    Linking.openURL(website);
  };

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });
    }

    loadFont();
  }, []);

  return (
    <Container>
      <Content>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.addressText}>{address}</Text>
        <Button
          iconLeft
          style={styles.routeButton}
          onPress={handleOpenGoogleMapRoutes}
        >
          <Icon name="map" />
          <Text style={styles.textRouteButton}>See The Route</Text>
        </Button>
        <View style={styles.flexBox}>
          <Button
            style={styles.button}
            onPress={handleOpenPoliceDepartmentWebsite}
          >
            <Icon name="globe" />
            <Text style={styles.text}>See Website</Text>
          </Button>
          <Button
            style={styles.button}
            onPress={() => Linking.openURL(`tel:${phone}`)}
          >
            <Text style={styles.text}>{phone}</Text>
          </Button>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker
              icon={mapMarker}
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
            />
          </MapView>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  flexBox: {
    display: "flex",
    flexDirection: "row",
  },
  routeButton: {
    width: "95%",
    margin: 10,
    justifyContent: "center",
    backgroundColor: "green",
  },
  button: {
    width: "45%",
    margin: 10,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  mapContainer: {
    overflow: "hidden",
    borderWidth: 1.2,
    borderColor: "#000",
    margin: 10,
    marginTop: 40,
    backgroundColor: "#FFF",
  },
  mapStyle: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "OpenSans_600SemiBold",
  },
  addressText: {
    color: "green",
    fontSize: 20,
    margin: 10,
    fontFamily: "OpenSans_600SemiBold",
  },
  textRouteButton: {
    marginLeft: 10,
    fontSize: 20,
    color: "#FFF",
    fontFamily: "OpenSans_400Regular",
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "OpenSans_400Regular",
  },
});
