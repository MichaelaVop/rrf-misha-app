import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import styled from 'styled-components'

import '../../App.css';


const SignInContainer = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image;
`



const SignIn = () => {
  const firebase = useFirebase()
  const history = useHistory()

    const signInWithGoogle = () => {
        firebase
        .login({
            provider: "google",
            type: "popup",
        })
        .then(() => {
            history.push("/todos")
        })
    }
    
    return (
        <SignInContainer>   
          <h1 className="text-align-center pad-15">Your favourite ToDo App</h1>  
          <h2 className="text-align-center pad-15">Come on in</h2>
          <Button variant="contained" size="medium" color="primary"
            onClick={(event) => {
              event.preventDefault();
              signInWithGoogle();
            }}
          >
            Sign in
          </Button>
        </SignInContainer>
      )
    }

export default SignIn