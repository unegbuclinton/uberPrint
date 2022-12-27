import React from 'react';
import { DPIconClose, DPIconRigntNav } from '../icons';

const HamburgerMenu = ({ onClose }) => {
  const menuList = [
    { title: 'Design Studio' },
    { title: 'Custom T-Shirt', icon: <DPIconRigntNav /> },
    { title: 'Sweats and Hoodies', icon: <DPIconRigntNav /> },
    { title: 'Hats', icon: <DPIconRigntNav /> },
    { title: 'Kids and Babies', icon: <DPIconRigntNav /> },
    { title: 'Polo & More', icon: <DPIconRigntNav /> },
    { title: 'Design Templates' },
    { title: 'Help' },
    { title: 'My Account', icon: <DPIconRigntNav /> },
    { title: 'Contact' },
  ];
  return (
    <div className=" bg-white font-semibold h-screen overflow-scroll	">
      <div className="flex w-full justify-end py-4 px-5 " onClick={onClose}>
        <DPIconClose />
      </div>

      {menuList.map(({ title, icon }) => (
        <div className=" flex justify-between border-t border-light-grey py-4 px-5">
          <p>{title}</p>
          {icon}
        </div>
      ))}
    </div>
  );
};

export default HamburgerMenu;
