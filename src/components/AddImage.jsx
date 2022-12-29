import React from 'react';
import {
  DPIconClipArt,
  DPIconMyImage,
  DPIconOutlineClose,
  DPIconRigntNav,
  DPIconUpload,
} from '../icons';

const AddImage = ({ onClose }) => {
  return (
    <div className=" bg-transparent w-full pt-5 ">
      <div className="flex w-full justify-end pr-4 pb-2" onClick={onClose}>
        <DPIconOutlineClose />
      </div>
      <div className="bg-white px-5 h-screen overflow-auto">
        <h1 className="max-w-xs my-0 mx-auto text-2xl font-medium text-center mt-5">
          Add an image to your design
        </h1>
        <p className="text-center mb-4 text-sm">
          Browse our clip art catalog or upload your own image.
        </p>

        <div className="flex items-center py-4 border-b border-light-grey">
          <DPIconClipArt className="mr-5" />
          <div className="flex flex-col ">
            <p className="text-lg text-onxy ">Clip Art</p>
            <p className="text-[#959595]">Browse Thousand of Images</p>
          </div>
          <DPIconRigntNav className="ml-5" />
        </div>

        <div className="flex  items-center py-4 border-b border-light-grey">
          <DPIconUpload className="mr-5" />
          <div className="flex flex-col ">
            <p className="text-lg text-onxy ">Upload Images</p>
            <p className="text-[#959595]">Upload your own picture or logo</p>
          </div>
          <DPIconRigntNav className="ml-5" />
        </div>

        <div className="flex items-center py-4 border-b border-light-grey">
          <DPIconMyImage className="mr-5" />
          <div className="flex flex-col ">
            <p className="text-lg text-onxy ">My Images</p>
            <p className="text-[#959595]">Choose from your saved image</p>
          </div>
          <DPIconRigntNav className="ml-5" />
        </div>
      </div>
    </div>
  );
};

export default AddImage;
