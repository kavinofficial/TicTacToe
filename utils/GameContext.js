import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [isSingle, setSingle] = useState(false);

  return (
    <GameContext.Provider value={{ isSingle, setSingle }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
