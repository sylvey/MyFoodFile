import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { PostLogin, PostSignUp } from '../../../api/Sign';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import styles from './styles';
import React, { useState, useEffect } from 'react';

const SignUp = () =>{
    // console.log(styles);
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const navigation = useNavigation();
    const onNext = async ()=>{
        console.log('on next');
        const canSignUp = await PostSignUp({userName, password: passWord});
        if(canSignUp){
            alert('Successfully Signed Up');
            navigation.goBack();
        }
        else{
            alert('Sign Up Fail');
        }
           
    }

    
    return (
        <View style = {styles.background}>
            <BackButton/>
            <Text style={styles.title}>{"Register"}</Text>
            <TextInput 
                selectionColor={"black"}
                style={styles.input} 
                value={userName}
                onChangeText={(text)=>setUserName(text)}
            ></TextInput>
            <TextInput 
                selectionColor={"black"}
                style={styles.input} 
                value={passWord}
                onChangeText={(text)=>setPassWord(text)}
                secureTextEntry={true}
            ></TextInput>
            <SubmitButton title={"Next"} style = {styles.submit} onPress={()=>{onNext()}}/>
        </View>
    )
}

export default SignUp;



