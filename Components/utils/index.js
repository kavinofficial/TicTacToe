import _ from "lodash";
// import { ToastAndroid } from "react-native";

export function calculateWinner(xo) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (xo[i][0] === xo[i][1] && xo[i][1] === xo[i][2]) {
      return xo[i][0];
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (xo[0][i] === xo[1][i] && xo[1][i] === xo[2][i]) {
      return xo[0][i];
    }
  }
  // Check diagonals
  if (xo[0][0] === xo[1][1] && xo[1][1] === xo[2][2]) {
    return xo[0][0];
  }
  if (xo[0][2] === xo[1][1] && xo[1][1] === xo[2][0]) {
    return xo[0][2];
  }
  // No winner
  return null;
}

export function generateRandomCoordinates(xo) {
  let empty = [];
  if (xo[1][1] == "") {
    return [1, 1];
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (xo[i][j] == "") {
        empty.push([i, j]);
      }
    }
  }

  if (empty.length == 0) {
    throw new Error("Cannot assign random coordinates. space unavailable");
  }

  return empty[Math.floor(Math.random() * empty.length)];
}

export function getBotCoordinates(xo, c) {
  const rowWise = true;
  const columns = _.zip(xo[0], xo[1], xo[2]);

  // row n column
  for (let i = 0; i < xo.length; i++) {
    let position = getPossiblePosition(xo, xo[i], i, c, rowWise);
    if (position) {
      return position;
    }

    position = getPossiblePosition(xo, columns[i], i, c, !rowWise);
    if (position) {
      return position;
    }
  }

  return false;
}

function getPossiblePosition(xo, temp, row, c, rowWise) {
  let cnt = 0;
  let pos = 0;
  let isEmpty = false;

  // Row && column check
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == c) {
      cnt++;
    } else if (temp[i] == "") {
      isEmpty = true;
      pos = i;
    }
  }

  if (cnt == 2 && isEmpty) {
    if (rowWise) return [row, pos];
    else return [pos, row];
  }

  // Diagonal check
  if (xo[0][0] == "" && xo[1][1] == c && xo[2][2] == c) {
    return [0, 0];
  } else if (xo[0][0] == c && xo[1][1] == "" && xo[2][2] == c) {
    return [1, 1];
  } else if (xo[0][0] == c && xo[1][1] == c && xo[2][2] == "") {
    return [2, 2];
  } else if (xo[0][2] == "" && xo[1][1] == c && xo[2][0] == c) {
    return [0, 2];
  } else if (xo[0][2] == c && xo[1][1] == "" && xo[2][0] == c) {
    return [1, 1];
  } else if (xo[0][2] == c && xo[1][1] == c && xo[2][0] == "") {
    return [2, 0];
  }

  return null;
}

export function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
