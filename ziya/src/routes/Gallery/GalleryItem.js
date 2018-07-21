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
      <img src={require(`media/image/${coverImgName}`)} alt={slug}/>
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