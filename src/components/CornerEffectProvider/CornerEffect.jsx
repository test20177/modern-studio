import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { CornerEffectWrapper } from './CornerEffect.styles';

export const CornerEffect = ({
  children,
  position = 'topLeft',
  distance = '20px',
  size = '70px',
  color = 'dark',
  pseudoelement = 'after',
  offset = '400',
  ...props
}) => {
 
  const itemRef = useRef(null);
  const [playState, setPlayState] = useState(false);

  const handlePlayStateChange = () => throttle(() => {
    const { top } = itemRef.current.getBoundingClientRect();
    if (top < parseInt(offset, 10)) {
      setPlayState(true);
    }
  }, 150);

  useEffect(() => {
    handlePlayStateChange()
    document.addEventListener('scroll', handlePlayStateChange)
    return () => {
      document.removeEventListener('scroll', handlePlayStateChange)
    }
  }, []);
 
 
  return (
    <CornerEffectWrapper
      position={position}
      size={size}
      color={color}
      distance={distance}
      pseudoelement={pseudoelement}
      playState={playState}
      ref={itemRef} 
      {...props}
    >
      {children}
    </CornerEffectWrapper>
  );
};

CornerEffect.propTypes = {
  position: PropTypes.oneOf(['topLeft', 'bottomLeft', 'topRight', 'bottomRight']),
  size: PropTypes.string,
  color: PropTypes.oneOf['beige', 'steel', 'dark'],
  distance: PropTypes.string,
  pseudoelement: PropTypes.oneOf(['after', 'before']),
  offset: PropTypes.string,
  children: PropTypes.node.isRequired,
};
