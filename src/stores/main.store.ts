import CartItem from '@/components/cart-item';
import create from 'zustand';

const MACHINES_DATA = [
  {
    imgSrc: '/images/machine-em-1010.png',
    name: 'EM-1010',
    tier: 'Starter Embroidery Machine',
    needleCount: '10 needle',
    type: 'single-head',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.',
    price: 7500,
    discountPrice: 5999,
  },

  {
    imgSrc: '/images/machine-tc-1501.png',
    name: 'TC-1501',
    tier: 'Commercial Embroidery Machine',
    needleCount: '15 needle',
    type: 'single-head',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.',
    price: 7500,
    discountPrice: 7999,
  },

  {
    imgSrc: '/images/machine-mt-1501.png',
    name: 'MT-1501',
    tier: 'Commercial Embroidery Machine',
    needleCount: '10 needle',
    type: 'single-head',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.',
    price: 7500,
    discountPrice: 8999,
  },
];

type CartItem = {
  item: typeof MACHINES_DATA[0];
  selectedColor: string;
  quantity: number;
}

// TODO: Manage cart using store. The user must be able to
// creat/update/remove from cart.
type Store = {
  machines: typeof MACHINES_DATA[0][];
  cart: CartItem[];
  addToCart: (item: typeof MACHINES_DATA[0], color: string) => any;
  isCartOpen: boolean;
  toggleCart: () => any;
  changeQuantity: (name: string, quantity: number) => any;
  changeColor: (name: string, color: string) => any;
};

export const useStore = create<Store>((set) => ({
  machines: MACHINES_DATA,
  cart: [],
  addToCart: (item: typeof MACHINES_DATA[0], color: string) => set((state) => {
    const cardItem = state.cart.filter((cItem) => cItem.item.name === item.name && cItem.selectedColor === color);
    if (cardItem.length) {
      cardItem[0].quantity += 1;
      return {
        cart: [
          ...state.cart.filter((cItem) => cItem.item.name !== item.name),
          cardItem[0],
        ],
      };
    }
    return { cart: [...state.cart, { item, selectedColor: color, quantity: 1 }] };
  }),
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  changeQuantity: (name, quantity) => set((state) => {
    const cartItem = state.cart.filter((cItem) => cItem.item.name === name);
    if (cartItem.length) {
      if (quantity === 0) {
        return { cart: state.cart.filter((cItem) => cItem.item.name !== name) };
      }
      cartItem[0].quantity = quantity;
      return { cart: [...state.cart.filter((cItem) => cItem.item.name !== name), cartItem[0]] };
    }
    return state;
  }),
  changeColor: (name, color) => set((state) => {
    const cartItem = state.cart.filter((cItem) => cItem.item.name === name);
    if (cartItem.length) {
      cartItem[0].selectedColor = color;
      return { cart: [...state.cart.filter((cItem) => cItem.item.name !== name), cartItem[0]] };
    }
    return state;
  })
}));
