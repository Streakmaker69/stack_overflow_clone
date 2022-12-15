import React from 'react';



import pen from '../../assets/Pen.png';
import chat from '../../assets/Chat.png';
import blogo from '../../assets/BlackLogo.svg';

const Widget = () => {
  return (
    <div className="widget">
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width="18"/>
                <p>Observability is the key to the future of software (and your DevOps career).</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width="18"/>
                <p>Podcast 374: How valuable is your screen identity ?</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={chat} alt="chat" width="18"/>
                <p>Review queue workflows final release ...</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={chat} alt="chat" width="18"/>
                <p>Please welcome Valued Associates: #958-V2Blast #959-SpencerG </p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={blogo} alt="blogo" width="18"/>
                <p>Outdated Answers: Accepted answers are now unpinned on Stack Overflow.  </p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <h5>38</h5>
                <p>Why was this flag spam declined, yet the question marked as spam ?</p>
            </div>
            <div className="right-sidebar-div-2">
                <h5>20</h5>
                <p>What is the best course of action when a user has high rep to ...</p>
            </div>
            <div className="right-sidebar-div-2">
                <h5>14</h5>
                <p>Is a link to the "How to ask" help page a useful comment ?</p>
            </div>
        </div>



    </div>
  )
}

export default Widget