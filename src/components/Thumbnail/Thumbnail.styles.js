import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 30vw;
  min-height: 450px;
  max-height: 700px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  object-position: left bottom;
  z-index: -1;
`;

export const ThumnailInfo = styled.div`
  width: 100%;
  padding: 20px;
  p:first-child {
    font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    position: relative;
  }
  p:first-child::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 1px;
    background-color: white;
    bottom: -10px;
    left: 0;
  }
  p:last-child {
    font-size: ${({ theme }) => theme.font.size.thumbnail};
    font-weight: 700;
    color: white;
  }
`;
