import { Link } from "react-router-dom";

const DogList = ({dogs}) => {

    return (
        <div className="DogList">
            <h1>Look at all these dogs!</h1>
            {dogs.map(({src, name}) => (
                <div key={name}>
                    <img src={src} alt={name} style={{ width: '200px' }}/>
                    <h2>Take a look at <Link to={`/dogs/${name.toLowerCase()}`}>{name}</Link></h2>
                </div>
            ))}
        </div>
    )
}

export default DogList;