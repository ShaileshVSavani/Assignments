import React from 'react';
import './StyledComponent.css';

const StyledComponent = ({ isStyled }) => {
  const className = isStyled ? 'styled-component styled' : 'styled-component';

  return (
    <div className={className}>
      {isStyled ? <h2>This is a Styled Component</h2> : <h2>This is Not Styled Component</h2>}
      <p>
        This component changes style dynamically based on the <span>{`${isStyled}`}</span> prop.
      </p>
    </div>
  );
};

export default StyledComponent;

