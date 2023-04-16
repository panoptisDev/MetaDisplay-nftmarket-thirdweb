import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RxExternalLink } from 'react-icons/rx';

interface Props {}

const CollectionCard = () => {
  return (
    <div className='h-auto w-[25rem] border-[1px] border-gray-50/60 rounded-t-md divide-y-[1px] divide-gray-50/60 shadow-md'>
      <div className=''>
        <img
          src='https://i.seadn.io/s/primary-drops/0xcd15cabf8f047e226a719826f0a4726e34e69e28/24146804:about:preview_media:d4232f34-be0b-4ed0-87ca-6a6b82601bc9.gif?auto=format&w=1920'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full px-4 py-2 bg-[#141414] inline-flex items-center justify-between'>
        <p>Michael Circle - Demons.wav</p>
        <p className='inline-flex items-center gap-1'>
          <RxExternalLink />

          <span className='inline-flex items-center gap-1'>
            <AiOutlineHeart /> 54
          </span>
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
