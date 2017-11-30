import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import NewCake from "../containers/NewCake";
import CakeView from "../containers/CakeView";
import NotFound from '../containers/NotFound';

export default () => 
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-cake" exact component={NewCake} />
        <Route path="/cake/:id" component={CakeView} />
        <Route component={NotFound} />
    </Switch>;
