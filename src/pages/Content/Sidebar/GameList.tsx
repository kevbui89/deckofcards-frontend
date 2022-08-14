import '../Content.css';
import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { AiFillPlusCircle } from "react-icons/ai";
import {Link, useParams} from 'react-router-dom';
import Game from './Game';

interface Game {
  id: number;
  name: string;
}

const GameList = () => {
  const[games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api.get('game').then(response => {
      setGames(response.data);
    })
  }, 
  [] 
  );

  return (
    <div>
        <h2>Games</h2>
        <div className="games-sidebar">
            <table>
                <tbody>
                {games.map(game => (
                    <Game key={game.id} id={game.id} name={game.name} />                        
                ))}
                </tbody>
            </table>
            <input type='text' placeholder='Name' className='inputName' id='gameName'/>
            
            <Link to = {{}} onClick={() => {
                const nameInput = document.getElementById('gameName') as HTMLInputElement;
                const nameValue = nameInput?.value || "New Game";

                newGame(nameValue);
                GameList();
                }}>
            <AiFillPlusCircle/>
            </Link>
        </div>
    </div>
);
}

function newGame(name: string) {
  api.post('game/', {name: name}).then(function(error) {
    console.log(error);
  })
}

export default GameList;