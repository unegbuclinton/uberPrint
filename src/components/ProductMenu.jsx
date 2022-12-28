import React from 'react';
import { DPIconOutlineClose } from '../icons';
import { Colors } from '../utilities/colorPalete';

const ProductMenu = ({ onClose }) => {
  return (
    <div className=" bg-transparent w-full pt-5 ">
      <div className="flex w-full justify-end pr-4 pb-2" onClick={onClose}>
        <DPIconOutlineClose />
      </div>
      <div className="bg-white px-5 h-screen overflow-auto">
        <h1 className="text-xl font-medium text-center mt-5">Cotton Tee</h1>
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

        <p className="text-center font-bold">Screen Printing</p>
        <p className="text-center mb-4">
          (12 piece Minimum - Ships in 5-10 Days)
        </p>
        <div className="flex gap-3 justify-center flex-wrap mb-8">
          {Colors.map(({ colorType }, idx) => (
            <div
              key={idx}
              className={`border border-gainsboro w-10 h-10 rounded bg-[${colorType}]`}
            ></div>
          ))}
        </div>

        <button className="bg-carolina-blue rounded mb-8 px-8 py-4 text-white w-full">
          Swap Product
        </button>
        <p className="text-center mb-4">
          <span className="font-semibold">SizesYM</span> - 3XL
        </p>
        <p className="text-center mb-4">
          <span className="font-semibold">Fabric100%</span> cotton
        </p>

        <p>
          As our most cost-effective t-shirt, the Cotton Tee by Gildan is a
          standard crew-neck t-shirt made of 100% cotton. Its low cost and wide
          range of sizes make it a perfect option for large groups, events, and
          giveaways. If you’re designing custom t-shirts for a family reunion or
          5k run, you’ll be sure to fit everyone from kids through adults with a
          cheap option made for any budget. It’s also available in a huge
          variety of colors to make it easy to create just what you’re looking
          for. Whether it’s a single custom t-shirt with our no-minimum digital
          printing option or a large screen printed order, this value-priced
          option is great when you’re looking for a durable classic tee.
          *Heather and safety colors are 50/50 cotton/poly blend. Antique colors
          and Sports Grey are 90/10 blend. Ash Grey is a 99/1 blend.
        </p>
      </div>
    </div>
  );
};

export default ProductMenu;
