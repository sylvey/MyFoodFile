import User from "../hardData/User";

export const getCurrentUser = async ()=>{ // 我需要傳什麼進去?
    return User;
}

export const postUpdateSheet = async(sheet)=>{
    console.log('post called');
    return "ok"
}