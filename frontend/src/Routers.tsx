import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routers = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                   <Home/> 
                </Route>
            </Switch>
            <Switch>
                <Route path="/dashboard" exact>
                    <Dashboard/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


export default Routers;