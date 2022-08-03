import type { NextPage } from 'next';
import { Layout } from '@components/layout';
import { MachineCards } from '@components/cards';
import Cart from '@/components/cart';
import { useStore } from '../stores/main.store';

const Home: NextPage = () => {
  const { isCartOpen } = useStore();
  return (
    <Layout>
      <section className="relative py-20 after:[content: ''] after:absolute after:left-0 after:bottom-0 after:h-full after:max-h-[300px] after:w-full md:after:bg-[url('/images/bg-orange.png')] after:bg-no-repeat after:bg-cover after:bg-left-top after:-z-10">
        <div className="container mx-auto">
          <header className="mb-24 text-center md:text-left">
            <h1 className="text-6xl font-bold mb-4">Dui augue lectus</h1>
            <p className="w-96 mx-auto md:mx-0 md:w-7/12 text-2xl font-light text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo nec ultrices sit
              risus nisi non fermentum morbi. Tristique.
            </p>
          </header>
          <MachineCards />
        </div>
      </section>
    </Layout>
  )
};

export default Home;
