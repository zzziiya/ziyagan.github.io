import React from 'react';

import GalleryItem from './GalleryItem';

const GalleryCol = ({ colItems }) => (
  <div className="gallery-col">
    {colItems.map(colItem => <GalleryItem {...colItem} />)}
  </div>
)

export default GalleryCol;