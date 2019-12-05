
import React from 'react'
import { Link } from 'dva/router'
import { Icon, Divider, Avatar, Card, Col} from 'antd'


import moment from 'moment'
import ImagePreview from '../components/ImagePreview'
import appLocaleName from './Locale.tool'


const defaultRenderTextCell=(value, record)=>{
	const userContext = null
	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
       
        return `${value.substring(0,15)}...(${value.length})${appLocaleName(userContext,"Chars")}`
        
	}
	return value
	
}
// import { Avatar, Icon } from 'antd';
const defaultRenderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const defaultRenderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const defaultRenderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const defaultRenderAvatarCell=(value, record, title)=>{
	return (<Avatar src={value} />)	
}

const defaultRenderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}


const defaultFormatMoney=(amount)=>{
	const options={style: 'decimal',minimumFractionDigits: 2,maximumFractionDigits:2}
    const moneyFormat = new Intl.NumberFormat('en-US',options);
	return moneyFormat.format(amount)
	
}

const defaultRenderMoneyCell=(value, record)=>{
	const userContext = null
	if(!value){
		return appLocaleName(userContext,"Empty")
	}
	if(value == null){
		return appLocaleName(userContext,"Empty")
	}
	return (`${appLocaleName(userContext,"Currency")}${defaultFormatMoney(value)}`)
}

const defaultRenderBooleanCell=(value, record)=>{
	const userContext = null

	return  (value? appLocaleName(userContext,"Yes") : appLocaleName(userContext,"No"))

}

const defaultRenderReferenceCell=(value, record)=>{
	const userContext = null
	return (value ? <span style={{fontWeight:"bold"}} title={`${value.id} - ${value.displayName}`} >{value.displayName}</span> : appLocaleName(userContext,"NotAssigned")) 

}




const buildFunctionTitle=(menuData,searchTerm)=>{


	const result = menuData.subItems.filter(item=>item.name.indexOf(searchTerm)>=0||item.displayName.indexOf(searchTerm)>=0)

	if(!result || result.length===0){
		return null
	}

	return <Col span={4}>{menuData.menuName}功能</Col>

}
const buildFunctionList=(menuData,targetObject,searchTerm)=>{


	const result = menuData.subItems.filter(item=>item.name.indexOf(searchTerm)>=0||item.displayName.indexOf(searchTerm)>=0)

	if(!result || result.length===0){
		return null
	}

	return <Col span={20}>{result.map(item=>(

		<Col span={4}><Link to={`/${menuData.menuFor}/${targetObject.id}/list/${item.name}/${item.displayName}`}>{item.displayName}</Link></Col>

		
	))}</Col>
	
}


const buildCategoryTitle=(item)=>{

	return <Col span={4}> {`${item.displayName}(${item.filteredData.length})`}</Col>

}
const buildCategoryContent=(item)=>{

	let maxLength = 0;
	item.filteredData.forEach(fi => {
		const length = fi.displayName.length;
		if(length> maxLength) {
			maxLength = length;
		}
	});

	// every 2 chars use a span

	
	
	let spanCount = 4
	if(maxLength > 10){
		spanCount = 8
	}
	if(maxLength > 20){
		spanCount = 12
	}

	return <Col span={20}>
		 {item.filteredData.map(fi=>(<Col span={spanCount}><Link to={`/${item.type}/${fi.id}/dashboard`}>{fi.displayName}</Link></Col>))}
		</Col>

}
const defaultSearchLocalData=(menuData, targetObject, searchName)=>{

	console.log("targetObject", targetObject)
	if(!targetObject){
		return null
	}
	const wrappedData=menuData.subItems.map(item=>({...item, data: targetObject[item.name]}))
	const resultData=wrappedData.map(item=>{
		const {data}=item
		if(!data){
			return {...item,filteredData:[]}
		}
		const filteredData = data.filter(innerItem=>innerItem.displayName.indexOf(searchName)>=0)
		return {...item,filteredData}
		
	})
	const filteredResult = resultData.filter(item=>item.filteredData&&item.filteredData.length>0)
	console.log("filteredResult", filteredResult)
	const result = menuData.subItems.filter(item=>item.name.indexOf(searchName)>=0||item.displayName.indexOf(searchTerm)>=0)

	return (<div >{
		result&&result.length>0&&(<Card  key={"__function"}>
			{buildFunctionTitle(menuData,searchName)}{buildFunctionList(menuData,targetObject,searchName)}
			</Card>)
		}
		
		{filteredResult.map(item=>(

			<Card  key={item.displayName}>
				{buildCategoryTitle(item)}{buildCategoryContent(item)}
			</Card>)
		)}
	  </div>)
  
	

}




const BaseTool = {
    defaultRenderReferenceCell,
    defaultRenderBooleanCell,
    defaultRenderMoneyCell,
    defaultFormatMoney,
    defaultRenderDateTimeCell,
    defaultRenderImageCell,
    defaultRenderDateCell,
    defaultRenderIdentifier,
	defaultRenderTextCell,
	defaultRenderAvatarCell,
	defaultSearchLocalData,
   
  };
  
  export default BaseTool;
  