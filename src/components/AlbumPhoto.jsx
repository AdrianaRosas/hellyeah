import React, { useState, useCallback } from 'react';
import { render} from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../img/photos";
// import Cats from '../img/cats.jpg'
import '../../src/styles/AlbumPhoto.css'


function GalleryPhoto() {
  const [currentImage, setCurrentImage ] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox  = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="black">
      <Gallery photos = {photos} onClick= { openLightbox}  />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
            currentIndex = {currentImage}
            views={photos.map (x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default GalleryPhoto;








// class GalleryPhoto extends React.Component {
//   render(){
//     return (
//       <div className="album-photos">
//        <div className="one">  
//        <img src={ Cats } />
//        <img src={ Cats } />
//        <img src={ Cats } />
//        </div> 
//        <div className="two"> 
//        <img src={ Cats } />
//        <img src={ Cats } />
//        <img src={ Cats } />
//        </div>
//        <div className="three"> 
//        <img src={ Cats } />
//        <img src={ Cats } />
//        <img src={ Cats } />  
//        </div> 
//     </div>
//     )
//   }
// }
// export default GalleryPhoto;