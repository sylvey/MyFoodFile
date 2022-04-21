import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import styles from './styles';


const SignIn = () =>{
    console.log(styles);
    const naviation = useNavigation();
    const onLogin = () =>{
        naviation.navigate("Main");
    }
    return (
        <View style = {styles.background}>
            <BackButton/>
            <Text style={styles.title}>{"Log in"}</Text>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <SubmitButton title={"Login"} style = {styles.submit} onPress = {()=>onLogin()}/>
        </View>
    )
    
}

export default SignIn;



