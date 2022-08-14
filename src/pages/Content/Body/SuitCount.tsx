import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { isPropertySignature } from 'typescript';
import { getEnvironmentData } from 'worker_threads';
import api from '../../../services/api';
import axios from "axios";

const SuitCount = () => {
    const {gameId} =  useParams();
    const gameIdNum = parseInt(gameId || '1');

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const handleApiResponse = (response: any) => {
        console.log("Response", response.data);
        setPosts(response.data.posts);
        setIsLoading(false);
      };

      const handleError = (error: any) => {
        setIsLoading(false);
        alert("Something went wrong");
      };

      const getData = () =>
        api.get("game/" + gameIdNum + "/suitcount").then(handleApiResponse).catch(handleError);

    const content = isLoading ? (
    <div>Loading...</div>) 
    : (
        // posts.map((post) => (
        //     <div key={post.id}>
        //         {post.suit} {post.count} 
        //     </div>
        //   ))
        <div></div>
        );
      
        return <div>{content}</div>;
}

export default SuitCount;


