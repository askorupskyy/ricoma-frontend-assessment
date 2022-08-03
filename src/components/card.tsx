import { useStore } from '@/stores/main.store';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { InfoCircle, Check } from 'tabler-icons-react';
import ToolTip from './tooltip';

type MachineCardProps = {
  imgSrc: string;
  name: string; // EM-1010
  tier: string; // starter embroider machine
  needleCount: string; // 10 needle
  type: string; // single-head
  desc: string;
  price: number;
  discountPrice: number;
};

export const MachineCard: React.FC<MachineCardProps> = ({
  imgSrc,
  name,
  tier,
  needleCount,
  type,
  desc,
  price,
  discountPrice,
}) => {
  const productColors = ["#22144A", "#60C250", '#370405'];
  const [selectedColor, setSelectedColor] = useState(productColors[0]);
  const [isToolTipActive, setIsToolTipActive] = useState(false);

  const cartObject = {
    name,
    tier,
    needleCount,
    type,
    desc,
    price,
    discountPrice,
    imgSrc,
  }
  const { addToCart } = useStore();

  const addItemToCart = () => {
    addToCart(cartObject, selectedColor);
  }

  return (
    <>
      <ToolTip desc={desc} isActive={isToolTipActive} />
    
      <div className="max-w-sm shadow-md rounded-lg overflow-hidden p-4 relative from-gray-500 via-white to-white bg-gradient-to-b" onMouseLeave={() => setIsToolTipActive(false)}>
        {/* TODO: Clicking on `Info` icon should show text block */}
        <InfoCircle
          size={28}
          strokeWidth={1.5}
          color={'#ffffff'}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsToolTipActive(!isToolTipActive)}
        />
        <div className="text-center">
          <Image src={imgSrc} alt="Machine" width={200} height={220} />
        </div>

        <h3 className="font-bold text-lg uppercase">{name}</h3>

        <h4 className="font-semibold text-xs mb-2">{tier}</h4>

        <div className="flex text-[#162EC0] text-xs font-semibold uppercase mb-2">
          <div className="mr-2">{needleCount}</div>
          <div>{type}</div>
        </div>

        <p className="text-gray-500 mb-6">{desc}</p>

        {/* 
          TODO: Make color selection dynamic and ensure that when ordering machine 
          it gets added to the cart with correct color variant selection 
        */}
        <div className="flex items-center mb-6">
        {productColors.map((color, i) => (
          <div style={{backgroundColor: color}} key={i} className={`w-9 h-9 rounded-full flex justify-center items-center cursor-pointer ${i !== 0 && i !== productColors.length-1 && 'mx-3'}`} onClick={() => { setSelectedColor(productColors[i]) }}>
            {selectedColor === productColors[i] && <Check size={28} strokeWidth={2} color={'#ffffff'} />}
          </div>
        ))}
        </div>

        {/* TODO: Clicking `Order` must add machine to cart */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-bold text-2xl">${discountPrice}</div>
            <div className="text-[#F17D21] line-through px-4 text-md">${price}</div>
          </div>
          <button className="bg-[#F17D21] text-white uppercase p-2 px-6 rounded-sm text-sm" onClick={addItemToCart}>
            Order
          </button>
        </div>
      </div>
    </>
  );
};
