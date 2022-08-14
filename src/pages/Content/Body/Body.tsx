import { isPropertySignature } from 'typescript';
import CardCount from '../Body/CardCount';
import SuitCount from '../Body/SuitCount';
import Shoe from './Shoe';

const Body = () => {
//const queryParams = new URLSearchParams("/game/id");

    return (
        <div className="body">
            <SuitCount />
            <CardCount />
            <Shoe />
        </div>
    )
}

export default Body;