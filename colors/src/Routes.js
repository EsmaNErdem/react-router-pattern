import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

import Colors from "./Colors";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

const Routes = () => {
    let initialvalue
    if(localStorage.getItem("colors")) {
        try {
            initialvalue =  JSON.parse(localStorage.getItem("colors"))
        } catch (e) {
            console.log(e)
        }
    }
    const INITIAL_STATE =  initialvalue ||  {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };

    const [colors, setColors] = useState(INITIAL_STATE)

    useEffect(() =>  window.localStorage.setItem("colors", JSON.stringify(colors)), [colors])

    const addColor = (newColor) =>{
        setColors(c => ({...c, ...newColor}))
    }

    return (
        <Switch>
            <Route path="/colors" exact>
                <Colors colors={colors}/>
            </Route>
            <Route path="/colors/new" exact>
                <NewColorForm addColor={addColor}/>
            </Route>
            <Route path="/colors/:color" exact>
                <Color colors={colors}/>
            </Route>
            <Redirect to="/colors" />
        </Switch>
    )
}

export default Routes;