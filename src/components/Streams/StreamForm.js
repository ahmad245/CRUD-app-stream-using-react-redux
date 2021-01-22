import React from 'react';

import { Field, reduxForm } from 'redux-form'


const StreamForm=(props)=>{

    const renderError=({touched,error})=>{
        if(touched && error){
           
            
            return (
                <div className="ui error message">
                   <div className="header">{error}</div>
                </div>
            )
        }
    }
    const renderInput=({input,label,meta})=>{
        const className=`field ${meta.touched && meta.error ? 'error' :''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input  {...input} />
             
                {renderError(meta)}
            </div>
        )
    }
    const onSubmit=(formValues)=>{
       
        props.onSubmit(formValues)
        
    }
    return (
       <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
           <Field name="title" label="Title" component={renderInput} />
           <Field name="description" label="Description" component={renderInput} />
           <button className="ui button primary" type="submit">Submit</button>

       </form>
    )
}

const validation=(formValues)=>{
    const errors={}
    if(!formValues.title) errors.title="you must to enter title";
    if(!formValues.description) errors.description="you must to enter description";
    return errors;
}

const formReducer=reduxForm({form:'streamForm',validate:validation})(StreamForm);
export default  formReducer;