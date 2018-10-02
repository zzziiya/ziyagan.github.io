import React from 'react';
import { Redirect } from "react-router-dom";

import artworkMap from 'fixture/artworkMap';

const Artwork = ({ match }) => {
  const { params } = match;
  const { artwork } = params;

  const artworkData = artworkMap[artwork];

  if (!artworkData) {
    return <Redirect to='/'/>
  }

  const {
    contentTitle,
    contentBrief,
    contentText,
    contentImages,
  } = artworkData;

  return (
    <div>
      {/* <div className="title artwork-title">
        {contentTitle}
      </div> */}

      {/* <p className="content">
        {contentBrief}
        <br />
        {contentText}
        <br />
      </p> */}
      
      <div className="artwork">
        {contentImages && 
          contentImages.map(image => (
            <div className="artwork-item" key={image}>
              <img src={require(`media/image/${image}`)} alt='artwork' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Artwork;