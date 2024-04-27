import { Audio } from "expo-av";

const soundObject = new Audio.Sound();
export const playSound = async () => {
  try {
    if (soundObject._loaded) {
      await soundObject.unloadAsync();
    }
    await soundObject.loadAsync(require("../assets/tap.mp3"));
    await soundObject.playAsync();
  } catch (err) {
    // console.log(err);
  }
};
export const HomeSound = async () => {
  try {
    if (soundObject._loaded) {
      await soundObject.unloadAsync();
    }
    await soundObject.loadAsync(require("../assets/home.mp3"));
    await soundObject.playAsync();
  } catch (err) {
    // console.log(err);
  }
};
export const entrySound = async () => {
  try {
    if (soundObject._loaded) {
      await soundObject.unloadAsync();
    }
    await soundObject.loadAsync(require("../assets/Entry.mp3"));
    await soundObject.playAsync();
  } catch (err) {
    // console.log(err);
  }
};
export const winningSound = async () => {
  try {
    if (soundObject._loaded) {
      await soundObject.unloadAsync();
    }
    await soundObject.loadAsync(require("../assets/winning.mp3"));
    await soundObject.playAsync();
  } catch (err) {
    // console.log(err);
  }
};
export const gameTiedSound = async () => {
  try {
    if (soundObject._loaded) {
      await soundObject.unloadAsync();
    }
    await soundObject.loadAsync(require("../assets/gameTied.mp3"));
    await soundObject.playAsync();
  } catch (err) {
    // console.log(err);
  }
};
