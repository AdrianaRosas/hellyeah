import React from 'react';
import '../../src/styles/Job.css'
import GalleryPhoto from '../components/AlbumPhoto'

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
          <GalleryPhoto />
       </div>
     </div>
        
    </div>
    )
  }
}
export default Job;