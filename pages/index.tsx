import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import BlobCanvas from './components/BlobCanvas';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [rotateBlob, setRotateBlob] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const handleRotateButtonClick = () => {
    setRotateBlob(!rotateBlob);
  };

  // Trigger animation once the component is mounted
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return (
    <div className={`h-screen overflow-hidden relative ${animateIn ? 'opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out' : 'opacity-0 translate-y-80 transition-opacity duration-1000 ease-in-out'}`}>
      <Head>
        {/* Add your head content here */}
      </Head>
      <div>
        <BlobCanvas rotateBlob={rotateBlob} />
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
        <div>
          <Image width={50} height={100} src="/long.gif" alt="toringif" />
        </div>
        <div className='flex gap-2'>
          <div onClick={handleRotateButtonClick} className='text-[#C818FF] font-grenette cursor-pointer hover:bg-white'>
            Lets go
          </div>
          <ArrowRight color='#C818FF' />
        </div>
      </div>
    </div>
  );
}
