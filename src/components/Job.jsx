import React from 'react';
import '../../src/styles/Job.css'
import GalleryAlbum from './GalleryAlbum'

// import photos from '../img/photos'

class Job extends React.Component {
  render(){
    return (
      <div className="gallery">
     <div className="gallery-container">
       <div className="gallery-header">
         <h1>ALBUM</h1>
       </div>
       <div className=" gallery-album">
          <GalleryAlbum />
       </div>
      
     </div>
        
    </div>
    )
  }
}
export default Job;