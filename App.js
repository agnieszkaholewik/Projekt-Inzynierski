import CategoriesScreen from './screens/CategoriesScreen';
import LaunchScreen from './screens/LaunchScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubCategoriesScreen from './screens/subCategoriesScreen';
import 'react-native-gesture-handler'
import CalculatorsScreen from './screens/CalculatorsScreen';
import BMICalculator from './screens/calculators/BMICalculator';
import CalorieCalculator from './screens/calculators/CalorieCalculator';
import WaterCalculator from './screens/calculators/WaterCalculator';
import MiniGameScreen from './screens/MiniGameScreen';

const Stack = createNativeStackNavigator();






export default function App() {
  return (
    <>
      <StatusBar style='auto' backgroundColor="#b0c4de" />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#b0c4de'}, headerTintColor: 'black', headerBackTitle:'Back'}}>
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false}} />
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ title: 'Categories' }}  />
          <Stack.Screen name="SubCategoriesScreen" component={SubCategoriesScreen} />
          <Stack.Screen name="CalculatorsScreen" component={CalculatorsScreen} options={{title:'Health Calculators', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="BMICalculator" component={BMICalculator} options={{title:'BMI', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="CalorieCalculator" component={CalorieCalculator} options={{title:'Caloric Needs', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="WaterCalculator" component={WaterCalculator} options={{title:'Water Intake', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="MiniGameScreen" component={MiniGameScreen} options={{title:'Mini Game', contentStyle:{backgroundColor:'#e6e6fa'}}} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
    


  );
}


