import React, { useState } from 'react';
import '../cat.css';

function Categories() {
  const [underConstruction, setUnderConstruction] = useState(false);

  const handleClick = () => {
    setUnderConstruction(true);
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
    }}
    >
      <button type="button" onClick={handleClick}>
        Check status
      </button>
      {underConstruction && <p style={{ fontSize: '30px', color: 'red' }}>Under Construction</p>}
    </div>
  );
}

export default Categories;
