import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import List from "../screens/List/List";
import MapScreen from "../screens/Map";
import Personal from "../screens/Personal/Personal";
import Add from "../screens/Add/Add";
import { useCardAnimation } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AddVirtual from "./addNav";
import { Text, Image, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../constant/colors";
import { windowWidth } from "../constant/length";
import store from "../redux/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();


function BottomTabs() {
  const navigation = useNavigation();
  return (
    <>
    <Provider store={store}>
    <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon:({focused})=>{return(
            <TouchableOpacity style={styles.icon}>
              <Image 
                source={require("../assets/home.png")} 
                style={focused? styles.imageF :styles.image}/>
            </TouchableOpacity>
          )},
          tabBarShowLabel:false,
        }}
      />
      <Tab.Screen 
        name="List" 
        component={List}
        options={{
          headerShown: false,
          tabBarIcon:({focused})=>{return(
            <TouchableOpacity style={styles.icon}>
              <Image source={require("../assets/list.png")} style={focused? styles.imageF :styles.image}/>
            </TouchableOpacity>
          )},
          tabBarShowLabel:false,
        }}
      />
      <Tab.Screen 
        name="AddNav" 
        component={AddVirtual}
        options={{
          headerShown: false,
          tabBarIcon:({focused})=>{return(
            <TouchableOpacity style={styles.icon}>
              <Image source={require("../assets/addIcon.png")} style={focused? styles.imageF :styles.image}/>
            </TouchableOpacity>
            )},
          tabBarButton: () => {
            return (
            <TouchableOpacity 
              onPress={() => navigation.navigate("Add")} 
              style={{...styles.icon, 
              //   borderColor:'black',
              // borderWidth:2,
            }}>
              <Image source={require("../assets/addIcon.png")} style={styles.image}/>
            </TouchableOpacity>)
          }
        }}
        />
      <Tab.Screen 
        name="Map" 
        component={MapScreen} 
        options={{
          headerShown: false,
          tabBarIcon:({focused})=>{return(
            <TouchableOpacity style={styles.icon}>
              <Image source={require("../assets/map.png")} style={focused? styles.imageF :styles.image}/>
            </TouchableOpacity>
          )},
          tabBarShowLabel:false,
        }}  
      />
      
      <Tab.Screen 
        name="Personal" 
        component={Personal} 
        options={{
          headerShown: false,
          tabBarIcon:({focused})=>{return(
            <View style={styles.icon}>
              <Image source={require("../assets/user.png")} style={focused? styles.imageF :styles.image}/>
            </View>
          )},
          tabBarShowLabel:false,
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
    </Provider>
    </>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  icon:{
    display: 'flex', 
    width: windowWidth*0.2,
    alignItems:'center',
    justifyContent:'center', 
    height:"100%",
  },  
  image:{
    display:'flex',
    position:'relative',
    alignSelf:'center',
    margin:5,
    width: 28,
    height: 28,
    tintColor: colors.yellow
  },
  imageF:{
    display:'flex',
    position:'relative',
    width: 28,
    height: 28,
    tintColor: colors.yellowDark
  }
})