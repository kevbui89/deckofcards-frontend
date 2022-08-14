import React from 'react';
import api from '../../../services/api';
import { Link, useParams } from 'react-router-dom';
import GameList from './GameList';
import { AiOutlineClose } from "react-icons/ai";

interface GameProps {
    id: number;
    name: string;
}

const Game: React.FC<GameProps> = (props) => {
    return (
        <tr className='game'>
            <td className='game-id'>
                {props.id}: &nbsp;
                <Link onClick={() => {
            deleteGame(props.id);
            GameList(); 
          }} to="/player">
            <AiOutlineClose />
          </Link>
            </td>
            <td className='game-name'>
                {props.name}&nbsp;
            </td>
        </tr>
    );
}

async function deleteGame(id: number) {
    console.log(id);
    // BUG
    // For some reason, when I delete a player, it deletes all players and the game
    const res = await api.delete('game/'+ id);
}

export default Game;