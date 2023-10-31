import { useParams } from "react-router-dom";
import Dog from "./Dog";

const DogDetails = ({dogs}) => {
    const { name } = useParams();

    if (name) {
        const dog = dogs.find(d => d.name.toLowerCase() === name)
        return <Dog dog={dog} />
    }
    return null;
}

export default DogDetails;  