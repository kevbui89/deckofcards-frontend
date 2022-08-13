import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

interface PlayerProps {
    id: number;
    name: string;
    points: number;
    game_id: number;
}

const Player: React.FC<PlayerProps> = (props) => {
    return (
        <tr className='player'>
            <td className='player-id'>
                {props.id}: &nbsp;
            </td>
            <td className='player-name'>
                {props.name}&nbsp;
            </td>
            <td className='player-points'>
                {props.points}
            </td>
            <td className='player-game-id'>
                {props.game_id}
            </td>
        </tr>
    );
}

export default Player;