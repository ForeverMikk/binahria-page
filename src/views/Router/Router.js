import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Conocenos from "../Conocenos/Conocenos"
import Home from "../Home/Home"
import Tecnologias from "./../Tecnologias/Tecnologias"
import Catalogo from "./../Catalogo/Catalogo"
// import Dashboard from "./../Dashboard/Dashboard"
import ProductView from '../ProductView/ProductView';
import Contact from '../Contact/Contact'

class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tecnologias" component={Tecnologias} />
                <Route path="/conocenos" component={Conocenos} />
                <Route path="/catalogo" component={Catalogo} />
                <Route path="/contact" component={Contact} />
                <Route path="/product" component={ProductView} />
                <Route path="/product:type" component={ProductView} />
                {/* <Route path="/product:type:id" component={ProductView} /> */}
                {/* <Route path="/product:id" component={ProductView} /> */}
            </Switch>
        )
    }
}

export default Router