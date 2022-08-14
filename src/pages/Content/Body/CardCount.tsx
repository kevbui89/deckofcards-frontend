import React, { useEffect, useState } from 'react';
import { isPropertySignature } from 'typescript';
import { getEnvironmentData } from 'worker_threads';
import api from '../../../services/api';
import axios from "axios";
import { useParams } from "react-router-dom";

const CardCount  = () => {
    const {gameId} =  useParams();
    const gameIdNum = parseInt(gameId || '1');

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await api.get('game/' + gameIdNum + "/cardcount").then((response: any) => {
            setIsLoading(false);
            console.log("Response:", response.data);
            setPosts(response.data.posts);
        }).catch(error => {
            setIsLoading(false);
            console.log(error)
        });
    }

    const content = isLoading ? <div>Loading...</div> : <div><pre>{JSON.stringify(posts, undefined, 2)}</pre></div>

    return (
        <div>
            <h2>Card Count</h2>
            {content}
        </div>
    );
}

export default CardCount;