import React from 'react';
import { DPIconShirt, DPIconTemplate, DPIconZoom } from '../icons';

const Controls = () => {
  return (
    <div className="absolute bottom-32 left-4 flex flex-col gap-3 items-center py-4 px-8 rounded-md text-xs bg-light-white max-w-[3rem]">
      <li className="list-none ">
        <DPIconShirt />
        <p>View Back</p>
      </li>
      <li className="list-none ">
        <DPIconZoom />
        <p>zoom</p>
      </li>
      <li className="flex flex-col items-center list-none ">
        <DPIconTemplate />
        <p>template</p>
      </li>
    </div>
  );
};

export default Controls;
