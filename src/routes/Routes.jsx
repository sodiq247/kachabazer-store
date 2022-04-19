import React from 'react'

import { Route, Switch } from 'react-router-dom'

//import 404 from './pages/404'
import AboutUs from '../pages/AboutUs'
import Account from '../pages/Account'
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import ContactUs from '../pages/ContactUs'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Offers from '../pages/Offers'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Terms from '../pages/Terms'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            {/* <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>*/}
            <Route path='/aboutus' component={AboutUs}/>
            <Route path='/account' component={Account}/>
            <Route path='/cart' component={Cart}/> 
            <Route path='/chectout' component={CheckOut}/> 
            <Route path='/contactus' component={ContactUs}/> 
            <Route path='/faq' component={FAQ}/> 
            <Route path='/offers' component={Offers}/>
            <Route path='/privacypolicy' component={PrivacyPolicy}/>
            <Route path='/terms' component={Terms}/>
             
        
        </Switch>
    )
}

export default Routes
