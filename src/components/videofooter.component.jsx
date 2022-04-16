import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
import './videofooter.styles.css';

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="">
                <h3>@nabendu82</h3>
                <p>Macbook Air to new Windows editing beast.</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {
                            ({ index}) => (
                                <>
                                    <p>I am a Windows PC</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" />
        </div>
    )
}

export default VideoFooter