import Body from './Body/Body';
import './Content.css';
import Sidebar from './Sidebar/Sidebar';

const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <Body />
        </div>
    )
}

export default Content;