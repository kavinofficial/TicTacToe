import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "black",
    width: 300,
    height: 100,
  },
  column: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    color: "black",
    width: 100,
    height: 100,
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
  },
  button: {
    height: 0,
    width: 100,
    color: "white",
  },
  players: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    bottom: 150,
  },
  playersText: {
    fontWeight: "bold",
    color: "white",
  },
  winner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    position: "relative",
    top: 50,
    fontSize: 35,
    padding: 0,
    margin: 0,
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
