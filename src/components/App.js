import React from 'react'
import {BrowserRouter,Link,Route, Router} from 'react-router-dom'
import StreamList from './Streams/StreamList'
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import Header from './Layout/Header';
import history from '../history';

function App() {
  return (
    <div className="App">
      <Router history={history} >
      <Header />
       <Route path='/' exact component={StreamList} />
       <Route path='/stream/create' exact component={StreamCreate} />
       <Route path='/stream/edit/:id' exact component={StreamEdit} />
       <Route path='/stream/delete/:id' exact component={StreamDelete} />
      </Router>
      
    </div>
  );
}

export default App;
