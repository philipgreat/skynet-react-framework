
import { routerRedux } from 'dva/router'
import key from 'keymaster'

import LauncherService from './Launcher.service'
import GlobalComponents from '../custcomponents'
import {message} from 'antd'

import SystemConfig  from '../axios/config'
const apps = {


  'com.terapico.cis.carinspectionplatform.CarInspectionPlatform': {name:'carInspectionPlatform'},
  'com.terapico.cis.identitycard.IdentityCard': {name:'identityCard'},
  'com.terapico.cis.vehiclepermit.VehiclePermit': {name:'vehiclePermit'},
  'com.terapico.cis.province.Province': {name:'province'},
  'com.terapico.cis.city.City': {name:'city'},
  'com.terapico.cis.availableproduct.AvailableProduct': {name:'availableProduct'},
  'com.terapico.cis.availablevehicletype.AvailableVehicleType': {name:'availableVehicleType'},
  'com.terapico.cis.availablevehicleusecharacter.AvailableVehicleUseCharacter': {name:'availableVehicleUseCharacter'},
  'com.terapico.cis.contract.Contract': {name:'contract'},
  'com.terapico.cis.serviceprice.ServicePrice': {name:'servicePrice'},
  'com.terapico.cis.availableservice.AvailableService': {name:'availableService'},
  'com.terapico.cis.productprice.ProductPrice': {name:'productPrice'},
  'com.terapico.cis.availableinsurance.AvailableInsurance': {name:'availableInsurance'},
  'com.terapico.cis.vehiclerepairingallowance.VehicleRepairingAllowance': {name:'vehicleRepairingAllowance'},
  'com.terapico.cis.availablehandoveritem.AvailableHandOverItem': {name:'availableHandOverItem'},
  'com.terapico.cis.customer.Customer': {name:'customer'},
  'com.terapico.cis.vehicleservicecompany.VehicleServiceCompany': {name:'vehicleServiceCompany'},
  'com.terapico.cis.servicecompanyauthenticationinfo.ServiceCompanyAuthenticationInfo': {name:'serviceCompanyAuthenticationInfo'},
  'com.terapico.cis.vehicleinspectionplatenumberpattern.VehicleInspectionPlateNumberPattern': {name:'vehicleInspectionPlateNumberPattern'},
  'com.terapico.cis.fileinspectionplatenumberpattern.FileInspectionPlateNumberPattern': {name:'fileInspectionPlateNumberPattern'},
  'com.terapico.cis.vehicleservicecompanybusinessscope.VehicleServiceCompanyBusinessScope': {name:'vehicleServiceCompanyBusinessScope'},
  'com.terapico.cis.companyqrcodepromotionrecord.CompanyQrcodePromotionRecord': {name:'companyQrcodePromotionRecord'},
  'com.terapico.cis.vehicleservicecompanydispatcher.VehicleServiceCompanyDispatcher': {name:'vehicleServiceCompanyDispatcher'},
  'com.terapico.cis.companydiscount.CompanyDiscount': {name:'companyDiscount'},
  'com.terapico.cis.vehicleservicecompanyemployee.VehicleServiceCompanyEmployee': {name:'vehicleServiceCompanyEmployee'},
  'com.terapico.cis.serviceorderfilter.ServiceOrderFilter': {name:'serviceOrderFilter'},
  'com.terapico.cis.companyemployeequalification.CompanyEmployeeQualification': {name:'companyEmployeeQualification'},
  'com.terapico.cis.companyemployeeserving.CompanyEmployeeServing': {name:'companyEmployeeServing'},
  'com.terapico.cis.companyemployeetermination.CompanyEmployeeTermination': {name:'companyEmployeeTermination'},
  'com.terapico.cis.employeedrivinglicense.EmployeeDrivingLicense': {name:'employeeDrivingLicense'},
  'com.terapico.cis.inspectionstation.InspectionStation': {name:'inspectionStation'},
  'com.terapico.cis.vehicleinfo.VehicleInfo': {name:'vehicleInfo'},
  'com.terapico.cis.vehicleinspectionorder.VehicleInspectionOrder': {name:'vehicleInspectionOrder'},
  'com.terapico.cis.vehicleinspectioninsuranceorder.VehicleInspectionInsuranceOrder': {name:'vehicleInspectionInsuranceOrder'},
  'com.terapico.cis.vehicleinspectionordercharge.VehicleInspectionOrderCharge': {name:'vehicleInspectionOrderCharge'},
  'com.terapico.cis.vehicleinspectionorderservicelog.VehicleInspectionOrderServiceLog': {name:'vehicleInspectionOrderServiceLog'},
  'com.terapico.cis.vehicleinspectionorderpayment.VehicleInspectionOrderPayment': {name:'vehicleInspectionOrderPayment'},
  'com.terapico.cis.handoverchecklistitem.HandOverChecklistItem': {name:'handOverChecklistItem'},
  'com.terapico.cis.servicevehiclemovementc2m.ServiceVehicleMovementC2m': {name:'serviceVehicleMovementC2m'},
  'com.terapico.cis.servicevehiclemovementm2m.ServiceVehicleMovementM2m': {name:'serviceVehicleMovementM2m'},
  'com.terapico.cis.servicevehiclemovementm2c.ServiceVehicleMovementM2c': {name:'serviceVehicleMovementM2c'},
  'com.terapico.cis.servicefilemovementc2m.ServiceFileMovementC2m': {name:'serviceFileMovementC2m'},
  'com.terapico.cis.servicefilemovementm2m.ServiceFileMovementM2m': {name:'serviceFileMovementM2m'},
  'com.terapico.cis.servicefilemovementm2c.ServiceFileMovementM2c': {name:'serviceFileMovementM2c'},
  'com.terapico.cis.handoverchecklistresult.HandOverChecklistResult': {name:'handOverChecklistResult'},
  'com.terapico.cis.serviceinsuranceforinspection.ServiceInsuranceForInspection': {name:'serviceInsuranceForInspection'},
  'com.terapico.cis.servicevehicleinspection.ServiceVehicleInspection': {name:'serviceVehicleInspection'},
  'com.terapico.cis.servicefileinspection.ServiceFileInspection': {name:'serviceFileInspection'},
  'com.terapico.cis.servicevehiclerepairing.ServiceVehicleRepairing': {name:'serviceVehicleRepairing'},
  'com.terapico.cis.repairingallowanceitem.RepairingAllowanceItem': {name:'repairingAllowanceItem'},
  'com.terapico.cis.vehiclerepairingpayment.VehicleRepairingPayment': {name:'vehicleRepairingPayment'},
  'com.terapico.cis.availablereviewitem.AvailableReviewItem': {name:'availableReviewItem'},
  'com.terapico.cis.orderreviewresult.OrderReviewResult': {name:'orderReviewResult'},
  'com.terapico.cis.availableratingitem.AvailableRatingItem': {name:'availableRatingItem'},
  'com.terapico.cis.orderratingresult.OrderRatingResult': {name:'orderRatingResult'},
  'com.terapico.cis.preorderpromotion.PreorderPromotion': {name:'preorderPromotion'},
  'com.terapico.cis.orderdiscountcoupon.OrderDiscountCoupon': {name:'orderDiscountCoupon'},
  'com.terapico.cis.vehicleinspectionordercoupon.VehicleInspectionOrderCoupon': {name:'vehicleInspectionOrderCoupon'},
  'com.terapico.cis.account.Account': {name:'account'},
  'com.terapico.cis.servicecompanyaccount.ServiceCompanyAccount': {name:'serviceCompanyAccount'},
  'com.terapico.cis.repairingcompanyaccount.RepairingCompanyAccount': {name:'repairingCompanyAccount'},
  'com.terapico.cis.insuranceserviceaccount.InsuranceServiceAccount': {name:'insuranceServiceAccount'},
  'com.terapico.cis.mainorderaccount.MainOrderAccount': {name:'mainOrderAccount'},
  'com.terapico.cis.inspectionstationaccount.InspectionStationAccount': {name:'inspectionStationAccount'},
  'com.terapico.cis.userdomain.UserDomain': {name:'userDomain'},
  'com.terapico.cis.secuser.SecUser': {name:'secUser'},
  'com.terapico.cis.secuserblocking.SecUserBlocking': {name:'secUserBlocking'},
  'com.terapico.cis.userapp.UserApp': {name:'userApp'},
  'com.terapico.cis.objectaccess.ObjectAccess': {name:'objectAccess'},
  'com.terapico.cis.loginhistory.LoginHistory': {name:'loginHistory'},
  'com.terapico.cis.genericform.GenericForm': {name:'genericForm'},
  'com.terapico.cis.formmessage.FormMessage': {name:'formMessage'},
  'com.terapico.cis.formfieldmessage.FormFieldMessage': {name:'formFieldMessage'},
  'com.terapico.cis.formfield.FormField': {name:'formField'},
  'com.terapico.cis.formaction.FormAction': {name:'formAction'},

}

// const rootElement = document.getElementById("root")

// eslint-disable-next-line no-unused-vars
const presentApp = (clazz, data) => {
  // console.log(data)
}

// const lowercaseFirst = (stringExpr) => {
//   if(typeof(stringExpr)!="string"){
//       throw "parameter stringExpr is not a string"
//   }
//   // let stringExpr=""
//   if(stringExpr.length<=0){
//       return ""
//   }
//   if(stringExpr.length==1){
//       return stringExpr.substring(0,1)
//   }
//   return stringExpr.substring(0,1).toLowerCase()+stringExpr.substring(1)
// }

const calcLocationPath = (clazz,id,subLocation) => {

  const location = apps[clazz]
  if(!location){
    return '/home'
  }
  const {name} = location;
  if (name) {
    return `${name}/${id}/${subLocation}`
  }
  return '/home'
}


const calcMenuData=(clazz) => {
  const location = apps[clazz]
  const {name} = location;
  const { menuDataOf } = GlobalComponents
  return menuDataOf(name)
}

// console.log("element", )

let currentLocation = ''

export default {

  namespace: 'launcher',

  state: { loggedIn: false, name: 'Philip', systemName: SystemConfig.SYSTEM_LOCAL_NAME },


  subscriptions: {
    keyboard({ dispatch }) {
      key('escape', () => {
        if (currentLocation === '/home') {
          return
        }

        const newlocation = { pathname: '/home' }

        dispatch(routerRedux.push(newlocation))
      })
    },
    setup({ history }) {
      history.listen((location) => {
        currentLocation = location.pathname
        const { pathname } = location
        // const match = pathToRegexp('/communityApp/:tail').exec(path)
        if (!pathname === ('/') || !pathname.startsWith('/home')) {
          return
          // dispatch action with userId
        }
        console.log('launcher ==============>', location)
        // updateState
        // console.log(1, loggedIn)
        // dispatch({type:"showlogin"})
      })
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const data = yield call(LauncherService.login, payload.username, payload.password)
      console.log('data.........................', data)
      if (!data) {
        return
      }
      if (!data.class) {
        return
      }
      if (data.class.indexOf('LoginForm') > 0) {
        message.warn(data.errorMessage);
        yield put({ type: 'showlogin', payload: { data } })
        return
      }
      if (data.class.indexOf('SecUser') > 0) {
        yield put({ type: 'showhome', payload: { data } })
        return
      }
      const locationPath = calcLocationPath(data.class, data.id, 'dashboard')
      const location = { pathname: `/${locationPath}`, state: data }
      yield put(routerRedux.push(location))
    },
    *gotoApp({ payload }, { call, put }) {
      // console.log("gotoApp has been called", payload)
      const data = yield call(LauncherService.gotoApp, payload.app.id)
      const locationPath = calcLocationPath(data.class, data.id, 'dashboard')
      const location = { pathname: `/${locationPath}`, state: data }
      const targetApp=payload.app;
      console.log('location', location)
      const menuData = calcMenuData(data.class);


      yield put({ type: 'breadcrumb/selectApp', payload: { targetApp,location, menuData} })
      
      yield put(routerRedux.push(location))
      // yield put({type:"showApp",payload:{data}})
    },
    *signOut({ payload }, { call, put }) {
      // console.log("gotoApp has been called", payload)
      const data = yield call(LauncherService.logout)
      yield put({ type: 'logout', payload: { data } })
      //yield put(routerRedux.push(location))
      // yield put({type:"showApp",payload:{data}})
    },
  },
  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload }
    },
    showlogin(state, action) {
      if(!action.payload){
        return { ...state, loggedIn: false}
      }
      const { data } = action.payload
      return { ...state, loggedIn: false, data}
    },
    showhome(state, action) {
      const { data } = action.payload
      return { ...state, loggedIn: true, data }
    },
    logout(state, action) {
      return { ...state, loggedIn: false }
    },
    showApp(state, action) {
      const { data } = action.payload
      const clazz = data.class

      presentApp(clazz, data)
      return { ...state, loggedIn: true, clazz, data }
    },
  },


}















