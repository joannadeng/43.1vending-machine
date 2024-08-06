import React, {useState} from "react";
import {Link} from 'react-router-dom'

const Coke = () => {
    const [num, setNum] = useState(0);
    const increment = () => {
        setNum(n => n+1)
    };
    return (
        <div>
            <img 
            src="https://m.media-amazon.com/images/I/813axPlVxBL.jpg"
            width="500px"
            height="500px"
            />
            <p>BAGS EATEN: {num}</p>
            <button onClick={increment}>NOM NOM NOM</button>
            <p><Link to="/">Home</Link></p>
        </div>
        
    )
}

export default Coke;