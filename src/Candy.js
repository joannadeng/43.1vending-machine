import React from "react";
import {Link} from 'react-router-dom'

const Coke = () => {
    return (
        <div>
            <img 
            src="https://cdn.pixabay.com/photo/2012/06/27/15/02/candy-50838_1280.jpg"
            width="500px"
            height="500px"
            />
            <Link to="/">Home</Link>
        </div>
        
    )
}

export default Coke;