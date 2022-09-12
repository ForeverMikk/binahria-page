import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Conocenos from "../Conocenos/Conocenos"
import Home from "../Home/Home"
import Tecnologias from "./../Tecnologias/Tecnologias"
import Catalogo from "./../Catalogo/Catalogo"
import Dashboard from "./../Dashboard/Dashboard"
import ProductView from '../Catalogo/ProductView/ProductView';

class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tecnologias" component={Tecnologias} />
                <Route path="/conocenos" component={Conocenos} />
                <Route path="/catalogo" component={Catalogo} />
                <Route path="/product" component={ProductView} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        )
    }
}

export default Router