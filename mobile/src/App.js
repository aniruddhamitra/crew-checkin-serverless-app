import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import RosterCheckScreen from './components/RosterCheckScreen';
import TrainingMedicalScreen from './components/TrainingMedicalScreen';
import QRScannerScreen from './components/QRScannerScreen';
import StatusScreen from './components/StatusScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RosterCheck" component={RosterCheckScreen} />
        <Stack.Screen name="TrainingMedical" component={TrainingMedicalScreen} />
        <Stack.Screen name="QRScanner" component={QRScannerScreen} />
        <Stack.Screen name="StatusScreen" component={StatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}