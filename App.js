
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import onboarding from './Screens/onboarding';
import login from './Screens/login';
import dashboard from './Screens/dashboard';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="onboarding" component={onboarding} options={{headerShown: false}} />
           <Stack.Screen name="login" component={login} options={{headerShown: false}} />
           <Stack.Screen name="dashboard" component={dashboard} options={{headerShown: false}}/>
        
                 </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;