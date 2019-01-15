import React from "react"
import PropTypes from "prop-types"

//takes a component, put data of state to it, return a component
// subscribe and update if data changes

const connect = (mapStateToProps=state=>state, mapDispatchToProps={})=>(WrapperComponent)=>{
    return class ConnectComponent extends React.Component{
        constructor(props, context){
            super(props, context)
            this.state={
                props:{}
            }
        }

        componentDidMount(){
            this.update()
        }

        update(){
            //map state to props
            const {store} = this.context
            const {props} = this.state
            const stateProps = mapStateToProps(store.getState())
            this.setState({
                ...stateProps,
                ...props
            })
            //map dispatch to props
        }
        render(){
            return null
        }
        // need to setup babel to transpile jsx
        // render(){
        //     return <WrapperComponent>{...this.state.props}</WrapperComponent>
        // }

    }
}
ConnectComponent.childContextTypes = {
    store: PropTypes.object
}


export default connect;