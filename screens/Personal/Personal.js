import { Text, Image, StyleSheet } from 'react-native';
import Header, { HeaderBack, HeaderCenterTitle, HeaderLeftRightBtton } from '../../components/Header';
import { Background, Scroll } from '../../components/Screens';

const Personal = () =>{
    return (
        <Background>
            <Scroll>
                <HeaderBack/>
                
            </Scroll>
            <Header>
                <HeaderLeftRightBtton src={require("../../assets/settings.png")}/>
                <HeaderCenterTitle title={"個人檔案"}/>
                <HeaderLeftRightBtton src={require("../../assets/Edit.png")}/>
            </Header>
        </Background>
    )
}

export default Personal;

