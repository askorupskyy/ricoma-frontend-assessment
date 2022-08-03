import Image from 'next/image';
import { Cardboards, ShoppingCart } from 'tabler-icons-react';
import { useStore } from '../stores/main.store';
import Cart from './cart';
import Indicator from './indicator';

export const Header = () => {
  const cart = useStore((state) => state.cart);
  const { isCartOpen, toggleCart } = useStore();
  return (
    <>
      <div className="bg-[#002045] py-4 px-5 md:px-0">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/images/logo-ricoma.png" alt="ricoma logo" width={100} height={25} />
          <div className="relative">
            <Indicator count={cart.length} />
            <ShoppingCart onClick={toggleCart} className="text-gray-300" />
          </div>
        </div>
      </div> 
      <div className='flex justify-end container mx-auto'>
        {isCartOpen && <Cart />}
      </div>
    </>
  )
};
