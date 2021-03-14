import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './screen/FirstScreen';
import SecondScreen from './screen/SecondScreen';
import ThirdScreen from './screen/ThirdScreen';
import FourthScreen from './screen/FourthScreen';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen name="FourthScreen" component={FourthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
