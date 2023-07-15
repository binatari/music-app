'use client'
import React from 'react'
import TextTransition, { presets } from 'react-text-transition';
const Hero = () => {
    const [index, setIndex] = React.useState(0);

    //The interval for the animated header text
    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    const TEXTS = ['Unlimited playlists', 'Amazing sound', 'Share your beats'];
  return (
    <div className='hero-container min-h-[80vh] w-full py-6  px-4 relative rounded-3xl'>
        {/* <img src='/images/portrait_disco_woman.png' className='w-full h-full object-cover absolute top-0 left-0'/> */}
        <div className='container mx-auto bg-transparent z-20 relative'>
        <h1 className='font-medium rubik text-[45px] leading-[60px] md:text-[95px] md:leading-[104px] text-clips switching-text'>
          <span className='text-[35px] leading-[50px] md:text-[59px]  md:leading-[80px] font-medium block text-clips small-header'>
            Feel the sound
          </span>
          <TextTransition springConfig={presets.gentle} className='z-[100] relative'>{TEXTS[index % TEXTS.length]}</TextTransition>
        </h1>
        <p className='my-6 text-lg text-clips description-text'>
         Share your playlists with your friends and millions of other users
        </p>
        <button className='flex gap-[30px] bg-mainpink rounded-lg text-white py-2 px-4 md:py-4 md:px-8 text-[15px] font-medium items-center'>
          Get Started
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1027)">
              <path d="M15.6867 11.2362L11.5892 7.13873L12.6694 6L18.6109 12L12.6694 18L11.5892 16.8615L15.6867 12.764H6.38867V11.2362H15.6867Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_1027">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <img />
        </button>
        <div className='flex space-x-3 items-center mt-6 '>
          <span className='text-sm description-text text-clips'>
          Sign up today and get three months free. Conditions apply. **
          </span>
        </div>
        </div>

    </div>
  )
}

export default Hero