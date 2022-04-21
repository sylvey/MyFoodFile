import { Text,Image, StyleSheet } from 'react-native';
import Header, { HeaderCenterContainer, HeaderLeftRightBtton } from '../components/Header';
import { Background, Scroll } from '../components/Screens';


const Home = () =>{
    return (
        <Background>
            <Scroll>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>home</Text>
                <Text>last</Text>
            </Scroll>
            <Header>
                <HeaderLeftRightBtton src={require("../assets/settings.png")}/>
                <HeaderCenterContainer><Image source={require("../assets/homeLogo.png")} style={styles.logo}/></HeaderCenterContainer>
                <HeaderLeftRightBtton src={require("../assets/plus.png")}/>
                
                {/* <Image source={require("../assets/homeLogo.png")} style = {styles.logo}/> */}
            </Header>
        </Background>
    )
}

export default Home;

const styles = StyleSheet.create({
    logo: {
        width: 103,
        height: 68,
    }
})
