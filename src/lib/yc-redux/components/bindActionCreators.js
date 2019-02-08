const bindActionCreator =(creator, dispatch)=>{
	return (...args) => dispatch(creator(...args))
}
const bindActionCreators =(creators,dispatch)=>{
	return Object.keys(creators).reduce((ret,item)=>{
		ret[item] = bindActionCreator(creators[item],dispatch)
		return ret
	},{})
}

export default bindActionCreators