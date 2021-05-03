import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import AddTodo from '../todos/AddTodo'
import '../../App.css';
import styled from 'styled-components'



const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    aling-items: center;
    justify-content: space-between;
    background-color: #3E2723;
    color: white;
    padding: 15px 30px;
`
const HeaderLinks = styled.a`
    text-align: center;
    align-self:center;
    color: white;
    font-size: 1.5em;
    text-decoration: none;
`
 

const Header = () => {
    const { displayName, uid } = useSelector((state) => state.firebase.auth)

    useFirestoreConnect({
        collection: `users/${uid}/todos`,
        storeAs: 'todos'
    })

    return(
        <div>
        <HeaderContainer>
            <h2>Signed in as: <span className="header-span">{displayName}</span></h2>
            <HeaderLinks href='todos'>Your todos</HeaderLinks>
            {/* <HeaderLinks href='trash'>Your trash</HeaderLinks> */}
        </HeaderContainer>

        <AddTodo />

        </div>
    )
}

export default Header