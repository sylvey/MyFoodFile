import { Text, Image, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getCurrentUser, postUpdateSheet } from '../../api/Personal';
import Header, { HeaderBack, HeaderCenterTitle, HeaderLeftRightBtton } from '../../components/Header';
import { Background, Scroll } from '../../components/Screens';
import { ProfileBackground, ProfileImage, Name, PersonalDetail } from './components/Profile';
import { RecordBlock, RecordTab, RecordTabContainer } from './components/Record';
import store from '../../redux/store';
import { useDispatch } from 'react-redux';
import { init } from '../../redux/SheetSlice';
// import { useDispatch } from 'react-redux';
import { Provider, useSelector } from 'react-redux';
import CreateSheet from './subPage/CreateSheet';
// import { useDispatch } from 'react-redux';
import { getMySheet } from '../../api/Add';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Personal = () =>{

    const [user, setUser] = useState(null);
    const [mode, setMode] = useState(1); // 1 for 設定題目, 2 for 紀錄戰果, 3 for 圖表秀秀
    const dispatch = useDispatch();

    const onSubmit = async()=>{
        console.log('onSubmit:', questions);
        await postUpdateSheet(user.name, questions);
    }
    


    useEffect(async () => {
        console.log('useEffect personal');
        const userName = await AsyncStorage.getItem('@userName');
        console.log('userName personal', userName);
        const currentUser = await getCurrentUser(userName);
        setUser(currentUser);
        

        const mySheet = await getMySheet(userName);

        console.log('mysheet', mySheet);
        dispatch(init(mySheet));
        console.log('questions', questions);
    //   console.log(currentUser);
    //   console.log('questions1:', questions);
    }, [])

    const questions = useSelector((state)=> state.mySheet);
    useEffect(()=>{
        console.log('questions1', questions);
    }, [questions])

    

    
    
    return (
        
        <Background>
            <Scroll contentContainerStyle={styles.center}>
                <HeaderBack/>
                {
                    user?
                    <ProfileBackground>
                        <View styles={{flex: 1 , backgroundColor: 'red'}}>
                            <ProfileImage source={require('../../assets/profilePhoto.png')}/>
                            <Name>{user.name}</Name>
                            <PersonalDetail>{ user.record + "則記錄 | Level" + user.level}</PersonalDetail>
                        </View>
                    </ProfileBackground>
                    :null
                }
                <RecordBlock>
                    <RecordTabContainer>
                        <RecordTab 
                            chosen={mode === 1} 
                            title = {"設定題目"}
                            onPress={()=>setMode(1)}>
                        </RecordTab>
                        <RecordTab 
                            chosen={mode === 2} 
                            title = {"紀錄戰果"}
                            onPress={()=>setMode(2)}>
                        </RecordTab>
                        <RecordTab 
                            chosen={mode === 3} 
                            title = {"圖表秀秀"}
                            onPress={()=>setMode(3)}>
                        </RecordTab>
                    </RecordTabContainer>
                    {
                        mode === 1? 
                        <CreateSheet questions={questions} onSubmit = {()=>onSubmit()}></CreateSheet>
                        :null
                    }


                </RecordBlock>
                

            </Scroll>
            <Header>
                <HeaderLeftRightBtton src={require("../../assets/settings.png")}/>
                <HeaderCenterTitle title={"個人檔案"}/>
                <HeaderLeftRightBtton src={require("../../assets/Edit.png")}/>
            </Header>
        </Background>
        // </Provider>
    )
}

export default Personal;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    }
})

