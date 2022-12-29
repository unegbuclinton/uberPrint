import React from 'react';
import { DPIconOutlineClose } from '../icons';

const AddText = ({ onClose }) => {
  return (
    <div className=" bg-transparent w-full pt-5 ">
      <div className="flex w-full justify-end pr-4 pb-2" onClick={onClose}>
        <DPIconOutlineClose />
      </div>
      <div className="bg-white p-4 h-screen ">
        <h1 className="text-xl text-center mb-2">Enter Your Text Below</h1>
        <textarea
          placeholder="--enter your text here--"
          className="w-full h-16 rounded border p-2 border-[#cacaca]"
        ></textarea>
        <button className="bg-carolina-blue rounded mt-4 px-8 py-4 text-white w-full">
          Add To Design
        </button>
      </div>
    </div>
  );
};

export default AddText;
