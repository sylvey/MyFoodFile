import User from "../hardData/User";
import axios from "../api/axios";

export const getCurrentUser = async (userName)=>{ // 我需要傳什麼進去?
    console.log('get User', "'"+userName + "'");
    if(userName){
        try{
            let res = await axios.post("/getUser", {userName});
            console.log('get User here')
            console.log(res.status);
            if(res.status === 200){
                console.log('res User', res.data);
                return res.data; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }
        
    }
    
    // return ;
    return User;
}

export const postUpdateSheet = async(userName, sheet)=>{
    console.log('post called');
    console.log('posted', userName, sheet);
    if(sheet){
        try{
            let res = await axios.post("/postUpdateSheet", {userName, data: sheet});
            console.log('get PostUpdate here')
            console.log(res.status);
            if(res.status === 200){
                console.log('res UpdateSheet', res.status);
                return ; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }
        
    }

    return ;
}
