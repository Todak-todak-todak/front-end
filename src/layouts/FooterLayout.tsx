import { Outlet } from 'react-router-dom';
import Footer from '@/components/footer/Footer';

export default function FooterLayout() {
  return (
    <div>
      <div className="flex-1 pb-24">
        <Outlet />
      </div>
      <div className="mt-auto z-[10000]">
        <Footer />
      </div>
    </div>
  );
}
