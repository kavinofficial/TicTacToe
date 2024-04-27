import { ImageBackground, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { styles } from "./Game.styles";
import { gameTiedSound, playSound, winningSound } from "../../Components/Audio";
import {
  calculateWinner,
  generateRandomCoordinates,
  getBotCoordinates,
  sleep,
} from "../../Components/utils";
import { useGameContext } from "../../Components/GameContext";

const background = require("../../assets/background-min.png");

const initial = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const Game = () => {
  const { isSingle } = useGameContext();
  const [count, setCount] = useState(0);
  let player1 = isSingle ? "You" : "Player1";
  let player2 = isSingle ? "CPU player" : "Player 2";
  const [win, setWin] = useState("");
  const [isX, setIsX] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  const [xo, setXo] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  async function handlePress(i, j, isBot = false) {
    setIsWaiting(true);
    playSound();
    if (win) {
      return;
    }

    if (isWaiting && !isBot) {
      // toast("Waiting for the other user to play");
      return;
    }

    if (xo[i][j] !== "") {
      // toast("The position is already occupied");
      setIsWaiting(false);
      return;
    }

    setCount((prev) => prev + 1);
    setIsX((prev) => !prev);

    setXo((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[i][j] = isX ? "X" : "O";
      return copy;
    });
  }
  useEffect(() => {
    (async () => {
      if (count == 9) {
        gameTiedSound();
        setWin("Match Tied");
        setCount(0);
        await sleep(1000);
        setWin("");
        setXo(initial);
        return;
      }
      const winner = calculateWinner(xo);
      if (winner) {
        winningSound();
        if (winner == "X") setWin(player1 + " won!!");
        else setWin(player2 + " won!!");
        await sleep(2000);
        setWin("");
        setCount(0);
        setXo(initial);
        return;
      }
      await sleep(300);
      setIsWaiting(false);
      await sleep(100);

      if (isSingle && !isX) {
        let coords = getBotCoordinates(xo, "O");
        if (coords) {
          return handlePress(...coords, true);
        }

        coords = getBotCoordinates(xo, "X");
        if (coords) {
          return handlePress(...coords, true);
        }

        coords = generateRandomCoordinates(xo);
        return handlePress(...coords, true);
      }
    })();
  }, [xo]);

  return (
    <ImageBackground
      resizeMode="stretch"
      source={background}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={{ paddingBottom: 15 }}>
          <Text style={{ color: "white" }}>
            {isX ? "Player 1's turn:" : player2 + "'s turn:"}
          </Text>
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
    </ImageBackground>
  );
};

export default Game;
