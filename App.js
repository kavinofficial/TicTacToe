import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Game from "./pages/Game/Game.js";
import Players from "./pages/Players.js";
import Home from "./pages/Home.js";
import { GameProvider } from "./utils/GameContext.js";
import { styles } from "./pages/Game/Game.styles.js";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

const App = () => {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animationEnabled: false,
            headerStyle: styles.navigator,
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
          <Stack.Screen
            name="Players"
            component={Players}
            options={{ headerShown: false, gestureDirection: "horizontal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
};

export default App;
