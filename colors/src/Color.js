import { useParams, useHistory, Link } from "react-router-dom";

const Color = ({colors}) => {
    const { color } = useParams();
    const hex = colors[color]
    const history = useHistory();

    if(!hex) {
        console.log( "TTTT");
        history.push("/colors")
        // If you use redirect, don't forget to return it
        // return <Redirect to="/colors"/>
    }
    return (
        <div style={{ backgroundColor: hex }}>
            <h1>This is {color}.</h1>
            <p><Link to="/colors">Go Back</Link></p>
        </div>
    )
}

export default Color;