import React, { useEffect, useRef } from 'react';
import Controls from './Controls';
import ProductOptions from './ProductOptions';
import UndoControls from './UndoControls';

const CanvasComponent = () => {
  const canvaRef = useRef(null);

  useEffect(() => {
    const canvas = canvaRef.current;
    const context = canvas.getContext('2d');
    const imageObj = new Image();

    imageObj.src =
      'https://ourcodeworld.com/public-media/gallery/gallery-5d5afd3f1c7d6.png';

    imageObj.onload = () => {
      context.drawImage(imageObj, 0, 10);
      context.fillStyle = '#000';
      context.fill();
    };
  }, []);
  return (
    <div className="relative h-screen overflow-hidden">
      <UndoControls />
      <canvas
        ref={canvaRef}
        width={375}
        height={435}
        className="bg-carolina-blue"
      />
      <Controls />
      <ProductOptions />
    </div>
  );
};

export default CanvasComponent;
