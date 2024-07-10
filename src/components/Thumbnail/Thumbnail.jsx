import React from 'react';
import {
  ThumbnailWrapper,
  ThumbnailImage,
  ThumnailInfo,
} from './Thumbnail.styles';

export const Thumbnail = ({ imageSource }) => (
  <ThumbnailWrapper>
    <ThumbnailImage src={imageSource} alt="" />
    <ThumnailInfo>
      <p>Rolna 20</p>
      <p>Nowoczesny apartament z klasą</p>
    </ThumnailInfo>
  </ThumbnailWrapper>
);
