import { Sparkles, ShieldCheck, Watch } from 'lucide-react';
import { FeatureItem } from './FeatureItem';

const FEATURES = [
  {
    icon: Watch,
    title: 'Swiss Automatic Caliber',
    description: 'Hand-assembled in Geneva with a 42-hour power reserve and bespoke rotor engraving.'
  },
  {
    icon: ShieldCheck,
    title: 'Domed Sapphire Crystal',
    description: 'Scratch-resistant sapphire glass with anti-reflective coating on both sides for supreme clarity.'
  },
  {
    icon: Sparkles,
    title: 'Bespoke Monogramming',
    description: 'Personalize your timepiece with custom caseback engravings and choice of custom straps.'
  }
];

export function FeaturesSection() {
  return (
    <section id="craftsmanship" className="bg-[#0e1118] py-20 border-t border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {FEATURES.map(feature => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
