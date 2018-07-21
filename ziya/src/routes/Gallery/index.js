import React from 'react';

import gallery from 'fixture/gallery';

import GalleryCol from './GalleryCol';

const Gallery = ({}) => (
  <div className="gallery">
    {gallery.map(galleryCol => <GalleryCol colItems={galleryCol} />)}
  </div>
)

export default Gallery;