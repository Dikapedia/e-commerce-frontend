import { MenuButton } from './MenuButton';
import { Logo } from './Logo';
import { SearchButton } from './SearchButton';
import { AccountButton } from './AccountButton';
import { BagButton } from './BagButton';

interface HeaderProps {
  totalCartCount: number;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  onOpenCart: () => void;
}

export function Header({ totalCartCount, onOpenMenu, onOpenSearch, onOpenAuth, onOpenCart }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0b0d12]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Left: Hamburger Button */}
        <MenuButton onClick={onOpenMenu} />

        {/* Center: Brand Logo */}
        <Logo />

        {/* Right: Account, Search & Bag Buttons */}
        <div className="flex items-center space-x-3">
          <AccountButton onClick={onOpenAuth} />
          <SearchButton onClick={onOpenSearch} />
          <BagButton count={totalCartCount} onClick={onOpenCart} />
        </div>
      </div>
    </header>
  );
}
