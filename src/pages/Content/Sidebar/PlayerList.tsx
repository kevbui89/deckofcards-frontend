import React from 'react';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import Player from './Player';
import {Link, useParams} from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";

interface PlayerStructure {
    id: number;
    name: string;
    points: number;
    game_id: number;
}

const PlayerList = () => {
    const {gameId, pId} = useParams();
    const gameIdNum = parseInt(gameId || '1');
    const [players, setPlayers] = useState<PlayerStructure[]>([]);

    useEffect(() => {
        getPlayers().then(response => {
            setPlayers(response.data);
            console.log("Player list: ")
            console.log(response.data);
        })
    },
    []
    );

    return (
        <div>
            <h2>Players</h2>
            <div className="players">
                <table>
                    <tbody>
                    {players.map(player => (
                        <Player key={player.id} id={player.id} name={player.name} points={player.points} game_id={gameIdNum} />                        
                    ))}
                    </tbody>
                </table>
                <input type='text' placeholder='Name' className='inputName' id='playerName'/>
                
                <Link to = {{}} onClick={() => {
                    const nameInput = document.getElementById('playerName') as HTMLInputElement;
                    const nameValue = nameInput?.value || "New Player";

                    newPlayer(nameValue, gameIdNum);
                    PlayerList();
                    }
                    }>
                <AiFillPlusCircle/>
                </Link>
            </div>
        </div>
    )

}

async function getPlayers () {
    return api.get('player');
}

function newPlayer(nameValue: string, game_id: number) {
    api.post('player', {
        name: nameValue,
        game_id: game_id,
        points: 0
    }).then(function (error: any) {
        console.log(error);
    })
}

export default PlayerList;