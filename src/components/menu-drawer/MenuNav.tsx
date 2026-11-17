const NAV_ITEMS = ['Collection', 'Craftsmanship', 'Heritage', 'Contact'];

interface MenuNavProps {
  onNavigate: () => void;
}

export function MenuNav({ onNavigate }: MenuNavProps) {
  return (
    <nav className="mt-8 space-y-6">
      {NAV_ITEMS.map(item => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={onNavigate}
          className="block font-['Cormorant_Garamond',serif] text-3xl text-slate-200 hover:text-white transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
