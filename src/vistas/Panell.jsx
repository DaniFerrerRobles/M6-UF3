import React from 'react';
import TiquetsPendents from '../componentes/TiquetsPendents';
import TiquetsResolts from '../componentes/TiquetsResolts';

const Panel = () => {
  return (
    <div>
      <TiquetsPendents />
      <TiquetsResolts />
    </div>
  );
};

export default Panel;
