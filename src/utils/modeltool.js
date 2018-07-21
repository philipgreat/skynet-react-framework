<<<<<<< HEAD

import pathToRegexp from 'path-to-regexp'

const hasError = (data) => {
    if (!data.class) {
        return false
    }
    if (data.class.indexOf('Exception') > 0) {
        return true
    }
    if (data.class.indexOf('LoginForm') > 0) {
        return true
    }
    return false
}
const handleClientError = (message) => {
    notification.error({
        message: message,
        description: message,
    })
}

const handleServerError = (data) => {
    if (data.class) {
        if (data.class.indexOf("Exception") < 0) {
            return false
        }
    }
    if (data.message) {
        notification.error({
            message: data.message,
            description: data.message,
        })

    }
    if (data.messageList[0]) {
        // console.error('error ', data.messageList[0].sourcePosition)
        notification.error({
            message: data.messageList[0].sourcePosition,
            description: data.messageList[0].body,
        })
    }
    return true
}
const setupModel = ({ dispatch, history, location, modelName }) => {
    const { pathname } = location
    const prefix = modelName //not start with /
    if (!pathname.startsWith(`/${modelName}`)) {
        return
    }
    const newstate = location.state
    if (newstate) {
        dispatch({ type: 'updateState', payload: newstate })
        return
    }
    const dashboardmatch = pathToRegexp(`/${modelName}/:id/dashboard`).exec(pathname)
    if (dashboardmatch) {
        const id = dashboardmatch[1]
        dispatch({ type: 'view', payload: { id, pathname } })
        return
    }
    const editDetailMatch = pathToRegexp(`/${modelName}/:id/editDetail`).exec(pathname)
    if (editDetailMatch) {
        const id = editDetailMatch[1]
        dispatch({ type: 'view', payload: { id, pathname } })
        return
    }
    const viewDetailMatch = pathToRegexp(`/${modelName}/:id/viewDetail`).exec(pathname)
    if (viewDetailMatch) {
        const id = viewDetailMatch[1]
        dispatch({ type: 'view', payload: { id, pathname } })
        return
    }

    const match = pathToRegexp(`/${modelName}/:id/list/:listName/:listDisplayName`).exec(pathname)
    if (match) {
        const id = match[1]
        const displayName = match[3]
        dispatch({ type: 'view', payload: { id, pathname, displayName } })
    }
    const othermatch = pathToRegexp(`/${modelName}/:id/:subpage`).exec(pathname)
    if (othermatch) {
        const id = othermatch[1]
        dispatch({ type: 'view', payload: { id, pathname } })
        return
    }

}

const modeltool={hasError,setupModel,handleClientError,handleServerError}
export default modeltool

=======
import pathToRegexp from 'path-to-regexp';

const hasError = data => {
  if (!data.class) {
    return false;
  }
  if (data.class.indexOf('Exception') > 0) {
    return true;
  }
  if (data.class.indexOf('LoginForm') > 0) {
    return true;
  }
  return false;
};
const handleClientError = message => {
  notification.error({
    message: message,
    description: message,
  });
};

const handleServerError = data => {
  if (data.class) {
    if (data.class.indexOf('Exception') < 0) {
      return false;
    }
  }
  if (data.message) {
    notification.error({
      message: data.message,
      description: data.message,
    });
  }
  if (data.messageList[0]) {
    // console.error('error ', data.messageList[0].sourcePosition)
    notification.error({
      message: data.messageList[0].sourcePosition,
      description: data.messageList[0].body,
    });
  }
  return true;
};
const setupModel = ({ dispatch, history, location, modelName }) => {
  const { pathname } = location;
  const prefix = modelName; //not start with /
  if (!pathname.startsWith(`/${modelName}`)) {
    return;
  }
  const newstate = location.state;
  if (newstate) {
    dispatch({ type: 'updateState', payload: newstate });
    return;
  }
  const dashboardmatch = pathToRegexp(`/${modelName}/:id/dashboard`).exec(pathname);
  if (dashboardmatch) {
    const id = dashboardmatch[1];
    dispatch({ type: 'view', payload: { id, pathname } });
    return;
  }
  const editDetailMatch = pathToRegexp(`/${modelName}/:id/editDetail`).exec(pathname);
  if (editDetailMatch) {
    const id = editDetailMatch[1];
    dispatch({ type: 'view', payload: { id, pathname } });
    return;
  }
  const viewDetailMatch = pathToRegexp(`/${modelName}/:id/viewDetail`).exec(pathname);
  if (viewDetailMatch) {
    const id = viewDetailMatch[1];
    dispatch({ type: 'view', payload: { id, pathname } });
    return;
  }

  const match = pathToRegexp(`/${modelName}/:id/list/:listName/:listDisplayName`).exec(pathname);
  if (match) {
    const id = match[1];
    const displayName = match[3];
    dispatch({ type: 'view', payload: { id, pathname, displayName } });
  }
  const othermatch = pathToRegexp(`/${modelName}/:id/:subpage`).exec(pathname);
  if (othermatch) {
    const id = othermatch[1];
    dispatch({ type: 'view', payload: { id, pathname } });
    return;
  }
};

const modeltool = { hasError, setupModel, handleClientError, handleServerError };
export default modeltool;

/*

import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
import GlobalComponents from '../../custcomponents';

const hasError = (data) => {
  if (!data.class) {
    return false
  }
  if (data.class.indexOf('Exception') > 0) {
    return true
  }
  if (data.class.indexOf('LoginForm') > 0) {
    return true
  }
  return false
}
const handleClientError = (message) => {
	notification.error({
      message: message,
      description: message,
    })
}
const handleServerError = (data) => {
  if(data.class){
    if(data.class.indexOf("Exception")<0){
        return false
    }
  }
  if (data.message) {
    notification.error({
      message: data.message,
      description: data.message,
    })
    
  }
  if (data.messageList[0]) {
    // console.error('error ', data.messageList[0].sourcePosition)
    notification.error({
      message: data.messageList[0].sourcePosition,
      description: data.messageList[0].body,
    })
  }
  return true
}

const {

  namespace: '_loginHistory',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
        const { pathname } = location
        if (!pathname.startsWith('/loginHistory')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp('/loginHistory/:id/dashboard').exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const editDetailMatch = pathToRegexp('/loginHistory/:id/editDetail').exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const viewDetailMatch = pathToRegexp('/loginHistory/:id/viewDetail').exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        
        const match = pathToRegexp('/loginHistory/:id/list/:listName/:listDisplayName').exec(pathname)
        if (match) {
          const id = match[1]
          const displayName = match[3]
          dispatch({ type: 'view', payload: { id,pathname,displayName } })
        }
        const othermatch = pathToRegexp('/loginHistory/:id/:subpage').exec(pathname)
        if (othermatch) {
          const id = othermatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        
        
      })
    },
  },
  effects: {
    *view({ payload }, { call, put }) { 
      const {LoginHistoryService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(LoginHistoryService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      const link = payload.pathname
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      
      
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {LoginHistoryService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(LoginHistoryService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
    
    *doJob({ payload }, { call, put }) { 
      const {LoginHistoryService} = GlobalComponents;
      //yield put({ type: 'showLoading', payload })      
      const {serviceNameToCall, id, parameters} = payload;
      if(!serviceNameToCall){
      	handleClientError("没有提供后台服务的名字")
      	return;
      }
      if(!LoginHistoryService[serviceNameToCall]){
      	handleClientError("找不到后台服务: "+serviceNameToCall)
      	return;
      }
      
      const data = yield call(LoginHistoryService[serviceNameToCall], id, parameters)
      if(handleServerError(data)){
      	return
      }
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/loginHistory/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/loginHistory/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/loginHistory/${id}/list/${type}List/${listName}`))
    },

  },
  
  reducers: {
    updateState(state, action) {
      const payload = { ...action.payload, loading: false }
      return { ...payload }
    },
    showLoading(state, action) {
      // const loading=true
      const payload = { ...action.payload, loading: true }
      return { ...payload }
    },
  },
}

*/
>>>>>>> 348f929f40a850bd475e4c69daca9a25322a77b7
