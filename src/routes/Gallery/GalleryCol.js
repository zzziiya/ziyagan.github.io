import React from 'react';

import GalleryItem from './GalleryItem';

const GalleryCol = ({ colItems }) => (
  <div className="gallery-col">
    {colItems.map((colItem, i) => <GalleryItem key={i} {...colItem} />)}
  </div>
)

export default GalleryCol;