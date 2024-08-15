import React from 'react';
import {
  ThumbnailWrapper,
  ThumbnailImage,
  ThumnailInfo,
} from './Thumbnail.styles';
import { getPageSlug } from '../../helpers/getPageSlug';

export const Thumbnail = ({ imageSource = '', title = '', address = '' }) => (
  <ThumbnailWrapper to={getPageSlug(address)}>
    <ThumbnailImage src={imageSource} alt="" />
    <ThumnailInfo>
      <p>{title}</p>
      <p>{address}</p>
    </ThumnailInfo>
  </ThumbnailWrapper>
);
