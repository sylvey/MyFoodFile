import { Text, Image, StyleSheet, View, TextInput } from 'react-native';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { addQuestion, onChangeTitle, onChangeLeft, onDelete, onChangeRight, onChangeType } from '../../../redux/SheetSlice';
// import store from '../../redux/store';
// import { Provider } from 'react-redux';
const dropdownData = [
    {
        label: '線性刻度5',
        value: '5choices',
        image: require('../../../assets/lineChoice.png')
    },
    {
        label: '線性刻度3',
        value: '3choices',
        image: require('../../../assets/lineChoice.png')
    },
    {
        label: '是非題',
        value: '2choices',
        image: require('../../../assets/checkboxChoice.png')
    }
]

export default CreateSheet = ({questions, onSubmit}) =>{

    const dispatch = useDispatch();
    const addNewRow = ()=>{
        dispatch(addQuestion());
    }
    const onChangeTitleText = (gid, title) =>{
        dispatch(onChangeTitle({gid, title}));
    }
    const onChangeLeftText = (gid, left) =>{
        dispatch(onChangeLeft({gid, left}));
    }
    const onChangeRightText = (gid, right) =>{
        dispatch(onChangeRight({gid, right}));
    }
    const onChangeTypeText = (gid, e)=>{
        console.log('e', e);
        onSubmit();
        dispatch(onChangeType({gid, type: e.value}));
    }
    const onDeleteQuestion = (gid)=>{
        // console.log('e', e);
        dispatch(onDelete({gid}));
    }

    useEffect(() => {
      
    }, [onDeleteQuestion])
    
    // const onSubmit = async()=>{
    //     await dispatch(submitSheet());
    // }
    
    // console.log('increate sheet:', questions);
    return (
        <>
        
        {
            questions? questions.map((question)=>{
                // console.log('question item:', question)
                return(
                    <>
                    <View style={styles.block}>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.title}
                                selectionColor={'#2C2C2C'}
                                onChangeText={(text)=>onChangeTitleText(question.gid, text)}
                                value={question.title}
                                onEndEditing={(e)=>onSubmit()}
                            ></TextInput>
                            <SelectCountry
                                style={styles.dropdown}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderStyle={styles.placeholderStyle}
                                imageStyle={styles.imageStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                maxHeight={200}
                                value={question.type}
                                onChange={(e)=>onChangeTypeText(question.gid, e)}
                                data={dropdownData}
                                valueField="value"
                                labelField="label"
                                imageField="image"
                            />
                        </View>
                        <View style = {styles.row}>
                            <View style={styles.left}>
                                <View style={styles.row}>
                                    {
                                        question.type === "2choices"?
                                        <Image style={styles.check} source={require("../../../assets/checkboxEmpty.png")}/>
                                        :<Text style={styles.checkText}>1</Text>
                                    }
                                    <View style={styles.choiceWrapper}>
                                        <TextInput
                                            style={styles.choice}
                                            selectionColor={'#2C2C2C'}
                                            onChangeText={(text)=> onChangeLeftText(question.gid, text)}
                                            value={question.left}
                                            onEndEditing={(e)=>onSubmit()}
                                        ></TextInput>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    {
                                        question.type === "2choices"?
                                        <Image style={styles.check} source={require("../../../assets/checkboxEmpty.png")}/>
                                        :<Text style={styles.checkText}>{
                                            question.type === "3choices" ? 3: 5
                                        }</Text>
                                    }
                                    <View style={styles.choiceWrapper}>
                                        <TextInput
                                            style={styles.choice}
                                            selectionColor={'#2C2C2C'}
                                            onChangeText={(text)=> onChangeRightText(question.gid, text)}
                                            value={question.right}
                                            onEndEditing={(e)=>onSubmit()}
                                        ></TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.right}>
                                {/* <Text>hi</Text> */}
                                <TouchableOpacity onPress={()=>onDeleteQuestion(question.gid)}>
                                    <Image source={require("../../../assets/delete.png")} style={styles.delete}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </>
                );
               
            }): null
        }
        <TouchableOpacity style={styles.addButton} onPress={()=>addNewRow()}>
            <Image style={styles.addImage} source={require('../../../assets/plus-circle.png')}/>
        </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    block: {
        margin: 8,
        padding: 6,
        borderWidth: 1,
        borderColor: "#D0A129",
        borderRadius: 3.5,
    },
    left: {
        flex: 3,
    },
    right: {
        flex:2,
        height: "100%",
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    row: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row'
    },
    choice: {
    },
    delete: {
        width: 20,
        height: 21,
    },
    choiceWrapper: {
        // width: 80,
        height: 25,
        width: 80,
        borderBottomColor: "#2C2C2C",
        borderBottomWidth: 1,
    },
    title: {
        flex: 3,
        height: 25,
        margin: 6,
        backgroundColor: "#F5F5F5",
        borderBottomColor: "#3E3E3E",
        borderBottomWidth:0.4,
    },
    check:{
        margin: 6,
        fontSize:15,
        
        width: 11.8,
        height: 11,
    },
    checkText:{
        marginHorizontal: 6,
        textAlignVertical: 'center',
    },
    addButton: {
        // backgroundColor: 'red', 
        alignItems: 'center'
    },
    addImage: {
        width: 60,
        height: 60
    },
    dropdown: {
        flex: 2,
        marginLeft: 2,
        margin: 6,
        height: 25,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    imageStyle: {
      width: 20,
      height: 20,
    },
    placeholderStyle: {
      fontSize: 14,
    },
    selectedTextStyle: {
      fontSize: 14,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },

})