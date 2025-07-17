import { Outlet } from 'react-router-dom';
import Footer from '@/components/common/footer/Footer';

export default function FooterLayout() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 pb-24">
          <Outlet />
        </div>
        <div className="mt-auto z-50">
          <Footer />
        </div>
      </div>
    </div>
  );
}
