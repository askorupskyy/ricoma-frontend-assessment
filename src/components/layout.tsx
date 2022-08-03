import { Footer } from '@components/footer';
import { Header } from '@components/header';
import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Ricoma Assessment</title>
      <meta name="description" content="Ricoma's frontend take-home assessment" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div className="h-full flex flex-col">
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer className="flex-grow">
        <Footer />
      </footer>
    </div>
  </>
);
