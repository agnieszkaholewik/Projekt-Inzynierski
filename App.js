import CategoriesScreen from './screens/CategoriesScreen';
import LaunchScreen from './screens/LaunchScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubCategoriesScreen from './screens/subCategoriesScreen';
import 'react-native-gesture-handler'


const Stack = createNativeStackNavigator();






export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#b0c4de'}, headerTintColor: 'black', headerBackTitle:'Back'}}>
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false}} />
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ title: 'Categories' }}  />
          <Stack.Screen name="SubCategoriesScreen" component={SubCategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    


  );
}


