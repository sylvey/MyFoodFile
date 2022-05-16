import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Background, Scroll } from '../../components/Screens';
import Header, { HeaderCenterTitle, HeaderLeftRightButtonContainer, HeaderLeftRightButtonSubContainer } from '../../components/Header';
import { HeaderBack, HeaderLeftLogo, HeaderLeftRightBtton, SearchBarContainer } from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { InputTextUp, Row, Title, UploadingPhotoButton, ValueInput, SmallTitle, SideImageContainer, SideImage } from './components/AddScreen';
import { ScrollTagsFix } from '../../components/Tags';
import { getFoodType } from '../../api/List';
import MapView from 'react-native-maps';
import { getMySheet } from '../../api/Add';
import { SearchInput, Container } from '../../components/SearchBar';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';



const Add = () =>{
    const navigation = useNavigation();

    const [foodType, setFoodType] = useState([]);
    const [mySheet, setMySheet] = useState([]);
    
    // for user input
    const [restaurant, setRestaurant] = useState();    
    const [food, setFood] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [likeVal, setLikeVal] = useState(0);
    const [spicyVal, setSpicyVal] = useState(0);
    const [chosenSheet, setChosenSheet] = useState([]);

    const fetchFoodType = async ()=>{
        const newData = await getFoodType("");
        setFoodType(newData);
        console.log("tags", newData);
    }

    const fetchMySheet = async()=>{
        const newData = await getMySheet();
        setMySheet(newData);
        console.log("my sheet", newData);
    }

    // set chosen
    const setChosenVal = ({ind, value})=>{
        let newData = [...chosenSheet];
        newData[ind] = value;
        setChosenSheet(newData);
    }


    const onSubmit = ()=>{
        console.log('restaurant', restaurant);
    }

    const setTag = (gid)=>{
        let newData = type;
        newData = newData + " #" + foodType[foodType.findIndex(x=>x.gid === gid)].title;
        setType(newData);
    }

    useEffect(async()=>{
        console.log('useEffect');
        await fetchFoodType();
        await fetchMySheet();
    })

    // set chosen
    useEffect(()=>{
        let chosen = []
        for(let i = 0; i < mySheet.length; i++){
            chosen = [...chosen, 0];
        }
        setChosenSheet(chosen);
        console.log("chosensheet:", chosenSheet);
    }, [mySheet])

    

    return (
        <Background>
            <Scroll>
                <HeaderBack></HeaderBack>
                <UploadingPhotoButton></UploadingPhotoButton>
                <InputTextUp 
                    title={"餐廳名稱"}
                    value={restaurant}
                    onChange={setRestaurant}
                ></InputTextUp>
                <InputTextUp 
                    title={"餐點名稱"}
                    value={food}
                    onChange={setFood}
                ></InputTextUp>
                <InputTextUp 
                    title={"餐點價格"}
                    value={price}
                    onChange={setPrice}
                ></InputTextUp>
                <Row>
                    <InputTextUp 
                        title={"類別"}
                        value={type}
                    ></InputTextUp>
                    <ScrollTagsFix
                        foodType={foodType !== []? foodType: []}  
                        setTag={setTag}  
                    ></ScrollTagsFix>
                </Row>
                <SmallTitle title={"餐廳位置"}></SmallTitle>  
                <Row>
                    <MapView
                        onPress={(e)=>{console.log("native event:",e.nativeEvent)}}
                        style={{height: 140, width: 310, borderColor:'black', borderWidth:4}}
                        initialRegion={{
                            latitude: 25.0100,
                            longitude: 121.3100,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    ></MapView>
                </Row> 
                <ValueInput 
                    title={"喜好程度"} 
                    type={"3choices"} 
                    sideType={"image"} 
                    setValue={setLikeVal}
                    value={likeVal}
                    left ={require("../../assets/like1.png")} 
                    right ={require("../../assets/like5.png")}/>
                <ValueInput 
                    title={"辛辣程度"} 
                    type={"5choices"} 
                    sideType={"image"} 
                    setValue={setSpicyVal}
                    value={spicyVal}
                    left ={require("../../assets/Spicy1.png")} 
                    right ={require("../../assets/Spicy5.png")}/>
                {
                    chosenSheet !== []?
                    chosenSheet.map((item, ind)=>
                        <ValueInput 
                            title={mySheet[ind].title} 
                            type={mySheet[ind].type}
                            value={item}
                            setValue={(val)=>{
                                setChosenVal({ind, value: val})
                                console.log(val)
                            }}
                            sideType={"text"} 
                            left ={mySheet[ind].left} 
                            right ={mySheet[ind].right}/>
                    )
                    :null
                }
                <Row>
                    <SideImageContainer>
                        <SideImage source={require("../../assets/reminder.png")}></SideImage>
                    </SideImageContainer>
                <Container>
                    <SearchInput selectionColor={'#F16719'} placeholder={"備註"}></SearchInput>
                </Container>
                </Row>
            </Scroll>
            <Header> 
                <HeaderLeftRightBtton src={require("../../assets/cancel.png")} onPress={()=>navigation.goBack()}></HeaderLeftRightBtton>
                <HeaderCenterTitle></HeaderCenterTitle>
                <HeaderLeftRightButtonContainer>
                    <TouchableOpacity style={styles.submitAddButtonContainer} onPress={onSubmit}>
                        <Image source={require("../../assets/submitAdd.png")} style = {styles.submitAdd}></Image>
                    </TouchableOpacity>                    
                </HeaderLeftRightButtonContainer>
            </Header>
        </Background>
    )
}

export default Add;

const styles = StyleSheet.create({
    submitAdd: {
        width: 60,
        height: 34,
    },
    submitAddButtonContainer:{
        width: 60,
        height: 34,
    }

})