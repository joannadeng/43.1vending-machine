import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div>
            <h1>Vending Maching</h1>
            <img 
            src="https://media.istockphoto.com/id/533727796/photo/vending-machine.jpg?s=1024x1024&w=is&k=20&c=RvU_d9oCzef2jf7o3MD0scJSs0dz3cGGb041wFt1ABI="
            alt="vending machine"
            width="500px"
            height="500px"
            />
            <Link to="/coke">Coke  </Link>
            <Link to="/candy">Candy  </Link>
            <Link to="/chips">Chips  </Link>
        </div>
    )
}

export default VendingMachine;