import React from 'react';

interface CheckBoxButtonProps {
    color: string;
    height : string;
    width: string;
    children : React.ReactNode;
    onClick: () => void;
}

export const CheckBoxButton: React.FC <CheckBoxButtonProps>= ({color,height,width,children, onClick}) => {
  return (
    <>
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        height,
        width
      }}
    >
        {children}
    </button>
    </>
  );
}

export default CheckBoxButton;