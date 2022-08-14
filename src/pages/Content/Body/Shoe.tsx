import React from "react";
import { Link, useParams } from "react-router-dom";
import api from '../../../services/api';
import { GiCardExchange, GiCardPick } from "react-icons/gi";
import './Body.css';




const Shoe = () => {
    const {gameId} =  useParams();
    const gameIdNum = parseInt(gameId || '1');
    
    return (
        <div className= "shoe">
            <h2>Shoe</h2>
            <div className="shoe-cartcount">

            </div>
            <div className="shoe-suitcount">

            </div>
            <div className="shoe-options">
                <Link style = {{textDecoration: 'none'}} to={{}} onClick={() => {
                    console.log("Deck Shuffled", shuffleDeck(gameIdNum));
                    shuffleDeck(gameIdNum);
                    Shoe();
                }}>
            Shuffle Deck <GiCardExchange/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
            <Link style = {{textDecoration: 'none'}} to={{}} onClick={() => {
                    console.log("Deck Added", addDeck(gameIdNum));
                    addDeck(gameIdNum);
                    Shoe();
                }}>
            Add Deck <GiCardPick/>
            </Link>
            </div>
        </div>
    );
}

async function shuffleDeck(gameId: number) {
    console.log(gameId);
    return api.get("game/" + gameId + "/shuffle");
}

async function addDeck(gameId: number) {
    console.log(gameId);
    return api.get("game/" + gameId + "/adddeck");
}

export default Shoe;