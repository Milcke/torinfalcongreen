import Head from 'next/head';
import React from 'react';
import BlobCanvas from './components/BlobCanvas';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='h-screen overflow-hidden relative'>
      <div className='fixed left-0 bottom-0 w-full h-full overflow-hidden'>
        <div className='absolute right-[15.5rem] top-[-6.5rem]'>
          <BlobCanvas />
        </div>
      </div>
      <div className='absolute bottom-0 p-4'>
        <div className='text-white font-grenette text-[8.5rem] leading-none'>
          Hey! Glad
        </div>
        <div className='w-full ml-9 text-white font-grenette text-[8.5rem] leading-none'>
          You Made It
        </div>
      </div>
      <div className='fixed right-1 bottom-1'>
        <div className='flex gap-2'>
          <div className='text-[#C818FF] font-grenette'>Lets go</div>
          <ArrowRight color='#C818FF' />
        </div>
      </div>
    </div>
  );
}