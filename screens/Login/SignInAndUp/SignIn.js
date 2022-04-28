import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import styles from './styles';
import React, { useState, useEffect } from 'react';
import { PostLogin } from '../../../api/Sign';


const SignIn = () =>{
    // console.log(styles);
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const naviation = useNavigation();
    const onLogin = async () =>{
        const canLogin = await PostLogin({userName, passWord});
        if(canLogin){
            naviation.navigate("Main");
            alert('Log In Succeed');
        }
        else{
            alert('Log In Fail');
        }
    }

    return (
        <View style = {styles.background}>
            <BackButton/>
            <Text style={styles.title}>{"Log in"}</Text>
            <TextInput 
                style={styles.input} 
                value={userName}
                onChangeText={(text)=>setUserName(text)}
            ></TextInput>
            <TextInput 
                style={styles.input} 
                value={passWord}
                onChangeText={(text)=>setPassWord(text)}></TextInput>
            <SubmitButton title={"Login"} style = {styles.submit} onPress = {()=>onLogin()}/>
        </View>
    )
    
}

export default SignIn;



