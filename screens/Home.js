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


const Home = () =>{
    const [dailyData, setDailyData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    const toDetail = (gid) =>{
        console.log('toDetail');
        navigation.navigate('Detail', gid);
    }
    
    const file = (file)=>
        <TouchableOpacity onPress={()=>toDetail(file.gid)}>
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
        const newData = await getDailyData();
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
        await fetchNewData();
    },[])

    useEffect( ()=>{
        setIsLoading(false);
        console.log(dailyData);
    }, [dailyData])


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
                <SearchBarContainer><SearchBar/></SearchBarContainer>
            </Header>
        </Background>
    )
}

export default Home;

const styles = StyleSheet.create({
    text:{
        color: '#343434',
        fontWeight: '500',
        fontFamily: 'Inter-Black'
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
