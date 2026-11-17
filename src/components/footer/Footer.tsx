import { FooterColumn } from './FooterColumn';
import { SocialLinks } from './SocialLinks';

const NAVIGATION = [
  { label: 'Collections', href: '#collection' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Bespoke Monogramming', href: '#' },
  { label: 'Atelier Locations', href: '#' }
];

const CLIENT_CARE = [
  { label: 'Book an Appointment', href: '#' },
  { label: 'Watch Servicing & Repair', href: '#' },
  { label: 'Shipping & Authenticity', href: '#' },
  { label: '5-Year Warranty', href: '#' }
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#08090d] border-t border-white/10 text-slate-400 text-xs py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

          <div className="space-y-4">
            <a href="#" className="font-['Cormorant_Garamond',serif] text-2xl tracking-[0.35em] font-semibold text-white uppercase block">
              TIMELESS
            </a>
            <p className="text-slate-400 font-light leading-relaxed max-w-xs">
              Refined Swiss horology engineered for timeless elegance and everyday endurance.
            </p>
          </div>

          <FooterColumn title="Navigation" links={NAVIGATION} />
          <FooterColumn title="Client Care" links={CLIENT_CARE} />

          <FooterColumn title="Connect" links={[]}>
            <SocialLinks />
            <p className="text-slate-500 text-[11px]">Geneva • Zurich • New York • Tokyo</p>
          </FooterColumn>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-slate-500 font-light">
          <p>© {new Date().getFullYear()} TIMELESS Geneva Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
