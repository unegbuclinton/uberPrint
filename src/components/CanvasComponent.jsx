import React, { useEffect, useRef } from 'react';
import Controls from './Controls';
import ProductOptions from './ProductOptions';
import UndoControls from './UndoControls';

const CanvasComponent = ({ product, addImage, addText }) => {
  const canvaRef = useRef(null);

  useEffect(() => {
    const canvas = canvaRef.current;
    const context = canvas.getContext('2d');
    const imageObj = new Image();

    imageObj.src =
      'https://ourcodeworld.com/public-media/gallery/gallery-5d5afd3f1c7d6.png';

    imageObj.onload = () => {
      context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div className="relative  overflow-hidden">
      <UndoControls />
      <canvas
        ref={canvaRef}
        width={375}
        height={470}
        className="bg-sheen-green"
      />

      <Controls />
      <ProductOptions product={product} addImage={addImage} addText={addText} />
    </div>
  );
};

export default CanvasComponent;
