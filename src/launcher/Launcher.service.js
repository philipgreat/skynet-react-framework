import { get, post,PREFIX,joinParameters,joinPostParameters } from '../axios/tools'


const login=(username, password)=>{
    return get({
        url: PREFIX+`secUserManager/login/${username}/${password}/`

    });
}


const checkOtherLogin=()=>{

    return get({
        url: PREFIX+`secUserManager/checkOtherLogin/`

    });

}

const logout=(username, password)=>{
    return get({
        url: PREFIX+`secUserManager/showlogin/`

    });
}

const gotoApp=(appId)=>{
    return get({
        url: PREFIX+`secUserManager/selectApp/${appId}/`

    });
}

const LauncherService={login,gotoApp,logout,checkOtherLogin};
export default LauncherService;
