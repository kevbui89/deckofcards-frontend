import { isPropertySignature } from 'typescript';
import GameList from './GameList';
import Player from './Player';
import PlayerList from './PlayerList';

const Sidebar = () => {
//const queryParams = new URLSearchParams("/game/id");

    return (
        <div className="sidebar">
            <GameList />
            <PlayerList />
        </div>
    )
}

export default Sidebar;