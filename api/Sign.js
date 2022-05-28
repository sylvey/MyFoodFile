import axios from "../api/axios";

const PostSignUp = async ({userName, password}) => {
    console.log('here', userName, password);
    if(userName && password){
        try{
            let res = await axios.post("/register", {userName, password});
            console.log('sign up here')
            console.log(res.status);
            if(res.status === 200){
                return true; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }
        
    }
    
    return false;
}
const PostLogin = async ({userName, password}) =>{

    console.log('here', userName, password);
    if(userName && password){
        try{
            let res = await axios.post("/login", {userName, password});
            console.log('login here')
            console.log(res.status);
            if(res.status === 200){
                return true; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }
        
    }
    
    return false;
    // return true; // 驗證過可以
    // return false; 
}

export {PostLogin,PostSignUp};