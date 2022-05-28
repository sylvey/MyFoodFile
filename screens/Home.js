import { Text, Image, View, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import Header, { HeaderBack, HeaderCenterContainer, HeaderLeftLogo, HeaderLeftRightBtton, SearchBarContainer } from '../components/Header';
import { Background, Scroll } from '../components/Screens';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { getDailyData } from '../api/Home';
import * as Progress from 'react-native-progress';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaskedViewComponent } from '@react-native-masked-view/masked-view';
import moment from "moment"



const Home = () =>{
    const [userName, setUserName] = useState();
    const [dailyData, setDailyData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyWord] = useState('');
    const navigation = useNavigation();

    const toDetail = (gid) =>{
        console.log('toDetail');
        navigation.navigate('Detail', gid);
    }
    
    const file = ({item})=>
        <TouchableOpacity onPress={()=>toDetail(item.gid)}>
            <Image style={styles.fileImage} source={require("../hardData/Photo.png")}></Image>
        </TouchableOpacity>
        

    const DailyDataItem = ({item}) =>
        <View style = {styles.dailyItemContainer}>
            <Text style={styles.text}>{item.date}</Text>
            <Text style={styles.text}>{item.year}</Text>
            <ScrollView style={styles.dailyItemScrollRow}>
                <FlatList
                    data={item.files}
                    contentContainerStyle={styles.listRowContainer}
                    horizontal={ true }
                    renderItem={file}
                    keyExtractor={item => item.gid}
                  />
                {/* <View style={styles.fileImage}></View>
                <View style={styles.fileImage}></View>
                <View style={styles.fileImage}></View> */}
            </ScrollView>
        </View>

    const fetchNewData = async ()=>{
        setIsLoading(true);
        
        let startDay = moment().format("MMM DD");
        console.log(startDay);
        let endDay = moment().subtract(10, 'days').format("MMM DD");
        console.log(endDay);

        const newData = await getDailyData(userName, keyword, startDay, endDay);
        setDailyData([...dailyData, ...newData]);
        
    }

    const loader = ()=>{
        return <>
        {
            isLoading? 
                <Progress.Circle size={30} indeterminate={true}></Progress.Circle>
            : 
                <></>
        }</>
    }
    
    useEffect( async ()=>{
        const name = await AsyncStorage.getItem('@userName');
        setUserName(name);
        console.log('username:', name);
    },[])

    useEffect(async()=>{
        if(userName){
            console.log('username2:', userName);
            await fetchNewData();
        }
    },[userName])

    useEffect( ()=>{
        setIsLoading(false);
        // console.log(dailyData);
    }, [dailyData])

    // useEffect( ()=>{
    //     // setIsLoading(false);
    //     console.log('key', keyword);
    // }, [keyword])


    return (
        <Background>
            <Scroll contentContainerStyle = {styles.center}>
                <HeaderBack/>
                <FlatList
                    data={dailyData}
                    style={styles.listContainer}
                    // onEndReached ={fetchNewData}
                    renderItem={DailyDataItem}
                    ListFooterComponent={loader}
                    keyExtractor={item=>item.date}
                ></FlatList>
            </Scroll>
            <Header>
                <HeaderLeftLogo src={require("../assets/homeLogo.png")}></HeaderLeftLogo>
                <SearchBarContainer>
                    <SearchBar 
                        value={keyword}
                        onChangeText={setKeyWord}
                    />
                </SearchBarContainer>
            </Header>
        </Background>
    )
}

export default Home;

const styles = StyleSheet.create({
    text:{
        color: '#343434',
        fontWeight: '500',
        // fontFamily: 'Inter-Black'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    dailyItemContainer:{
        width: "100%",
        height: 203,
        marginBottom: 20,
        // backgroundColor: 'red'
    },
    listContainer:{
        width: "95%",
        // marginTop: 20,
        // backgroundColor: 'blue',
    },
    dailyItemScrollRow: {
        display: 'flex',
        height: 160,
        width: "100%",
    },
    listRowContainer: { 
        alignItems:'center', 
        justifyContent: 'center'
    },
    fileImage: {
        display: 'flex',
        marginRight: 17,
        height: 160,
        width: 160,
        // backgroundColor: 'red'
    }
})
