import Image from 'next/image';
import { useState } from 'react';
import {
  BrandFacebook,
  BrandInstagram,
  BrandTwitter,
  BrandYoutube,
  BrandPinterest,
} from 'tabler-icons-react';

const footerContent = [
  {
    title: 'Massa',
    links: [
      'Aliquet et.',
      'Donec.',
      'Neque nec feugiat.',
    ],
  },
  {
    title: 'Enim',
    links: [
      'Lorem',
      'Ipsium',
      'Donec',
    ],
  },
  {
    title: 'Fusce.',
    links: [
      'Amet.',
      'Donec.',
      'Neque nec feugiat.',
    ],
  },
]

export const FooterSection = ({index, title, links, open, setOpen}: {index: number, title: string, links: string[], open: Number, setOpen: any}) => (
  <div className='py-2 md:py-0'>
    <div className='flex md:block flex-row justify-between' onClick={() => {setOpen(open === index ? -1 : index)}}>
      <h3 className="text-white">{title}.</h3>
      <h3 className="text-lg md:hidden">+</h3>
    </div>
    {open === index &&
      <>
        {links.map((link: string, i: number) => (
          <div key={i}>{link}</div>
        ))}
      </>
    }
    {links.map((link: string, i: number) => (
      <div className='hidden md:block' key={i}>{link}</div>
    ))}
  </div>
)

export const Footer: React.FC = () => {
  const [open, setOpen] = useState(-1);

  return (
    <div className="bg-[#022B5B] py-24 h-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="mr-0 md:mr-24 w-96 px-4 md:px-0 md:w-auto">
          <div className="mb-8 flex flex-row justify-center md:block md:justify-start">
            <Image src="/images/logo-ricoma.png" alt="ricoma logo" width={250} height={60} />
          </div>
          <div className="flex items-center justify-between">
            <BrandFacebook color={'#ffffff'} strokeWidth={1} fill={'#ffffff'} />
            <BrandTwitter color={'#ffffff'} strokeWidth={1} fill={'#ffffff'} />
            <BrandInstagram color={'#ffffff'} strokeWidth={1.5} />
            <BrandYoutube color={'#ffffff'} strokeWidth={1.5} />
            <BrandPinterest color={'#ffffff'} strokeWidth={1.5} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-96 md:w-auto md:gap-x-16 text-gray-500 leading-8 mt-5 md:mt-0 px-4 md:px-0 md:divide-y-0 divide-y">
          {footerContent.map((content, i) => (
            <FooterSection index={i} links={content.links} setOpen={setOpen} title={content.title} key={i} open={open} />
          ))}
        </div>
      </div>
    </div>
  );
};
