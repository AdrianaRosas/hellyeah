import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'

// import '../sidebar/otro.css'

const Sections = () => {
  return (
    <div className="bar">
      
      <div className="links-sidebar">
        <div className="link">
            <Link exact to="/caracterizacion">Caracterizacion</Link>
         </div>
         <div className="link">
            <Link to="/escultura">Escultura</Link>
         </div>
         <div className="link">
            <Link to="/filmacion" >Filmacion</Link>
         </div>
         <div className="link">
            <Link to="/action" >Im Action</Link>
         </div>
         <div className="link">
            <Link to="/latex" >Im Latex</Link>
         </div>
      </div>
    </div>
  );
};

export default Sections;
