import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { getDetailDataByGid } from '../../api/Detail';
import { Background, ContentContainer, SafeAreaViewContainer, Scroll } from '../../components/Screens';
import Header, { HeaderBack, HeaderCenterLogo, HeaderCenterTitle, HeaderLeftRightBtton } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import DetailItem from './components/Item';


const Detail = ({route}) =>{

    const [data, setData] = useState(null)
    const navigation = useNavigation();
    useEffect(async ()=>{
        const newData = await getDetailDataByGid(route.params);
        setData(newData);
        console.log('gid', route.params);  
        console.log('newData', newData)
    })

    const goBack = ()=>{
        navigation.goBack();
        console.log("go back");
    }
    
    return (
        <Background>
            <SafeAreaViewContainer>
                <HeaderBack/>
                <ContentContainer>
                    {
                        data? 
                        <DetailItem item={data}></DetailItem>:
                        null
                    }
                </ContentContainer>
            </SafeAreaViewContainer>
            <Header>    
                <HeaderLeftRightBtton 
                    src={require('../../assets/back.png')}
                    onPress = {()=>goBack()} 
                />
                <HeaderCenterLogo src={require('../../assets/homeLogo.png')}/>
                <HeaderLeftRightBtton></HeaderLeftRightBtton>
            </Header>
        </Background>
    )
}

export default Detail;

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 120
    }
})