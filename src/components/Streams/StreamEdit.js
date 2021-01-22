import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect ,useDispatch} from 'react-redux';
import StreamForm from './StreamForm';
import {editStream,fetchStream} from '../../actions/index';
import _ from 'lodash';

const StreamEdit=(props)=>{
   // console.log(props);
    
    const dispatch = useDispatch();

   useEffect(() => {
       props.fetchStream(props.match.params.id)
       
    
   
   }, [dispatch])
    
   console.log(props.stream);
    
    const onSubmit=(formValues)=>{
       props.editStream(props.match.params.id,formValues)
        
    }
  const   renderForm=()=>{
        if(!props.stream) return <div>loading</div>;
        return   <StreamForm onSubmit={onSubmit} initialValues={_.pick(props.stream,'title','description')}/>

    }
    return (
        <div>
         {renderForm()}
        </div>
       
    )
}

const mapStateToProps=(state,ownProps)=>{    
    return {stream:state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps,{editStream,fetchStream})(StreamEdit) 