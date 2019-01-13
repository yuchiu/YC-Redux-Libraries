import React from "react"
import PropTypes from "prop-types"


class Provider extends React.Component{
    constructor(props, context){
        super(props, context)
        this.store = props.store
    }

    getChildContext(){
        return { store : this.store }
    }

    render(){
        return this.props.children
    }
}

Provider.propTypes = {
    store: PropTypes.object
}


export default Provider