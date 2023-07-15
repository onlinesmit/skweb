import React from 'react';


const Avatarlist = (props) => {
    return(
        <div className = "avatarstyle ma4 bg-light-purple dib tc">
        <img src="https://images.pexels.com/photos/12088465/pexels-photo-12088465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar"/>
        <h1 className =""> {props.name} </h1>
        <p>  {props.work} </p>
    </div>
    )
}
export default Avatarlist;