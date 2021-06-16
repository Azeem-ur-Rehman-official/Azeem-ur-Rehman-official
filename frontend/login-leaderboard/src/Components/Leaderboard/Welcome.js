import React, { useState, useEffect } from 'react';

const Welcome = () => {
  const [Name, setName] = useState('');

  useEffect(() => {
    const n = localStorage.getItem('Username').replace(/"/g, '');
    setName(n);
  }, []);
  return (
    <div>
      <h2 className="wel">Welcome {Name}</h2>
    </div>
  );
};

export default Welcome;
