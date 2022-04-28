import { Text } from 'react-native';
import Header, { HeaderBack, HeaderCenterTitle, HeaderLeftRightBtton } from '../components/Header';
import { Background, Scroll } from '../components/Screens';
import MapView from 'react-native-maps';

const MapScreen = () =>{
    return (
        <Background>
            <MapView
                onPress={(e)=>{console.log("native event:",e.nativeEvent)}}
                style={{height: "100%"}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            ></MapView>
            <Header>
                <HeaderLeftRightBtton src={require("../assets/back.png")}/>
                <HeaderCenterTitle title={"我的紀錄"}/>
                <HeaderLeftRightBtton src = {require("../assets/search.png")}/>
            </Header>
        </Background>
    )
}

export default MapScreen;