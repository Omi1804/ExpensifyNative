import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
import AddTripScreen from '../Screens/AddTripScreen';
import TripExpensesScreen from '../Screens/TripExpensesScreen';

const Stack = createNativeStackNavigator();

const appNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddExpense"
          component={AddExpenseScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddTrip"
          component={AddTripScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TripExpenses"
          component={TripExpensesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default appNavigation;
