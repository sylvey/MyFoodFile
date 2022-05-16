import { Text, Image, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../api/Personal';
import Header, { HeaderBack, HeaderCenterTitle, HeaderLeftRightBtton } from '../../components/Header';
import { Background, Scroll } from '../../components/Screens';
import { ProfileBackground, ProfileImage, Name, PersonalDetail } from './components/Profile';
import { RecordBlock, RecordTab, RecordTabContainer } from './components/Record';




const Personal = () =>{

    const [user, setUser] = useState(null);
    const [mode, setMode] = useState(2); // 1 for 設定題目, 2 for 紀錄戰果, 3 for 圖表秀秀

    useEffect(async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      console.log(currentUser);
    }, [])
    
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
                    <Text>hihi</Text>

                    
                </RecordBlock>
                

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

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    }
})

