import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './PageLogin/Login';
import Dashboard from './Home/Dashboard';

const stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Login'>
        <stack.Screen name="Login" component={Login}/>
        <stack.Screen name="Dashboard" component={Dashboard}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;