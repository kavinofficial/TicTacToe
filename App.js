import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Game from "./pages/Game/Game.jsx";
import Players from "./Components/Players";
import Home from "./Components/Home";
import { GameProvider } from "./Components/GameContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animationEnabled: false }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Players"
            component={Players}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
};

export default App;
