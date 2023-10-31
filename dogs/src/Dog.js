import { Link, Redirect } from "react-router-dom";

const Dog = ({dog}) => {
    if(!dog) return <Redirect to="/dogs"/>
    return (
        <div>
            <h1>Here is {dog.name}</h1>
            <img src={dog.src} alt={dog.name}/>
            <p>Hi! My name is {dog.name} and I am {dog.age} years old. Here is why I am so cure:</p>
            <ul>
                {dog.facts.map((f, i) => <li key={i}>{f}</li>)}
                
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
}

export default Dog;