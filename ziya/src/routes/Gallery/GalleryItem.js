import React from 'react';
import { Link } from "react-router-dom";

const GalleryItem = ({
  title,
  slug,
  coverImgName,
  artworkType,
}) => (
  <Link to={`/artworks/${slug}`}>
    <div className="gallery-item">
      {/* TODO: dynamically import image */}
      <img src="./img/souffle_cover.jpg" />
      <div className="gallery-item__overlay">
        <div>
          {title}
          <br />
          {artworkType}
        </div>
      </div>
    </div>
  </Link>
)

export default GalleryItem;