/**
 * Created by gxx on 2017/5/14.
 */

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import {Header, Sider, Login,Error} from './views';
import {Table, Transfer} from './components';
import {Layout} from 'antd';


const App = ({routes}) => (
    <Layout className="layout">
        <Header/>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
    </Layout>
)

const Contont = ({routes}) => (
    <div className="layoutMiddle">
        <div className="sider">
            <Sider/>
        </div>
        <div className="content">
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </div>
)


const RouteWithSubRoutes = (route) => (
    <div>
        {
            route.redirect?<Redirect to={route.redirect}/>:
            <Route path={route.path} render={props => (
                <route.component {...props} routes={route.routes}/>
            )}/>
        }
    </div>
)

const RouteConfig = () => (
    <Router>
        <div>
            {route.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)


const route = [
    {
        path:"/",
        redirect:'/main'
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/main',
        component: App,
        routes: [
            {
                path: '/main/slide',
                component: Contont,
                routes: [
                    {
                        path: '/main/slide/table',
                        component: Table
                    },
                    {
                        path: '/main/slide/transfer',
                        component: Transfer
                    }
                ]
            }]
    },
    {
        path:'404',
        component: Error,
    }
]

export {
    RouteConfig,
}