import { Link } from "react-router-dom";

const Colors = ({colors}) => {
    return (
        <div className="Colors">
            <h1>Welcome to color factory</h1>
            <p><Link to="/colors/new">Add More Color</Link></p>
            <ul>
                {Object.keys(colors).map(name =>
                    <li key={name}>
                        <Link to={`/colors/${name}`}>{name}</Link>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Colors;