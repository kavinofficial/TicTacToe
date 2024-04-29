import { ImageBackground, StyleSheet, View, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GameContext } from "../utils/GameContext";
import { useContext } from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { entrySound } from "../utils/Audio";
const background = require("../assets/background-min.png");
const battle = require("../assets/battle-min.png");
const Players = () => {
  const navigation = useNavigation();
  const { isSingle, setSingle } = useContext(GameContext);

  const handleSinglePlayer = () => {
    setSingle(true);
    entrySound();
    navigation.navigate("Game");
  };

  const handleMultiPlayer = () => {
    setSingle(false);
    entrySound();
    navigation.navigate("Game");
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      source={background}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={battle} style={styles.battle}></Image>
          <View style={{ marginVertical: 100 }}>
            <Button
              onPress={handleSinglePlayer}
              buttonColor="green"
              mode="elevated"
              textColor="white"
              style={{
                borderWidth: 1,
                borderColor: "white",
                marginVertical: 10,
              }}
            >
              <View style={styles.buttonConatainer}>
                <Text variant="bodyMedium" style={{ color: "white" }}>
                  SOLO MODE
                </Text>
                <Icon
                  name="account"
                  size={20}
                  color="white"
                  style={{ paddingTop: 0, paddingLeft: 15, marginRight: -10 }}
                />
              </View>
            </Button>
            <Button
              onPress={handleMultiPlayer}
              buttonColor="green"
              mode="elevated"
              textColor="white"
              style={{ borderWidth: 1, borderColor: "white" }}
            >
              <View style={styles.buttonConatainer}>
                <Text variant="bodyMedium" style={{ color: "white" }}>
                  VERSUS MODE
                </Text>
                <Icon
                  name="account-multiple"
                  size={20}
                  color="white"
                  style={{ paddingTop: 0, paddingLeft: 15, marginRight: -10 }}
                />
              </View>
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonConatainer: {
    flexDirection: "row",
  },
  icon: {
    width: 20,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  battle: {
    width: 150,
    height: 150,
    marginTop: -100,
  },
});

export default Players;
