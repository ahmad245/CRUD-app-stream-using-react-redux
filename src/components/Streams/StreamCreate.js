import React from 'react';

import StreamForm from './StreamForm'

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import {createStream} from '../../actions/index';

const StreamCreate=(props)=>{

   
    return (
      <div>
          <StreamForm onSubmit={props.createStream} />
      </div>
    )
}



export default  connect(null,{createStream})(StreamCreate)