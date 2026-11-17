import type { ReactNode } from 'react';

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
  children?: ReactNode;
}

export function FooterColumn({ title, links, children }: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">{title}</h4>
      {children ?? (
        <ul className="space-y-2.5 font-light">
          {links.map(link => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
