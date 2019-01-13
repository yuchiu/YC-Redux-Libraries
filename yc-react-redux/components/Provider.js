import React from "react"
import PropTypes from "prop-types"


class Provider extends React.Component{
    getChildContext(){
        return { store : this.store }
    }
    constructor(props, context){
        super(props, context)
        this.store = props.store
    }


    render(){
        return this.props.children
    }
}

Provider.propTypes = {
    store: PropTypes.object
}

Provider.childContextTypes = {
    store: PropTypes.object
}

export default Provider