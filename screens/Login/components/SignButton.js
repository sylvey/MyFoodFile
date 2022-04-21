import { TouchableOpacity, StyleSheet, Text, Platform } from "react-native";

const SignButton = ({title, style, onPress}) =>{
    return (
        <TouchableOpacity title={`${title}`} style = {[{...styles.button, ...style}, styles.shadowProp]} onPress={()=>onPress()}>
            <Text style={styles.text}>{title}</Text>    
        </TouchableOpacity>
    )
}

export default SignButton;

const styles = StyleSheet.create({
    button:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: "center",
        justifyContent: "center",
        width: 225,
        height: 36,
        borderRadius: 20,
    },
    text: {
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        ...Platform.select({
            ios:{
                lineHeight:36,
                // backgroundColor: 'red'
            },
            android:{
            }
        }),
        // alignItems: '',
        // justifyContent: 'center',
        
        width: '100%',
        height: "100%",
        color: "white",
        // backgroundColor: 'red',
        fontSize: 20,
    },
    shadowProp: {
        elevation : 2,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },

})

