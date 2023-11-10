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
import StopWatchScreen from './screens/StopWatchScreen';
import DrinkWater from './screens/reminders/DrinkWater';
import Exercise from './screens/reminders/Exercise';
import Sleep from './screens/reminders/Sleep';
import Add from './screens/reminders/Add';
import MoodTrackerScreen from './screens/MoodTrackerScreen';
import BreathingExercisesScreen from './screens/BreathingExercisesScreen';
import FirstBreathingExercise from './screens/breathing/FirstBreathingExercise';
import SecondBreathingExercise from './screens/breathing/SecondBreathingExercise';
import ThirdBreathingExercise from './screens/breathing/ThirdBreathingExercise';
import WorkoutsScreen from './screens/WorkoutsScreen';
import Warmup from './screens/workouts/Warmup';
import AddWorkout from './screens/workouts/AddWorkout';
import AffirmationsScreen from './screens/AffirmationsScreen';
import ProgressTrackerScreen from './screens/ProgressTrackerScreen';

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
          <Stack.Screen name="StopWatchScreen" component={StopWatchScreen} options={{title:'Stopwatch', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="DrinkWater" component={DrinkWater} options={{title:'Drink Water', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="Exercise" component={Exercise} options={{title:'Exercise', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="Sleep" component={Sleep} options={{title:'Sleep', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="Add" component={Add} options={{title:'Add', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="MoodTrackerScreen" component={MoodTrackerScreen} options={{title:'Mood Tracker', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="BreathingExercisesScreen" component={BreathingExercisesScreen} options={{title:'Breathing Exercises', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="FirstBreathingExercise" component={FirstBreathingExercise} options={{title:'4-7-8 Breathing', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="SecondBreathingExercise" component={SecondBreathingExercise} options={{title:'Box Breathing', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="ThirdBreathingExercise" component={ThirdBreathingExercise} options={{title:'2-TO-1 Breathing', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="WorkoutsScreen" component={WorkoutsScreen} options={{title:'Workouts', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="Warmup" component={Warmup} options={{title:'Warm-up', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="AddWorkout" component={AddWorkout} options={{title:'Add', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="AffirmationsScreen" component={AffirmationsScreen} options={{title:'Affirmations', contentStyle:{backgroundColor:'#e6e6fa'}}} />
          <Stack.Screen name="ProgressTrackerScreen" component={ProgressTrackerScreen} options={{title:'Progress Tracker', contentStyle:{backgroundColor:'#e6e6fa'}}} />

        </Stack.Navigator>
      </NavigationContainer>
      
    </>
    


  );
}


