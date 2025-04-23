import React from 'react';

interface CloseIconProps {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  fill = '#000000',
  width = '24px',
  height = '24px',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill={fill} stroke="#000000"><line x1="16" y1="16" x2="48" y2="48"/><line x1="48" y1="16" x2="16" y2="48"/></svg>
  );
};

export default  CloseIcon;
