import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSubreddit} from '../../../redux/actions.js'
import IconPageDetail from './detail'
class IconPage extends Component {
  handClickAdd=()=>{
    const { selectedSubreddit } =this.props
    this.props.selectSubreddit(selectedSubreddit+1)
        // this.props.dispatch({type:'SELECT_SUBREDDIT',subreddit:'aasassasass'})
        console.log(this.props,'////,..,.')
  }
  render() {
    const { selectedSubreddit } = this.props
    return (
      <div>
        <button onClick={this.handClickAdd}>增加++</button>
        <p>{selectedSubreddit}</p>
        <IconPageDetail></IconPageDetail>
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


export default connect(mapStateToProps,{selectSubreddit})(IconPage);

