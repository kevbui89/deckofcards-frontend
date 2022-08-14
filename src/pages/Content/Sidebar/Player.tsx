import React from 'react';
import api from '../../../services/api';
import { AiOutlineClose } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import PlayerList from './PlayerList';
import { GiCardDraw } from "react-icons/gi";

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
                <Link onClick={() => {
            deletePlayer(props.id);
            PlayerList(); 
          }} to="/player">
            <AiOutlineClose />
          </Link>&nbsp;&nbsp;
            </td>
            <td className='player-name'>
                {props.name}&nbsp;
            </td>
            <td className='player-points'>
                Points: {props.points}
            </td>
            <td className='player-game-id'>
                Game: {props.game_id}
                <Link onClick={() => {
                    console.log("Card dealt", dealCard(props.id, props.game_id));
                    dealCard(props.id, props.game_id);
                    PlayerList(); 
                }} to={{}}>
            <GiCardDraw />
          </Link>&nbsp;&nbsp;
            </td>
        </tr>
    );
}

async function deletePlayer(id: number) {
    console.log(id);
    // BUG
    // For some reason, when I delete a player, it deletes all players and the game
    const response = await api.delete('player/'+ id);
}

async function dealCard(id: number, pId: number) {
    console.log(id);
    return api.get("game/" + id + "/deal/" + pId);
}

export default Player;