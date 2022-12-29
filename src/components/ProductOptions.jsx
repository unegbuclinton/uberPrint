import React from 'react';
import {
  DPIconCamera,
  DPIconCurrency,
  DPIconDownload,
  DPIconShirt,
  DPIconText,
} from '../icons';

const ProductOptions = ({ product, addImage, addText }) => {
  const options = [
    { title: 'Product', icon: <DPIconShirt />, onFunc: () => product() },
    { title: 'Add Images', icon: <DPIconCamera />, onFunc: () => addImage() },
    { title: 'Add Text', icon: <DPIconText />, onFunc: () => addText() },
    { title: 'Save/Load', icon: <DPIconDownload /> },
  ];
  return (
    <ul className="flex">
      {options.map(({ title, icon, onFunc }, index) => (
        <li
          key={index}
          className="flex flex-col justify-center items-center w-1/5 pt-2 pb-1 border-l border-t border-gainsboro"
          onClick={onFunc}
        >
          {icon}
          <p className="text-xs	text-center">{title}</p>
        </li>
      ))}
      <div className="flex flex-col justify-center items-center w-1/5 text-white bg-carolina-blue pt-2 pb-1">
        <DPIconCurrency />
        <p className="text-xs">Quote/Buy</p>
      </div>
    </ul>
  );
};

export default ProductOptions;
