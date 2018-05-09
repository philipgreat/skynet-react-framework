import { get, post,PREFIX,joinParameters,joinPostParameters } from '../axios/tools'


const login=(username, password)=>{
    return get({
        url: PREFIX+`secUserManager/login/${username}/${password}/`

    });
}


const logout=(username, password)=>{
    return get({
        url: PREFIX+`secUserManager/showhome/`

    });
}

const gotoApp=(appId)=>{
    return get({
        url: PREFIX+`secUserManager/selectApp/${appId}/`

    });
}

const LauncherService={login,gotoApp,logout};
export default LauncherService;
