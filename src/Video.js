import React, {useRef, useState} from 'react';
import VideoFooter from './VideoFooter';
import './Video.css';
import VideoSidebar from './VideoSidebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares,
}
) {
    const [playing, setplaying] = useState(false);
     const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setplaying(false);
        }else{
            videoRef.current.play();
            setplaying(true);
        }
       
    }
    return (
        <div className="Video">
            <video className="video_player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}>
            </video>
            <VideoFooter 
             channel= {channel}
             description={description}
             song={song}/>
             <VideoSidebar likes={likes} messages={messages} shares= {shares}  />
        </div>
    )
}

export default Video
