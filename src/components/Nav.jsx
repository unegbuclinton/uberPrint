import React from 'react';
import { DPIconBars, DPIconCart, DPiconLogo, DPIconPhone } from '../icons';

const Nav = ({ onClick }) => {
  return (
    <div className="flex justify-between items-center py-2 px-4 border-b border-gainsboro">
      <DPIconBars onClick={onClick} />
      <div className="h-8">
        <DPiconLogo />
      </div>
      <div className="flex gap-5 ">
        <DPIconPhone />
        <DPIconCart />
      </div>
    </div>
  );
};

export default Nav;
