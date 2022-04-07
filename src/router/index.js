import React from 'react'
//router
import { Switch,Route } from 'react-router'
//layoutpages
import Index from '../views/dashboard/auth/sign-in'
import Default from '../layouts/dashboard/default'
//auth
import Simple from '../layouts/dashboard/simple'

const IndexRouters = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route  path="/dashboard" component={Default}></Route>
                <Route  path="/auth" component={Simple}></Route>
                <Route  path="/errors" component={Simple}></Route>
            </Switch>
        </>
    )
}

export default IndexRouters
