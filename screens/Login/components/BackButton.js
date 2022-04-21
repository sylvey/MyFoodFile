import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text, Platform, Image } from "react-native";

const BackButton = ({style}) =>{
    
    const navigation = useNavigation();
    const onPress = ()=>{
        navigation.goBack();
    }

    return (
        <TouchableOpacity style = {styles.button} onPress = {()=>onPress()}>
            <Image style = {{width: "100%", height: "100%"}} source={require("../../../assets/back.png")}></Image>
        </TouchableOpacity>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    button:{
        display: 'flex',
        marginTop: 100,
        // backgroundColor: 'red',
        width: 50,
        height: 20,
        width: 12,
        left: 25,
        // top: 56,
        // border-radius: 0px;
    }
})

