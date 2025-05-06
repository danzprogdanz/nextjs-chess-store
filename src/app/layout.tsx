import { americanaSerif } from './fonts';
import './globals.css';
import Navbar from '@/components/ui/layout/Navbar/Navbar';
import { ReduxProvider } from '@/store/provider';
import Footer from '@/components/ui/layout/Footer/Footer';
import { MSWComponent } from '@/components/MSWComponent/MSWComponent';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${americanaSerif.className}`}>
      <body>
        <ReduxProvider>
          <MSWComponent />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
