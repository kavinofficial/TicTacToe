import React, { useEffect, useState, useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";

const Game = () => {
  const [xWin, setXWin] = useState(0);
  const [oWin, setOWin] = useState(0);
  const [win, setWin] = useState("");
  const [count, setCount] = useState(0);
  const [x, setX] = useState(true);
  const [xo, setXo] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  useEffect(() => {
    if (count > 8) {
      setWin("Match Tied");
      setCount(0);
      setTimeout(() => {
        setWin("");
        setXo([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ]);
      }, 700);
    }
    console.log(count);
    checkWinner();
  }, [xo]);
  const checkWinner = useCallback(() => {
    if (
      (xo[0][0] == "X" && xo[0][1] == "X" && xo[0][2] == "X") ||
      (xo[1][0] == "X" && xo[1][1] == "X" && xo[1][2] == "X") ||
      (xo[2][0] == "X" && xo[2][1] == "X" && xo[2][2] == "X") ||
      (xo[0][0] == "X" && xo[1][0] == "X" && xo[2][0] == "X") ||
      (xo[0][1] == "X" && xo[1][1] == "X" && xo[2][1] == "X") ||
      (xo[0][2] == "X" && xo[1][2] == "X" && xo[2][2] == "X") ||
      (xo[0][0] == "X" && xo[1][1] == "X" && xo[2][2] == "X") ||
      (xo[0][2] == "X" && xo[1][1] == "X" && xo[2][0] == "X")
    ) {
      setXWin(xWin + 1);
      setCount(0);
      setWin("Player 1 Won");
      console.log("X Won");
      setTimeout(() => {
        setWin("");
        setXo([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ]);
      }, 700);
    } else if (
      (xo[0][0] == "O" && xo[0][1] == "O" && xo[0][2] == "O") ||
      (xo[1][0] == "O" && xo[1][1] == "O" && xo[1][2] == "O") ||
      (xo[2][0] == "O" && xo[2][1] == "O" && xo[2][2] == "O") ||
      (xo[0][0] == "O" && xo[1][0] == "O" && xo[2][0] == "O") ||
      (xo[0][2] == "O" && xo[1][2] == "O" && xo[2][2] == "O") ||
      (xo[0][1] == "O" && xo[1][1] == "O" && xo[2][1] == "O") ||
      (xo[0][0] == "O" && xo[1][1] == "O" && xo[2][2] == "O") ||
      (xo[0][2] == "O" && xo[1][1] == "O" && xo[2][0] == "O")
    ) {
      setCount(0);
      console.log("O Won");
      setOWin((oWin) => oWin + 1);
      setWin("Player 2 Won");
      setTimeout(() => {
        setWin("");
        setXo([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ]);
      }, 700);
    }
  });

  const handlePress = (i, j) => {
    const copy = [...xo];
    if (copy[i][j] !== "") {
      return;
    }
    copy[i][j] = x ? "X" : "O";
    setCount((prev) => prev + 1);
    setX((prev) => !prev);
    setXo(copy);
    console.log(xo);
  };
  return (
    <View>
      <View style={styles.players}>
        <View>
          <Text style={styles.playersText}>Player 1 : X</Text>
          <Text style={styles.playersText}>Wins: {xWin}</Text>
        </View>
        <View>
          <Text style={styles.playersText}>Player 2 : O</Text>
          <Text style={styles.playersText}>Wins: {oWin}</Text>
        </View>
      </View>
      <View>
        <Text>{x ? "Player 1's turn:" : "Player 2's turn:"}</Text>
      </View>
      <View style={styles.players}>
        <Text style={styles.winner}>{win}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(0, 0)}>
            {xo[0][0]}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(0, 1)}>
            {xo[0][1]}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(0, 2)}>
            {xo[0][2]}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(1, 0)}>
            {xo[1][0]}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(1, 1)}>
            {xo[1][1]}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(1, 2)}>
            {xo[1][2]}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(2, 0)}>
            {xo[2][0]}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(2, 1)}>
            {xo[2][1]}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text} onPress={() => handlePress(2, 2)}>
            {xo[2][2]}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "black",
    borderColor: "white",
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
  },
});
export default Game;
