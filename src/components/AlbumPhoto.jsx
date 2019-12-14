import React from 'react';
import Cats from '../img/cats.jpg'
import '../../src/styles/AlbumPhoto.css'



class GalleryPhoto extends React.Component {
  render(){
    return (
      <div className="album-photos">
       <div className="one">  
       <img src={ Cats } />
       <img src={ Cats } />
       <img src={ Cats } />
       </div> 
       <div className="two"> 
       <img src={ Cats } />
       <img src={ Cats } />
       <img src={ Cats } />
       </div>
       <div className="three"> 
       <img src={ Cats } />
       <img src={ Cats } />
       <img src={ Cats } />  
       </div> 
    </div>
    )
  }
}
export default GalleryPhoto;