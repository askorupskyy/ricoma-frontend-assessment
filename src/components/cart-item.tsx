import Image from 'next/image';
import Counter from './counter';
import { useStore } from '@/stores/main.store';
import ColorPicker from './color-picker';
import { useEffect, useState } from 'react';

export type Item = {
  imgSrc: string,
  name: string,
  tier: string,
  needleCount: string,
  type: string,
  desc: string,
  price: number,
  discountPrice: number,
}

export default function CartItem({ item, selectedColor, quantity }: { item: Item, selectedColor: string, quantity: number }) {
  const { changeQuantity, changeColor } = useStore();
  const [currentSelectedColor, setCurrentSelectedColor] = useState(selectedColor);
  const productColors = ["#22144A", "#60C250", '#370405'];

  useEffect(() => { 
    changeColor(item.name, currentSelectedColor);
  }, [changeColor, currentSelectedColor, item.name]);

  return (
    <div className="flex flex-row items-start w-[100%]">
      <div style={{minWidth: 80, minHeight: 87}} className='mt-2'>
        <Image src={item.imgSrc} alt="Machine" width={80} height={87} />
      </div>
      <div className="ml-4 flex flex-col w-[100%] justify-between">
        <div>
          <div className='flex flex-row justify-between'>
            <h2 className='text-xl font-bold text-[#002045]'>{item.name}</h2>
            <h4>${item.discountPrice}</h4>
          </div>
          <p className='text-[14px] text-[#565657]'>
            {item.tier}<br/>
            {item.needleCount} | {item.type}
          </p>
        </div>
        <div className='mt-2 flex justify-between'>
          <Counter count={quantity} onIncrement={() => { changeQuantity(item.name, quantity + 1) }} onDecrement={() => { changeQuantity(item.name, quantity - 1) }} />
          <div className='flex'>
            <span className='mx-2'>Colors: </span>
            <ColorPicker selectedColor={selectedColor} onSelect={setCurrentSelectedColor} productColors={productColors} />
          </div>
        </div>
      </div>
    </div>
  )
}