import localFont from 'next/font/local';

export const americanaSerif = localFont({
  src: [
    {
      path: '../../public/fonts/americana-serif-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-americana',
  preload: true,
});
