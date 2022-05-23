import { Text, Image, StyleSheet, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addQuestion, onChangeTitle, onChangeLeft, onChangeRight, submitSheet } from '../../../redux/SheetSlice';
// import store from '../../redux/store';
// import { Provider } from 'react-redux';

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
    // const onSubmit = async()=>{
    //     await dispatch(submitSheet());
    // }
    
    console.log('increate sheet:', questions);
    return (
        <>
        <Text>here</Text>
        {
            questions? questions.map((question)=>{
                // console.log('question item:', question)
                return(
                    <>
                    <TextInput
                        onChangeText={(text)=>onChangeTitleText(question.gid, text)}
                        value={question.title}
                        onEndEditing={(e)=>onSubmit()}
                    ></TextInput>
                    <TextInput
                        onChangeText={(text)=> onChangeLeftText(question.gid, text)}
                        value={question.left}
                        onEndEditing={(e)=>onSubmit()}
                    ></TextInput>
                    <TextInput
                        onChangeText={(text)=> onChangeRightText(question.gid, text)}
                        value={question.right}
                        onEndEditing={(e)=>onSubmit()}
                    ></TextInput>
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
    addButton: {
        // backgroundColor: 'red', 
        alignItems: 'center'
    },
    addImage: {
        width: 60,
        height: 60
    }

})