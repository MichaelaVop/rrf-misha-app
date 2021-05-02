import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './components/user/PrivateRoute'
import SignIn from './components/user/SignIn'
import Todos from './components/todos/Todos'
import TodosInTrash from './components/todos/TodosInTrash'

import './App.css';
import Header from './components/header/Header'

import styled from 'styled-components'

// const BackgroundImg = styled.div`
//   background-image: url(${props => props.img})
// `

function App() {
  return (
    <div>
      
      <Switch>  
        <PrivateRoute path = "/todos">
          <Header />
          <Todos />
        </PrivateRoute>
        {/* <PrivateRoute path = "/trash">
          <Header />
          <TodosInTrash />
        </PrivateRoute> */}
        <Route path = "/">
        <SignIn />
        </Route>
      </Switch>

    </div>
    
  );
}

export default App;
