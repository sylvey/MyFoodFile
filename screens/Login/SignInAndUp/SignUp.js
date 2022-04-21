import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import styles from './styles';


const SignUp = () =>{
    // console.log(styles);
    const navigation = useNavigation();
    const onNext = ()=>{
        navigation.goBack();
    }
    return (
        <View style = {styles.background}>
            <BackButton/>
            <Text style={styles.title}>{"Register"}</Text>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <SubmitButton title={"Next"} style = {styles.submit} onPress={()=>{onNext()}}/>
        </View>
    )
}

export default SignUp;



