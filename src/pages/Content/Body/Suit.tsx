import api from '../../../services/api';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { isPropertySignature } from 'typescript';

interface SuitProps {
    suit: string;
}

const Suit: React.FC<SuitProps> = (props) => {
    const {gameId} =  useParams();
    const gameIdNum = parseInt(gameId || '1');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("game/" + gameIdNum + "/suitcount/" + props.suit).then(response => {
            setPosts(response.data);
        })
        
    }, []);

    return <div>{props.suit} {posts}</div>
}

export default Suit;