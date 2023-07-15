import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

const Avatar = (props) => {
    return (
        <div>
        <h1>Welcome to here.....</h1>
        <Avatarlist id ='1' name = "Bam bam Bhole" work = "God"/>
        <Avatarlist id ='2' name = "Shri Ram" work = "God"/>
        <Avatarlist id ='3' name = "Jai Hanuman" work = "God"/>
        <Avatarlist id ='4' name = "Maa Saraswati" work = "God"/>
    <button>Subscribe</button>
    </div>
    )
}

export default Avatar;