import React from "react";
import ReactDOM, { render } from "react-dom";
import Cats from "../img/onecat.jpg";

import '../styles/AlbumPhoto.css';


class GalleryPhoto extends React.Component {
  render(){
    return (
      <div className="album-photos">
       <div className="one">
       <div className="imagen"> 
       <a href="#">
        <img src={Cats}/>
       </a>
       <div class="texto">
        <h2>Titular de la sección</h2>
        <a href="#" title="#">enlace</a>
       </div>
       </div> 
       <div className="imagen"> 
       <a href="#">
        <img src={Cats}/>
       </a>
       <div class="texto">
        <h2>Titular de la sección</h2>
        <a href="#" title="#">enlace</a>
       </div>
       </div> 
       <div className="imagen"> 
       <a href="#">
        <img src={Cats}/>
       </a>
       <div class="texto">
        <h2>Titular de la sección</h2>
        <a href="#" title="#">enlace</a>
       </div>
       </div> 
       </div> 
       <div className="one"> 
       
       </div>
       <div className="one"> 
       
       </div> 
    </div>
    )
  }
}
export default GalleryPhoto;