import TitleHeader from "./TitleHeader.jsx";
import Description from "./Description.jsx";
import Comments from "./Comments.jsx";
import Information from "./Information.jsx";
import Video from "./Video.jsx";
import {useEffect, useState} from "react";

function GamePage() {

    const [gameData, setGameData] = useState(undefined);

    useEffect(() => {
        fetch("http://localhost:3001/game")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setGameData(data)
            });
    }, []);

    if (typeof gameData == "undefined") {
        return (
            <p>Loading..</p>
        )
    }

    return (
        <div className="main-container">
            <div className="header">
                <TitleHeader title={gameData.name}/>
            </div>
            <div className="information-game-container">
                <div className="description-video-container">
                    <Description descprition={gameData.description}/>
                    <Video video={gameData.videoID}/>
                </div>
                <div className="information-container">
                    <Information date={gameData.infos.date} developper={gameData.infos.developper} pegi={gameData.infos.pegi}/>
                </div>
            </div>
            <div className="comments-container">
                <Comments author={gameData.comments.author} content={gameData.comments.content} date={gameData.comments.date}/>
            </div>
        </div>
    )
}
export default GamePage
