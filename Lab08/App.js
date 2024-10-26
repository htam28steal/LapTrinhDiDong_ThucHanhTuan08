import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen_01 from './Screen_01'
import Screen_02 from './Screen_02'
import Screen_03 from './Screen_03'
const Stack = createStackNavigator();

export default myApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen_01'>
        <Stack.Screen name='Screen_01' component={Screen_01}/>
        <Stack.Screen name ='Screen_02' component={Screen_02}/>
         <Stack.Screen name ='Screen_03' component={Screen_03}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
