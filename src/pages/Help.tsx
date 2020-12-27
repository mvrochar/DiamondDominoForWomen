import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import mapMarker from "../images/mapMarker.svg";

export default function Help() {
  const navigation = useNavigation();

  const [localizationList] = useState([
    {
      id: 1,
      name: "Newark Police Department",
      latitude: 39.6776258,
      longitude: -75.765317,
      phone: "+1 30 23667111",
      website: "https://newarkde.gov/17/Police",
      address: "E Main Street, Newark, DE, USA/",
    },
    {
      id: 2,
      name: "New York Police Department",
      latitude: 40.7202702,
      longitude: -74.009386,
      phone: "+1 21 23340711",
      website: "https://www1.nyc.gov/site/nypd/index.page",
      address: "167 E 51st Street, New York, NY 10022, USA",
    },
    {
      id: 3,
      name: "Curitiba Police Department",
      latitude: -25.4043787,
      longitude: -49.2525501,
      phone: "+55 41 3219 8600",
      website:
        "https://www.policiacivil.pr.gov.br/Endereco/DELEGACIA-DA-MULHER-DA-CAPITAL",
      address: "Parana Avenue, 870 - Cabral, Curitiba - PR, 80035-130, Brazil",
    },
    {
      id: 4,
      name: "Praia, Cabo Verde Police Department",
      latitude: 14.9308651,
      longitude: -23.5301641,
      phone: "+238 261 97 13",
      website: "http://www.policianacional.cv/",
      address: "WF7C+9V Praia, Cape Verde",
    },
    {
      id: 5,
      name: "Cape Town Police Department",
      latitude: -33.9369963,
      longitude: 18.3615833,
      phone: "+27 21 467 8078",
      website:
        "https://www.saps.gov.za/contacts/stationdetails.php?sid=224&sname=Cape%20Town%20Central",
      address: "118 Koeberg Road, Brooklyn, Cape Town, 7405, South Africa",
    },
    {
      id: 6,
      name: "Rome Police Department",
      latitude: 41.8916736,
      longitude: 12.4811353,
      phone: "+39 06 6769 2535",
      website:
        "https://www.comune.roma.it/web/it/corpo-di-polizia-locale-di-roma-capitale.page",
      address: "VFRM+F9 Rome, Metropolitan City of Rome, Italy",
    },
    {
      id: 7,
      name: "Managua Police Department",
      latitude: 12.1336453,
      longitude: -86.2853114,
      phone: "+505 7822 9925",
      website: "http://www.policia.gob.ni/",
      address:
        "Esquina suroeste semaforos de La Subasta, Panamericana Nte., Managua, Nicaragua",
    },
    {
      id: 8,
      name: "London Police Department",
      latitude: 51.5338716,
      longitude: -0.2409695,
      phone: "+44 20 72301212",
      website: "https://www.cityoflondon.police.uk/",
      address: "Victoria Embankment, London SW1A 2JL, United Kingdom",
    },
    {
      id: 9,
      name: "Seoul Police Department",
      latitude: 37.5636507,
      longitude: 126.9873909,
      phone: "+82 2-2279 0112",
      website: "https://www.smpa.go.kr/home/homeIndexEng.do?menuCode=eng",
      address: "27 Supyo-ro, Euljiro-dong, Jung-gu, Seoul, South Korea",
    },
    {
      id: 10,
      name: "Tokyo Police Department",
      latitude: 35.6431512,
      longitude: 139.5760792,
      phone: "+81 3-3581 4321",
      website:
        "https://www.keishicho.metro.tokyo.jp/multilingual/english/index.html",
      address: "2-chōme-1-1 Kasumigaseki, Chiyoda City, Tokyo 100-0013, Japan",
    },
    {
      id: 11,
      name: "Wellington Police Department",
      latitude: -41.2489842,
      longitude: 174.6302577,
      phone: "+64 4-381 2000",
      website:
        "https://www.police.govt.nz/contact-us/station/wellington-central-police-station",
      address:
        "41 Victoria Street, Wellington Central, Wellington 6011, New Zealand",
    },
    {
      id: 12,
      name: "San Salvador Police Department",
      latitude: 13.6920349,
      longitude: -89.2502717,
      phone: "+503 2241 4700",
      website: "http://www.pnc.gob.sv/",
      address: "10a Avenida Sur, San Salvador, El Salvador",
    },
    {
      id: 13,
      name: "Sydney Police Department",
      latitude: -33.8351283,
      longitude: 150.9687721,
      phone: "+61 2 9956 3199",
      website:
        "https://www.police.nsw.gov.au/about_us/regions_commands_districts/central_metro_region/sydney_city",
      address: "273 Pacific Highway, Crows Nest NSW 2065, Australia",
    },
    {
      id: 14,
      name: "Buenos Aires Police Department",
      latitude: -34.5924724,
      longitude: -58.4298177,
      phone: "+54 11 4832 3333",
      website: "http://www.policia.mseg.gba.gov.ar/",
      address: "Raúl Scalabrini Ortiz Street, 1350, Buenos Aires, Argentina",
    },
    {
      id: 15,
      name: "Argel Police Department",
      latitude: 36.7761151,
      longitude: 3.2493089,
      phone: "+213 21745900",
      website: "",
      address: "W149, Bordj El Bahri, Algeria",
    },
    {
      id: 16,
      name: "Munich Police Department",
      latitude: 48.127829,
      longitude: 11.6023259,
      phone: "+49 89 6661 6970",
      website: "https://www.polizei.bayern.de/muenchen/",
      address: "Orleansplatz 10, 81667 Munich, Germany",
    },
    {
      id: 17,
      name: "Vancouver Police Department",
      latitude: 49.2665083,
      longitude: -123.1164916,
      phone: "+1 604-717-3321",
      website: "https://vancouver.ca/police/",
      address: "2120 Cambie Street, Vancouver, BC V5Z 4N6, Canada",
    },
  ]);

  const handleNavigateToLocalizationPage = (
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    phone: string,
    website: string,
    address: string
  ) => {
    navigation.navigate("LocalizationPage", {
      id,
      name,
      latitude,
      longitude,
      phone,
      website,
      address
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -25.4043787,
          longitude: -49.2525501,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {localizationList.map((localization) => {
          return (
            <Marker
              key={localization.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: localization.latitude,
                longitude: localization.longitude,
              }}
            >
              <Callout
                tooltip
                onPress={() =>
                  handleNavigateToLocalizationPage(
                    localization.id,
                    localization.name,
                    localization.latitude,
                    localization.longitude,
                    localization.phone,
                    localization.website,
                    localization.address
                  )
                }
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{localization.name}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    borderRadius: 16,
    justifyContent: "center",
  },

  calloutText: {
    color: "#000",
    fontSize: 14,
    fontFamily: "OpenSans_400Regular",
  },
});
