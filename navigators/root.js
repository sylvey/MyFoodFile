import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login/Login';
import SignIn from '../screens/Login/SignInAndUp/SignIn';
import SignUp from '../screens/Login/SignInAndUp/SignUp';
import BottomTabs from './bottomBar';
import Add from '../screens/Add';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" 
            component={Login} 
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{headerShown: false}}
        /> 
        <Stack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{headerShown: false}}
        /> 
        <Stack.Screen 
            name="Main" 
            component={BottomTabs}
            options={{headerShown: false}}
        /> 
        <Stack.Screen
            name="Add"
            component={Add}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
}

export default Root;