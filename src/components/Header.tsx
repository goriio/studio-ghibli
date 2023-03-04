import {
  Bars2Icon,
  HomeIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ForwardRefExoticComponent, SVGProps, useState } from 'react';
import { Container } from './Container';

type NavProps = {
  open: boolean;
  onClose: () => void;
  data: {
    Icon: ForwardRefExoticComponent<
      SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
      }
    >;
    name: string;
    url: string;
  }[];
};

export function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-slate-900 z-10 border-b border-b-slate-800 lg:fixed lg:w-72 lg:left-0 lg:h-screen lg:border-r lg:border-r-slate-800 lg:overflow-y-auto">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-slate-200">
            <span className="uppercase font-extrabold">Studio Ghibli</span>
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            {navOpen ? (
              <XMarkIcon
                className="w-6 h-6"
                onClick={() => setNavOpen(false)}
              />
            ) : (
              <Bars2Icon className="w-6 h-6" onClick={() => setNavOpen(true)} />
            )}
          </div>
        </div>
        <Nav
          open={navOpen}
          onClose={() => setNavOpen(false)}
          data={[
            {
              Icon: HomeIcon,
              name: 'Home',
              url: '/',
            },
            {
              Icon: MagnifyingGlassIcon,
              name: 'Search',
              url: '/search',
            },
            {
              Icon: SparklesIcon,
              name: 'Latest',
              url: '/latest',
            },
          ]}
        />
      </Container>
    </header>
  );
}

function Nav({ open, onClose, data }: NavProps) {
  const router = useRouter();

  return (
    <nav
      className={clsx(
        'relative max-h-0 grid grid-cols-1 gap-6 w-full bg-slate-900 z-10 overflow-hidden lg:max-h-full lg:py-5 lg:overflow-visible',
        open && 'max-h-full mt-4 overflow-visible'
      )}
    >
      <ul className="grid grid-cols-1 gap-2">
        {data.map(({ name, Icon, url }) => {
          return (
            <li key={name} onClick={onClose}>
              <Link
                href={url}
                className={clsx(
                  'flex items-center space-x-2 px-4 py-2 font-semibold text-sm rounded-lg transition ease-in-out hover:bg-sky-600 active:bg-sky-700',
                  router.pathname === url && 'bg-sky-700'
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
