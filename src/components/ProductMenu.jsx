import React from 'react';
import { DPIconOutlineClose } from '../icons';
import { Colors } from '../utilities/colorPalete';

const ProductMenu = ({ onClose }) => {
  return (
    <div className=" bg-transparent w-full pt-5 ">
      <div className="flex w-full justify-end pr-4 pb-2" onClick={onClose}>
        <DPIconOutlineClose />
      </div>
      <div className="bg-white px-5 ">
        <h1 className="text-xl font-medium text-center ">Cotton Tee</h1>
        <p className="text-center mb-4">by Gildan</p>
        <p className="text-center font-bold">Digtal Printing</p>
        <p className="text-center mb-4">(No Minimum - Ships in 1-2 Days)</p>

        <div className="flex gap-3 justify-center flex-wrap">
          {Colors.map(({ colorType }, idx) => (
            <div
              key={idx}
              className={`border border-gainsboro w-10 h-10 rounded bg-[${colorType}]`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
