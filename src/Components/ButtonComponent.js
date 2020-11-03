import React from 'react'
import {fetchPosts} from '../actions/postAction'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const ButtonComponent = (props) => {
    return (
      <div>
        <button onClick={()=>props.fetchPosts()}>click me!</button>
      </div>
    )
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts: fetchPosts},dispatch)
}

export default connect(null, matchDispatchToProps)(ButtonComponent)
