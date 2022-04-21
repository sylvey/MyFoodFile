import { StyleSheet } from "react-native-web";
import colors from "../../../constant/colors";

const styles = {
    background: {
        display: 'flex',
        height:'100%',
    },
    title: {
        marginTop: 20,
        color: colors.yellowDark,
        fontSize: 34,
        left: 25,
    },
    input: {
      marginTop: 20,
      height: 40,
      margin: 12,
      alignSelf: 'center',
      width: "80%",
      borderWidth: 1,
      padding: 10,
    },
    submit: {
      backgroundColor: colors.yellow,
      marginTop: 10,
    }
};

export default styles;