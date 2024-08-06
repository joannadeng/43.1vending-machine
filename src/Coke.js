import React from "react";
import {Link} from 'react-router-dom'

const Coke = () => {
    return (
        <div>
            <img 
            src="https://images.heb.com/is/image/HEBGrocery/001397056-1"
            width="500px"
            height="500px"
            />
            <Link to="/">Home</Link>
        </div>
        
    )
}

export default Coke;