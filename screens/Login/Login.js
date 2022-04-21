import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignButton from './components/SignButton';
import colors from '../../constant/colors.js';

const Login = () =>{
    const navigation = useNavigation()
    const onPressSignIn = ()=>{
      navigation.navigate("SignIn");
    }
    const onPressSignUp = ()=>{
      navigation.navigate("SignUp");
    }
    return (
        <View style= {styles.background}>
            <Image 
                source={require("../../assets/BigIcon.png")}
                style={styles.icon}
            />
            <SignButton title={"Sign in"} style = {styles.signIn} onPress={()=>onPressSignIn()}></SignButton>
            <SignButton title={"Sign up"} style = {styles.signUp} onPress={()=>onPressSignUp()}></SignButton>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    background: {
      flex: 1,
    //   backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'  
    },
    icon: {
    //   flex: 1,
      height: 249,
      width: 330,
    //   backgroundColor: "red",
    },
    signIn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.yellow,
      marginTop: 200
    },
    signUp: {
      backgroundColor: colors.grey,
      marginTop: 10,
    }
});