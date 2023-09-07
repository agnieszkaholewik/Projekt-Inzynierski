import CategoriesScreen from './screens/CategoriesScreen';
import LaunchScreen from './screens/LaunchScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SubCategoriesScreen from './screens/subCategoriesScreen';

import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='auto' />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="SubCategoriesScreen" component={SubCategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    

  );
}


