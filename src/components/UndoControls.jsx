import React from 'react';
import { DPIconRedo, DPIconUndo } from '../icons';

const UndoControls = () => {
  return (
    <div className="absolute top-4 left-4 py-4 px-8 flex flex-col gap-3 items-center rounded-md text-xs bg-light-white max-w-[3rem]">
      <li className="list-none ">
        <DPIconUndo />
        <p>undo</p>
      </li>
      <li className="list-none ">
        <DPIconRedo />
        <p>redo</p>
      </li>
    </div>
  );
};

export default UndoControls;
