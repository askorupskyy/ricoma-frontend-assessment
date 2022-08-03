import { useStore } from "@/stores/main.store";
import { X, ArrowNarrowRight } from 'tabler-icons-react';
import CartItem, { Item } from "./cart-item";

type CartItemType = {
  item: Item;
  quantity: number;
  selectedColor: string;
}

const getTotalOrder = (cart: CartItemType[]) => {
  return cart.reduce((acc, cur) => {
    return acc + cur.item.discountPrice * cur.quantity;
  }, 0);
}

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const {toggleCart} = useStore();
  return (
    <div className="drop-shadow-xl cart z-50 absolute top-[57px] md:top-[67px] bg-white px-4 w-[100%] float-right" style={{maxWidth: 580}}>
      <div className="cartHeader flex flex-row items-center mt-4 justify-between pb-1 border-b-2 mb-4 border-[#F0F0F5]">
        <h1 className="font-bold text-2xl">Your Cart</h1>
        <X onClick={toggleCart} style={{color: 'grey'}}/>
      </div>
      <div>
        {cart.map((cardItem, i) => (
          <CartItem item={cardItem.item} quantity={cardItem.quantity} selectedColor={cardItem.selectedColor} key={i} />
        ))}
      </div>
      <div className="flex flex-row justify-between text-2xl border-t-2 mt-4 border-[#F0F0F5] py-5 mb-5">
        <h1>Order total </h1>
        <h1>${getTotalOrder(cart)}</h1>
      </div>
      <div className="flex flex-row justify-center p-5 my-5">
        <button className="flex flex-row bg-[#0076FF] text-white p-3 w-[240px] text-sm align-center justify-center rounded-sm">Checkout <ArrowNarrowRight height={20}/></button>
      </div>
    </div>
  )
}