import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoaded, isEmpty} from 'react-redux-firebase'
import { useSelector } from 'react-redux'


const PrivateRoute = ({ children, ...remainingProps }) => {
    const auth = useSelector(state => state.firebase.auth)
    console.log('route', auth)
    console.log('route children', children)
    
    return (
        <Route
        {...remainingProps}
        render = {({ location }) =>
            isLoaded(auth) && !isEmpty(auth) || (location !== '/') ? ( 
                    children
                ) : (
                    <Redirect 
                        to = {{
                            pathname: "/",
                            state: { from: location },
                        }} 
                    />
                    )
            }
        />
    )
}


export default PrivateRoute;