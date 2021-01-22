import React,{useEffect} from 'react';
import { connect,useDispatch } from 'react-redux';
import {fetchStreams} from '../../actions';
import { Link } from 'react-router-dom';

const StreamList=(props)=>{
    const dispatch = useDispatch();
    useEffect(() => {
            props.fetchStreams()
    },[dispatch]);

    const renderCreate=()=>{
        if(props.isSignedIn){
            return (
                <div style={{textAlign:'right'}}>
                    <Link to="stream/create"  className="ui button primary">
                      Create Stream    
                     </Link>
                </div>
            )
        }
    }

    const renderBtn=(stream)=>{
        console.log(stream);
        
        if(stream.userId === props.currentUserId){
            return(
                <div className="right floated content">
                    <Link to={`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
        
    }
   
    const renderList=()=>{
        return props.streamList.map((stream)=>{
            return (
                <div className="item" key={stream.id}>
                  <i className="large middle aligned icon camera" />
                  <div className="content">
                      {stream.title}
                      <div className="description">{stream.description}</div>
                      {renderBtn(stream)}
                  </div>

                </div>
            )
        })
    }
    
    return (
        <div className="">
            <h2>Streams</h2>
            <div className="ui celled list">
                {renderList()}
            </div>
            {renderCreate()}

        </div>
    )
}

const mapStateToProps=state=>{
    return {
        streamList:Object.values(state.streams),
        currentUserId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    }
}
export default connect(mapStateToProps,{fetchStreams})(StreamList) 