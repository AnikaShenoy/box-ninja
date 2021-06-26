import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/game">Game</NavLink> */}
       </div>
    );
}
 
export default Navigation;