import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import img from "../assets/xo.png";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { HomeSound, entrySound } from "../utils/Audio";
const background = require("../assets/background-min.png");
export default Home = () => {
  const navigation = useNavigation();
  HomeSound();
  const handlePress = () => {
    entrySound();
    navigation.navigate("Players");
  };
  return (
    <ImageBackground
      resizeMode="stretch"
      source={background}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={img} style={styles.img}></Image>
        <View style={styles.button}>
          <Button
            mode="elevated"
            buttonColor="green"
            onPress={handlePress}
            style={{ borderWidth: 1, borderColor: "white" }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Icon
                name="gamepad-variant"
                size={30}
                color="white"
                style={{ paddingTop: 3 }}
              />
              <Text
                variant="bodyLarge"
                style={{
                  paddingLeft: 10,
                  color: "white",
                  paddingTop: 5,
                  fontWeight: "bold",
                }}
              >
                PLAY
              </Text>
            </View>
          </Button>
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
  button: {
    position: "relative",
    top: 100,
  },
  img: {
    width: 250,
    height: 250,
    marginTop: -100,
  },
});
