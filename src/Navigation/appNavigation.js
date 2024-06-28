import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
import AddTripScreen from '../Screens/AddTripScreen';
import TripExpensesScreen from '../Screens/TripExpensesScreen';
import WelcomScreen from '../Screens/WelcomScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import {useDispatch, useSelector} from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth';
import {setUser} from '../redux/slices/user';
import {auth} from '../config/firebase';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  onAuthStateChanged(auth, u => {
    // console.log('got user: ', u);
    dispatch(setUser(u));
  });

  if (user) {
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
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            options={{headerShown: false}}
            name="Welcome"
            component={WelcomScreen}
          />
          {/* presentation as a model means a seperate screen will not pop up but a overlay screen comes above the current screen */}
          <Stack.Screen
            options={{headerShown: false, presentation: 'modal'}}
            name="SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{headerShown: false, presentation: 'modal'}}
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default AppNavigation;
