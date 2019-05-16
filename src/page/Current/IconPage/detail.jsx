import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSubreddit} from '../../../redux/actions.js'
class IconPageDetail extends Component {
  handClickAdd=()=>{
    const { selectedSubreddit } =this.props
    this.props.selectSubreddit(selectedSubreddit-1)
  }
  render() {
    const { selectedSubreddit } = this.props
    return (
      <div>
        <button onClick={this.handClickAdd}>减少--</button>
        <p>{selectedSubreddit}</p>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  console.log(state,'////')
  const { selectedSubreddit } = state
  return {
      selectedSubreddit
  }
}


export default connect(mapStateToProps,{selectSubreddit})(IconPageDetail);

