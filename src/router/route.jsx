
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
class RouteWithSubRoutes extends Component {
  render() {
    const route = this.props
    // console.log(this.props,'//////this.props')
    return (
      // <div>122</div>
        <Route path={route.path} render={props => <route.component {...props} routes={route} />}/>
    );
  }
}

export default RouteWithSubRoutes;
