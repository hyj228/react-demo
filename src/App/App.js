
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import routeMenu from '../router/index';
import RouteWithSubRoutes from '../router/route'
import {BrowserRouter as Router, Switch } from 'react-router-dom';
class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    // color: props.initialColor
  };
}
  static propTypes = {
    dispatch: PropTypes.func,
  }
  componentDidMount(){
    console.log(this.props)
    this.props.dispatch({ type: 'ROUTERMENU',data:routeMenu  })
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path={route.path} component={el.component}></Route> */}
          {routeMenu.map((el,i)=>{
            // 
            return  <RouteWithSubRoutes key={i} {...el}/>
            // if(el.path=='/login'){
            //   console.log('saasa')
            //   return <Route key={i} path={el.path} component={el.component}></Route>
            // }else{
              // return 
            // }
          })}
        </Switch>
      </Router>
    )
  }
}
const mapStateToProps = (state,ownProps) => {
  console.log(state.selectedSubreddit,'////')
  const { layoutMenu } = state
  return {
    layoutMenu
  }
}

export default connect(mapStateToProps)(App)

