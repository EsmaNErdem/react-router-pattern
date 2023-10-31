import { Route, Switch, Redirect } from "react-router-dom";


import DogList from "./DogList";
import DogDetails from "./DogDetails";

const Routes = ({dogs}) => {
    return (
        <div>
             <Switch>
                <Route path="/dogs" exact>
                    <DogList dogs={dogs} />
                </Route>
                <Route path="/dogs/:name" >
                    <DogDetails dogs={dogs}/>
                </Route>
                <Redirect to="/dogs" />
            </Switch>
        </div>
    )
}

export default Routes;