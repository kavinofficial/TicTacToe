import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Game from "./Components/Game";
import img from "./assets/xo.png";
import { useState } from "react";
export default function App() {
  const [play, setPlay] = useState(false);

  return (
    <View style={styles.container}>
      {!play ? (
        <View>
          <Image source={img} style={styles.img}></Image>
          <View style={styles.button}>
            <Button
              title="Play"
              onPress={() => setPlay((prev) => !prev)}
              color={"green"}
            ></Button>
          </View>
          <StatusBar style="auto" />
        </View>
      ) : (
        <Game />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "relative",
    top: 100,
    width: 250,
    borderRadius: 7,
  },
  img: {
    width: 250,
    height: 250,
  },
});
