import FooterUS from '../UI/Footer'
import Navbar from '../UI/Navbar'
import type { ReactNode } from 'react';
interface UsaLayoutProps {
  children: ReactNode;
}

const UsaLayout = ( {children}: UsaLayoutProps ) => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar />

      <main className="w-full flex-1 flex flex-col items-center mx-0 mt-16 p-0 overflow-x-clip">
        {children}
      </main>

      <FooterUS />
    </div>
  );
};

export default UsaLayout;
