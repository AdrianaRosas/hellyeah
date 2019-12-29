import React from "react";
import ReactDOM, { render } from "react-dom";
import Cats from "../img/onecat.jpg";
import '../styles/AlbumPhoto.css';


class GalleryPhoto extends React.Component {
  render(){
    return (
      <div className="album-photos">
       <div className="one">
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
              <p><a 
              href="https://codepen.io/jayawiratha/pen/wWjZZp" 
              target="_blank"
              rel="noopener noreferrer">
                LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
				      <p><a href="#">LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
				      <p><a href="#">LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
       </div>
       <div className="two">
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
				      <p><a href="#">LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
				      <p><a href="#">LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
				      <p><a href="#">LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
       </div>
       <div className="three">
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
				      <p><a href="#">LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
				      <p><a href="#">LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
         <div class="hovereffect">
           <div class="overlay">
             <h2>ALBUM UNO</h2>
             <div className="link-here">
				      <p><a href="#">LINK HERE</a></p> 
             </div>
             <img src={Cats} />
           </div>
         </div>
       </div> 
        
    </div>
    )
  }
}
export default GalleryPhoto;