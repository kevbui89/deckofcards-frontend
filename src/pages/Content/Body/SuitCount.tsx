import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { isConstructorDeclaration, isPropertySignature } from 'typescript';
import { getEnvironmentData } from 'worker_threads';
import api from '../../../services/api';
import axios from "axios";
import Suit from './Suit';

const SuitCount = () => {

    const {gameId} =  useParams();
    const gameIdNum = parseInt(gameId || '1');

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("game/" + gameIdNum + "/suitcount/CLUBS").then(response => {
            setPosts(response.data);
        })
        
    }, []);

    const content = (
        
        <div>
            <h2>Suit Count</h2>
            <Suit suit = {"CLUBS"}/>
            <Suit suit = {"SPADES"}/> 
            <Suit suit = {"HEARTS"}/> 
            <Suit suit = {"DIAMONDS"}/> 
        </div>
        );
        
        {console.log("test:" + posts)}
        return <div>{content}</div>;
}

export default SuitCount;


