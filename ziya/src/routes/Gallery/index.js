import React from 'react';

import gallery from 'fixture/gallery';

import GalleryCol from './GalleryCol';

const Gallery = () => (
  <div className="gallery">
    {gallery.map((galleryCol, i) => 
      <GalleryCol key={i} colItems={galleryCol} />
    )}
  </div>
)

export default Gallery;